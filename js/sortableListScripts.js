
    var name;
    var email;
    
    var Picker = firebase.database().ref("PredictionPool2021");
    var user = firebase.auth().onAuthStateChanged(function(user) {
    console.log('I am here 2');
    email = user.email;

/////////////////  shows picks //////////////////////


function ShowPicks(i){
    var queryPicks = Picker.orderByKey();
    var picksArray = [];
        queryPicks.once("value")
        .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var picksKey = childSnapshot.val().picks;
            picksArray.push(picksKey);
        });

        var eachPick=[];
        var htmlPicks = "You have picked and your choices were: " + '<br>';
        var x = 1;
        console.log(picksArray[i]);
        eachPick = picksArray[i];
        for (var q = 0; q <10; q++) {
            console.log(eachPick[q]);
            htmlPicks = htmlPicks + x + '.) ' + eachPick[q] + '<br>';
            x++;
        };

        document.getElementById('team-selection-box').innerHTML = htmlPicks;

    });
    };


/////////////////  shows picks //////////////////////




// //////////////////// THIS WORKS

function hasUserPicked(){
    var queryNames = Picker.orderByKey();
    var nameArray = [];
      queryNames.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var nameKey = childSnapshot.val().name;
          nameArray.push(nameKey);
      });

    var nameLen = nameArray.length;
    console.log("namelength = " + nameLen + " " + email);
    var nameCount = nameLen + 1;
    for (var i = nameCount; i > - 1; i--) {
        if(nameLen > 0){
            if (email == nameArray[i]){
            console.log(nameArray[i] + " oh yeah -- you have picked brosephina");
            ShowPicks(i);
            break;
        }
        else{
            console.log("The number is " + i + " " + nameArray[i]);
        }
        };
    };
    });
    };

hasUserPicked();

// //////////////////// THIS WORKS




        
    if (user) {
        email = user.email;
        console.log('User is signed in.');
      } 
      else {
        console.log('NO User is signed in.')
      }
    });
    

    $(function() {
        $( "#sortable" ).sortable({ 
            placeholder: "ui-sortable-placeholder" 
        });

    });



    $("#review_sel").click(function(){
        $('#sortable').sortable();
        var result = $('#sortable').sortable("toArray");
        // console.log(result);
        var user = firebase.auth().currentUser;
        var result_text = "Confirm Your Selections:\n"; 

            if (user) {
                var arrayLength = result.length;
                for (var i = 0; i < arrayLength; i++) {
                    var q = i + 1;
                    result_text = result_text + q + ". " + result[i] + "\n"; 
                }

                location.reload();
                if (confirm(result_text)) {
                    email = user.email;
                    var PredictionPool2021 = {
                            picks: result,
                            name: email
                    };
                        // Get a key for a new Post.
                    var newPostKey = firebase.database().ref().child("PredictionPool2021").push().key;
                        // Write the new post's data simultaneously in the posts list and the user's post list.
                    var updates = {};
                    updates['/' + "PredictionPool2021" + '/' + newPostKey ] = PredictionPool2021;

                    return firebase.database().ref().update(updates);
                } else {
                    location.reload();
                };
            }
            else{
                alert("You're not signed in");
                }
    });