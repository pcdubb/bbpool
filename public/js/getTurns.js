console.log('your message');
var turns = [];
turns.length=0;
var emails = [];
emails.length = 0;


function getTurnsList(draft1,draft2){
    var data_base_turns = draft1;
    var data_base_selections = draft2;
    var query = firebase.database().ref(data_base_turns).child(data_base_turns).orderByKey();
    // 'draftOrder2019' & '2019selections' - need to pass this

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
    var carry = populateArray(turnArray,emailArray);
    makeHtmlListForPage(carry,data_base_selections,draft1);
    });
};

//  ++++++++++++++++++++++++ Populate Turns Sequence ++++++++++++++++++++++++++++++++++ 


function populateArray(turnArray2,emailArray2){
        var backward = [];
        backward.length=0;
        var backwardEmail = [];
        backwardEmail.length=0;
        //Shared and First Pick
        turns = turnArray2.concat(turnArray2);
        backward=turnArray2.reverse();
        emails = emailArray2.concat(emailArray2);
        backwardEmail=emailArray2.reverse();
        //Second Pick
        turns = turns.concat(backward);
        emails = emails.concat(backwardEmail);
        //longshot
        turns = turns.concat(backward);
        emails = emails.concat(backwardEmail);
        return(turns);
};

//  ++++++++++++++++++++++++ List the Order on the site ++++++++++++++++++++++++++++++++++ 


function makeHtmlListForPage(turn2,data_base_selections2,draft1){
    var currentPick = 0;
    var ref = firebase.database().ref(data_base_selections2);

        ref.once("value")
        .then(function(snapshot) {
            currentPick = snapshot.numChildren(); 
            makeHtmlListForPage2(currentPick,turn2,draft1);
        });
};


function makeHtmlListForPage2(currentTurn,turn3,draft1){
var htmlTurns = '';
var htmlWhoseTurn = '';
var numbered = '';
for (var i = 0; i < turn3.length + 1; i++) {
    if(i == currentTurn){
        if (i == turn3.length){
            htmlTurns = htmlTurns + "End of Draft" ;
        }
        else{
            numbered = i + 1;
            htmlTurns = htmlTurns + '<h3>'+'<font color="red">' + numbered + ". " + turn3[i]+"</font>"+ '</h3>'+"<br>";
        }
        if (i < turn3.length){
            htmlWhoseTurn = '<font color="red">' + '<u>' + turn3[i] + '</u>' + '</font>' + ' is on the clock!';
        }
        else{
            htmlWhoseTurn = '<font color="red">' + '<u>' + 'Draft is complete' + '</u>'; 
        }
        var ref = firebase.database().ref("2019selections");
        var pick;
        ref.once("value")
        .then(function(snapshot) {
            pick = snapshot.numChildren(); 
            updateTable(pick,draft1);
        });
    }
    else{
        if (i == turn3.length){
        htmlTurns = htmlTurns + "End of Draft";
        }
        else{
        numbered = i + 1;
        htmlTurns = htmlTurns + numbered + ". " + turn3[i] + "<br>";  
        }
    }
};
        document.getElementById('draft-results').innerHTML = htmlTurns;
        document.getElementById('whose-turn').innerHTML = htmlWhoseTurn;
};

//  ++++++++++++++++++++++++ Update Table function ++++++++++++++++++++++++++++++++++ 

function updateTable(pick,draft1) {
    var data_base_turns = draft1;
  
    var teamArray = [];
  var playerArray = [];
  teamArray.length = 0;
  playerArray.length = 0;
  var playerNum;

  var queryTeams = firebase.database().ref("2019selections").orderByKey();
  var query = firebase.database().ref(data_base_turns).child(data_base_turns).orderByKey();

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





