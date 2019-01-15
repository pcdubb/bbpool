// const sendNextEmail = require ('sendAnEmail');

// sendNextEmail('paul.weyant@gmail.com', 'Test subject', 'Test message');
// console.log('should send an email');


var query = firebase.database().ref('draftOrder').child('draftOrder2018').orderByKey();
var queryTeams = firebase.database().ref("2018selections").orderByKey();

var turnArray = [];
turnArray.length = 0;
var emailArray = [];
emailArray.length = 0;
var childData='';


query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.val().name;
      var turnEmail = childSnapshot.val().email;
      turnArray.push(key);
      emailArray.push(turnEmail);
  })
  populateArray();
  makeHtmlListForPage();
});

// queryTeams.once("value")
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var teamKey = childSnapshot.val().selTeam;
//       teamArray.push(teamKey);
//   });
// });


    // populateEmailDB();
    // turn on when creating new email Sequence

//  ++++++++++++++++++++++++ Populate Turns Sequence ++++++++++++++++++++++++++++++++++ 


var turns = [];
turns.length=0;
var emails = [];
emails.length = 0;

function populateArray(){
        var backward = [];
        backward.length=0;
        var backwardEmail = [];
        backwardEmail.length=0;
        //Shared and First Pick
        turns = turnArray.concat(turnArray);
        backward=turnArray.reverse();
        emails = emailArray.concat(emailArray);
        backwardEmail=emailArray.reverse();
        //Second Pick
        turns = turns.concat(backward);
        emails = emails.concat(backwardEmail);
        //longshot
        turns = turns.concat(backward);
        emails = emails.concat(backwardEmail);

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
var htmlWhoseTurn = '';
for (var i = 0; i < turns.length + 1; i++) {
    if(i == currentTurn){
        if (i == turns.length){
            htmlTurns = htmlTurns + "<li class='turns' style='background-color:yellow';>"+ "End of Draft" + "</li>";
        }
        else{
            htmlTurns = htmlTurns + "<li class='turns' style='background-color:yellow';>" + turns[i] + "</li>";
        }
        if (i < turns.length){
            htmlWhoseTurn = '<font color="red">' + '<u>' + turns[i] + '</u>' + '</font>' + ' is on the clock!';
        }
        else{
            htmlWhoseTurn = '<font color="red">' + '<u>' + 'Draft is complete' + '</u>'; 
        }
        var ref = firebase.database().ref("2018selections");
        var pick;
        ref.once("value")
        .then(function(snapshot) {
            pick = snapshot.numChildren(); 
            updateTable(pick);
        });
    }
    else{
        if (i == turns.length){
        htmlTurns = htmlTurns + "<li class='turns';>" + "End of Draft" + "</li>";
        }
        else{
        htmlTurns = htmlTurns + "<li class='turns';>" + turns[i] + "</li>";  
        }
    }
};
        document.getElementById('draft-order').innerHTML = htmlTurns;
        document.getElementById('whose-turn').innerHTML = htmlWhoseTurn;
};

//  ++++++++++++++++++++++++ Update Table function ++++++++++++++++++++++++++++++++++ 

function updateTable(pick) {
  var teamArray = [];
  var playerArray = [];
  teamArray.length = 0;
  playerArray.length = 0;
  var playerNum;


  // this part puts the participant name values in the table
  console.log('***getting here');
  query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var nameKey = childSnapshot.val().name;
      playerArray.push(nameKey);
    });
    playerNum = playerArray.length + 1;
    console.log(playerNum);
    for (var i = 1; i < playerNum; i++) {
    if(playerNum > 0){
        var tableCell = 'p'+ i;
        document.getElementById(tableCell).textContent = playerArray[i-1];
    }
    else{
    }
    };
    });
  


  // This part puts the picks/selections in the table
  queryTeams.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var teamKey = childSnapshot.val().selTeam;
        teamArray.push(teamKey);
    });

  for (var i = 1; i < pick+1; i++) {
    if(pick > 0){
        var tableCell = 'pick'+ i;
        document.getElementById(tableCell).textContent = teamArray[i-1];
    }
    else{
    }
  };
  });
};
