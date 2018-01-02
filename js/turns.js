


var query = firebase.database().ref("playerTurns").orderByKey();

var turnArray = [];
turnArray.length = 0;
var emailArray = [];
emailArray.length = 0;
var childData='';
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.val().name;
      var turnEmail = childSnapshot.val().playerEmail;
      turnArray.push(key);
      emailArray.push(turnEmail);
  });
    populateArray();

    // populateEmailDB();
    // turn on when creating new email Sequence

    makeHtmlListForPage();
});

//  ++++++++++++++++++++++++ Populate Turns Sequence ++++++++++++++++++++++++++++++++++ 


var turns = [];
turns.length=0;
var emails = [];
emails.length = 0;

function populateArray(){
        var backward = [];
        backward.length=0;
        //First Pick
        turns = turnArray.concat(turnArray);
        backward=turnArray.reverse();
        //Second Pick
        turns = turns.concat(backward);
        //longshot
        turns = turns.concat(backward);

};

//  ++++++++++++++++++++++++ List the Order on the site ++++++++++++++++++++++++++++++++++ 


function makeHtmlListForPage(){
    var currentPick = 0;
    var ref = firebase.database().ref("2018selections");
        ref.once("value")
        .then(function(snapshot) {
            currentPick = snapshot.numChildren(); 
            makeHtmlListForPage2(currentPick);
        });
};


function makeHtmlListForPage2(currentTurn){
var htmlTurns = '';
for (var i = 0; i < turns.length; i++) {
    if(i == currentTurn){
        htmlTurns = htmlTurns + "<li class='turns' style='background-color:yellow';>" + turns[i] + "</li>";
    }
    else{
        htmlTurns = htmlTurns + "<li class='turns';>" + turns[i] + "</li>";
    }
};
        document.getElementById('draft-order').innerHTML = htmlTurns;
};


//  ++++++++++++++++++++++++ !!!! Populate Turns Sequence !!!! DO ONLY ONCE!!! ++++++++++++++++++++++++++++++++++ 
// +++ Probably need to configure this at some point with a create game function +++++



// var emails = [];
// emails.length = 0;

// function populateEmailDB(){
//         var backward = [];
//         backward.length=0;
//         //First Pick
//         emails = emailArray.concat(emailArray);
//         backward=emailArray.reverse();
//         //Second Pick
//         emails = emails.concat(backward);
//         //longshot
//         emails = emails.concat(backward);


//         for(var i in emails){
//             var postData = {
//                 email:emails[i],
//                 pickNumber:i
//             }
//             console.log(postData);

//             var newPostKey = firebase.database().ref().child('2017DraftOrder').push().key;
//             var updates = {};
//             updates['/2017DraftOrder/' + newPostKey] = postData;
//             firebase.database().ref().update(updates);
//             };
// };


