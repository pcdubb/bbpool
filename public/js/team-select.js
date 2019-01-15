

$(document).ready(function() {
    // Detect ios 11_0_x affected 
    // NEED TO BE UPDATED if new versions are affected
    var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3|OS 11_1|OS 11_1_1|OS 11_1_2|OS 11_2|OS 11_2_1/.test(ua);

    // ios 11 bug caret position
    if ( iOS && iOS11 ) {

        // Add CSS class to body
        $("body").addClass("iosBugFixCaret");

    }
  $('#select-btn').click(function() {
    var team = $('#tags').val();
    pickTurn(team);
  });
});


// sendNextEmail('paul.weyant@gmail.com', 'Test subject', 'Test message');
// console.log('should send an email');

//  ++++++++++++++++++++++++ who is next ++++++++++++++++++++++++++++++++++
// This is done with 3 functions to avoid latency errors. The first function 
// pickTurn() - looks at the selections database and determines how many selections have been made - 
// 'whoIsNext() - gets the email of who is next
// Finally, the draft order and the number of selections are passed to the 3rd function getPicker()
// and this function reveals whose turn it is.
// Need to call pick because of asynchronicity...
// who = pickNum() ---> returns next person...
// why 3 functions? Workaround - because of asynchronicity/database latency (will return empty arrays otherwise)



function pickTurn(team){
    var user = firebase.auth().currentUser;
    if (user) {
        name = user.displayName;
        email = user.email;
        var ref = firebase.database().ref("2018selections");
        ref.once("value")
          .then(function(snapshot) {
            var pPick = snapshot.numChildren(); // 1 ("name")
            whoIsNext(pPick,email,team);
          });
    }
    else{
        alert("You're not signed in")
        }
};

function whoIsNext(pickInt,email,team){
    var emailTurnArray= [];
    var eachEmail;
    var who = '';
    emailTurnArray = emails;
    getPicker(emailTurnArray,pickInt,email);
};

function getPicker(array,num,email){
    console.log(array[num]+' OK!');

    var team = $('#tags').val();
    firebase.database().ref("teams").orderByChild("School").equalTo(team).once("value",snapshot1 => {
        const teamData = snapshot1.val();
    firebase.database().ref("2018selections").orderByChild("selTeam").equalTo(team).once("value",snapshot2 => {
        const userData = snapshot2.val();
    firebase.database().ref("2018selections").orderByChild("selTeam").once("value",snapshot3 => {
        const teamList = snapshot3.numChildren();

        if (teamData){
          console.log("Team is on list!");

                if (array[num] == email){
                    console.log (array[num] + ' and ' + email + ' are the same. The correct person is selecting a team');

                    if(teamList < 10){
                        console.log(array[num+1]);
                        updateOndeck(array[num+1]);
                        saveTeamToDb(email,team,num); 
                        window.location.reload();
                        alert('Congrats, you have selected ' + team); 
                    }
                    else{
                        if (userData){
                            alert('Sorry, ' + team + ' has already been selected!');
                            }
                            else{
                                console.log(array[num+1]);
                                saveTeamToDb(email,team,num); 
                                window.location.reload();
                                alert('Congrats, you have selected ' + team); 
                            }
                    }
                }
                else{
                    alert('Sorry, it is not your turn!')
                }
            }
        else{
            alert(team + ' is not on the NCAA list. Please check the selection and pick again');
        }
    });
    });   
    });
};



//  ++++++++++++++++++++++++ Check if Team is on List ++++++++++++++++++++++++++++++++++ 

function testTeamOnList(testArray, team){
    var onlist;
    var isSelected = 0;
    // console.log (isSelected + ' value of isSelected');
    // console.log ('printing the test array ');
    // console.log (onlist);
    for (let onlist of testArray) {
        if(onlist.selTeam === String(team)) {  
            alert('Sorry, ' + team + ' has been selected');
            isSelected = 1;
            console.log (isSelected + ' value of isSelected changed to 1');
         }
    }
    if(isSelected == 1) {
        console.log('returning 1');
        return(1);
    } 
    else {
        console.log('returning 0');
        return(0);
    }
    // if(test >= 0){
    //     alert('found it in the array');
    //     return(true);
    // }
    // else{
    //     alert("Please Check your entry - the team you selected isn't on the list.");
    //     return(false); 
    // }
};    

//  ++++++++++++++++++++++++ put selected team in database ++++++++++++++++++++++++++++++++++ 

function saveTeamToDb(email,selTeam,pick) {

  // A post entry.
  var postData = {
    turnNumber: pick,
    email: email,
    selTeam: selTeam
  };
//   var pickSpot = pick +1;
//   var tableCell = 'pick'+pickSpot;
//   document.getElementById(tableCell).textContent = selTeam;

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('2018selections').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/2018selections/' + newPostKey] = postData;
  return firebase.database().ref().update(updates);
};

//  ++++++++++++++++++++++++ update the ondeck person ++++++++++++++++++++++++++++++++++ 

function updateOndeck(nextEmail) {

    // Ondeck entry.
    var postData = {
      ondeck: nextEmail
    };


    // Write the new data
    var updates = {};
    updates['/ondeck/'] = postData;
    return firebase.database().ref().update(updates);
  };


// //  ++++++++++++++++++++++++ Select team function ++++++++++++++++++++++++++++++++++ 

// // First Part determines how many picks have been made - passing the team and current pick number to step 2

// function selectTeam(team){
//     var currentPick = 0;
//     var ref = firebase.database().ref("selections");
//         ref.once("value")
//         .then(function(snapshot) {
//             currentPick = snapshot.numChildren(); 
//             selectTeam2(team,currentPick);
//         });
// };

// // Step 2 makes sure the user is signed in and retrieves email

// function selectTeam2(team,pick){
//     var user = firebase.auth().currentUser;
//     if (user) {
//         name = user.displayName;
//         email = user.email;
//         document.getElementById('show-user').textContent = email;
//         document.getElementById('show-team').textContent = team;
//         selectTeam2(email,team,pick);
//         } else {
//         alert("You're not signed in");
//     }
//     };

// // Step 3 compares the username to the person's whose turn it should be - if that's true, it saves it to the database
// // otherwise it tells you to wait...

// function selectTeam2(email,team,pick){




// // saveTeamToDb(email,team,pick);
// }