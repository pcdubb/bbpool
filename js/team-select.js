var currentYearSelections = '2021selections';
var currentYearOrder = 'draftOrder2021';

var emailArray = [];
emailArray= ["tbarbar90@hotmail.com",
"ghaughtillini@hotmail.com",
"adam.durski@gmail.com",
"ccpowpow44@hotmail.com",
"paul.weyant@gmail.com",
"james.f.mckinney@gmail.com",
"cjames@lu-tek.com",
"rodhale@comcast.net",
"peter.d.fischer@gmail.com",
"Marcus.Divita@concordenergy.com",
"tbarbar90@hotmail.com",
"ghaughtillini@hotmail.com",
"adam.durski@gmail.com",
"ccpowpow44@hotmail.com",
"paul.weyant@gmail.com",
"james.f.mckinney@gmail.com",
"cjames@lu-tek.com",
"rodhale@comcast.net",
"peter.d.fischer@gmail.com",
"Marcus.Divita@concordenergy.com",
"Marcus.Divita@concordenergy.com",
"peter.d.fischer@gmail.com",
"rodhale@comcast.net",
"cjames@lu-tek.com",
"james.f.mckinney@gmail.com",
"paul.weyant@gmail.com",
"ccpowpow44@hotmail.com",
"adam.durski@gmail.com",
"ghaughtillini@hotmail.com",
"tbarbar90@hotmail.com",
"Marcus.Divita@concordenergy.com",
"peter.d.fischer@gmail.com",
"rodhale@comcast.net",
"cjames@lu-tek.com",
"james.f.mckinney@gmail.com",
"paul.weyant@gmail.com",
"ccpowpow44@hotmail.com",
"adam.durski@gmail.com",
"ghaughtillini@hotmail.com",
"tbarbar90@hotmail.com"];





// 2020 Order
// ["peter.d.fischer@gmail.com",
// "ghaughtillini@hotmail.com",
// "rodhale@comcast.net",
// "Marcus.Divita@concordenergy.com",
// "adam.durski@gmail.com",
// "ccpowpow44@hotmail.com",
// "paul.weyant@gmail.com",
// "cjames@lu-tek.com",
// "tbarbar90@hotmail.com",
// "james.f.mckinney@gmail.com",
// "peter.d.fischer@gmail.com",
// "ghaughtillini@hotmail.com",
// "rodhale@comcast.net",
// "Marcus.Divita@concordenergy.com",
// "adam.durski@gmail.com",
// "ccpowpow44@hotmail.com",
// "paul.weyant@gmail.com",
// "cjames@lu-tek.com",
// "tbarbar90@hotmail.com",
// "james.f.mckinney@gmail.com",
// "james.f.mckinney@gmail.com",
// "tbarbar90@hotmail.com",
// "cjames@lu-tek.com",
// "paul.weyant@gmail.com",
// "ccpowpow44@hotmail.com",
// "adam.durski@gmail.com",
// "Marcus.Divita@concordenergy.com",
// "rodhale@comcast.net",
// "ghaughtillini@hotmail.com",
// "peter.d.fischer@gmail.com",
// "james.f.mckinney@gmail.com",
// "tbarbar90@hotmail.com",
// "cjames@lu-tek.com",
// "paul.weyant@gmail.com",
// "ccpowpow44@hotmail.com",
// "adam.durski@gmail.com",
// "Marcus.Divita@concordenergy.com",
// "rodhale@comcast.net",
// "ghaughtillini@hotmail.com",
// "peter.d.fischer@gmail.com"];

//2019 order
//  emailArray= ["tbarbar90@hotmail.com",
//  "adam.durski@gmail.com",
//  "rodhale@comcast.net",
//  "james.f.mckinney@gmail.com",
//  "ccpowpow44@hotmail.com",
//  "ghaughtillini@hotmail.com",
//  "cjames@lu-tek.com",
//  "paul.weyant@gmail.com",
//  "peter.d.fischer@gmail.com",
//  "Marcus.Divita@concordenergy.com",
//  "tbarbar90@hotmail.com",
//  "adam.durski@gmail.com",
//  "rodhale@comcast.net",
//  "james.f.mckinney@gmail.com",
//  "ccpowpow44@hotmail.com",
//  "ghaughtillini@hotmail.com",
//  "cjames@lu-tek.com",
//  "paul.weyant@gmail.com",
//  "peter.d.fischer@gmail.com",
//  "Marcus.Divita@concordenergy.com",
//  "Marcus.Divita@concordenergy.com",
//  "peter.d.fischer@gmail.com",
//  "paul.weyant@gmail.com",
//  "cjames@lu-tek.com",
//  "ghaughtillini@hotmail.com",
//  "ccpowpow44@hotmail.com",
//  "james.f.mckinney@gmail.com",
//  "rodhale@comcast.net",
//  "adam.durski@gmail.com",
//  "tbarbar90@hotmail.com",
//  "Marcus.Divita@concordenergy.com",
//  "peter.d.fischer@gmail.com",
//  "paul.weyant@gmail.com",
//  "cjames@lu-tek.com",
//  "ghaughtillini@hotmail.com",
//  "ccpowpow44@hotmail.com",
//  "james.f.mckinney@gmail.com",
//  "rodhale@comcast.net",
//  "adam.durski@gmail.com",
//  "tbarbar90@hotmail.com"];


// var dummyPick = {
//     turnNumber: 0,
//     email: 'paul.weyant@gmail.com',
//     selTeam: 'some team'
//   };

  //easier way to do it
// var newPostKey1 = firebase.database().ref().child(currentYearDatabase).push().set(dummyPick);


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
    pickTurn(currentYearSelections,emailArray);
  });
});



//  ++++++++++++++++++++++++ who is next ++++++++++++++++++++++++++++++++++
// This is done with 3 functions to avoid latency errors. The first function 
// pickTurn() - looks at the selections database and determines how many selections have been made - 
// 'whoIsNext() - gets the email of who is next
// Finally, the draft order and the number of selections are passed to the 3rd function getPicker()
// and this function reveals whose turn it is.
// Need to call pick because of asynchronicity...
// who = pickNum() ---> returns next person...
// why 3 functions? Workaround - because of asynchronicity/database latency (will return empty arrays otherwise)



function pickTurn(currentYearSelections,emailTurnArray){
    var user = firebase.auth().currentUser;
    if (user) {
        name = user.displayName;
        email = user.email;
        var ref = firebase.database().ref(currentYearSelections);
        ref.once("value")
          .then(function(snapshot) {
            var pPick = snapshot.numChildren(); // 1 ("name")
            getPicker(emailTurnArray,pPick,email);
            // whoIsNext(pPick,email);
          });
    }
    else{
        alert("You're not signed in")
        }
};

// May not need this step
// function whoIsNext(pickInt,email){
//     var emailTurnArray = [];
//     console.log(emailTurnArray);
//     getPicker(emailTurnArray,pickInt,email);
// };

function getPicker(array,num,email){
    console.log(array[num]+' OK!');

    var team = $('#tags').val();
    console.log(team);
    firebase.database().ref("teams").orderByChild("School").equalTo(team).once("value",snapshot1 => {
        const teamData = snapshot1.val();
    firebase.database().ref(currentYearSelections).orderByChild("selTeam").equalTo(team).once("value",snapshot2 => {
        const userData = snapshot2.val();
    firebase.database().ref(currentYearSelections).orderByChild("selTeam").once("value",snapshot3 => {
        const teamList = snapshot3.numChildren();

        if (teamData){
                console.log(array[num]);
                console.log(email);
                if (array[num].toLowerCase() == email.toLowerCase()){
                    console.log (array[num] + ' and ' + email + ' are the same. The correct person is selecting a team');

                    if(teamList < 10){
                        console.log(array[num+1]);
                        // updateOndeck(array[num+1]);
                        saveTeamToDb(email,team,num); 
                        window.location.reload();
                        alert('Congrats, you have selected ' + team); 
                    }
                    else{
                        if (userData){
                            alert('Sorry, ' + team + ' have already been selected!');
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
  var newPostKey = firebase.database().ref().child(currentYearSelections).push().key;
  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/' + currentYearSelections + '/' + newPostKey] = postData;
  return firebase.database().ref().update(updates);
};

//  ++++++++++++++++++++++++ update the ondeck person no longer use ++++++++++++++++++++++++++++++++++ 

// function updateOndeck(nextEmail) {

//     // Ondeck entry.
//     var postData = {
//       ondeck: nextEmail
//     };


//     // Write the new data
//     var updates = {};
//     updates['/ondeck/'] = postData;
//     return firebase.database().ref().update(updates);
//   };


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



//************************************ */


// This file should populate an array of the current year draft turns


var emails = [];
emails.length = 0;


function getEmailList(currentYearOrder,currentYearSelections){
    var data_base_turns = currentYearOrder;
    var data_base_selections = currentYearSelections;
    var query = firebase.database().ref(data_base_turns).child(data_base_turns).orderByKey();
    // 'draftOrder2020' & '2020selections' - need to pass this

    var turnArray = [];
    turnArray.length = 0;
    var emailArray = [];
    emailArray.length = 0;
    // var childData='';

///this section does this:
// turn array is an array of the first names 1 to 10 in order of the draft pick
// emailArray is the same thing with emails
    query.once("value")
    .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.val().name;
        var turnEmail = childSnapshot.val().email;
        turnArray.push(key);
        emailArray.push(turnEmail);
    })
    // var carry = populateEmailArray(turnArray,emailArray);
    var turns = populateEmailArray(emailArray);
    return(turns);
    });
};

//  ++++++++++++++++++++++++ Populate Turns Sequence ++++++++++++++++++++++++++++++++++ 

// This does a customized turn list -- turns go twice forward and twice backward then sends it back -- without emails
// I originally included the emails so the person could get an email on their turn -- never incorporated that feature

    function populateEmailArray(turnArray2){
        var backward = [];
        backward.length=0;
        // var backwardEmail = [];
        // backwardEmail.length=0;
        //Shared and First Pick
        turns = turnArray2.concat(turnArray2);
        backward=turnArray2.reverse();
        // emails = emailArray2.concat(emailArray2);
        // backwardEmail=emailArray2.reverse();
        //Second Pick
        turns = turns.concat(backward);
        // emails = emails.concat(backwardEmail);
        //longshot
        turns = turns.concat(backward);
        // emails = emails.concat(backwardEmail);
        return(turns); 
};






// **************************************