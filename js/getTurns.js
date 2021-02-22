// This file should populate an array of the current year draft turns

var turns = [];
turns.length=0;
var emails = [];
emails.length = 0;

console.log('Get Turns');

function getTurnsList(draft1,draft2){
    var data_base_turns = draft1;
    var data_base_selections = draft2;
    var query = firebase.database().ref(data_base_turns).child(data_base_turns).orderByKey();
    // 'draftOrder2019' & '2019selections' - need to pass this

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
    var carry = populateArray(emailArray);
    var carryList = populateArray(turnArray);
    // console.log(carry);
    makeHtmlListForPage(carryList,data_base_selections,data_base_turns);
    });
};

//  ++++++++++++++++++++++++ Populate Turns Sequence ++++++++++++++++++++++++++++++++++ 

// This does a customized turn list -- turns go twice forward and twice backward then sends it back -- without emails
// I originally included the emails so the person could get an email on their turn -- never incorporated that feature

    function populateArray(turnArray2){
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

//  ++++++++++++++++++++++++ List the Order on the site ++++++++++++++++++++++++++++++++++ 

// This lists the order of the draft

function makeHtmlListForPage(turnList,data_base_selections2,data_base_turns2){
    var currentPick = 0;
    var ref = firebase.database().ref(data_base_selections2);

        ref.once("value")
        .then(function(snapshot) {
            currentPickNum = snapshot.numChildren(); 
            makeHtmlListForPage2(currentPickNum,turnList,data_base_selections2,data_base_turns2);
        });
};


// --- Where I was at reviewing the function ---- broken part is below here
// It's updating the names of us players correctly, but not getting the NCAA BB team picks
// into the table

function makeHtmlListForPage2(currentPickNum,turnList,data_base_selections3,data_base_turns3){
var htmlTurns = '';
var htmlWhoseTurn = '';
var numbered = '';
for (var i = 0; i < turnList.length + 1; i++) {
    if(i == currentPickNum){
        if (i == turnList.length){
            htmlTurns = htmlTurns + "End of Draft" ;
        }
        else{
            numbered = i + 1;
            htmlTurns = htmlTurns + '<h3>'+'<font color="red">' + numbered + ". " + turnList[i]+"</font>"+ '</h3>'+"<br>";
        }
        if (i < turnList.length){
            htmlWhoseTurn = '<font color="red">' + '<u>' + turnList[i] + '</u>' + '</font>' + ' is on the clock!';
        }
        else{
            htmlWhoseTurn = '<font color="red">' + '<u>' + 'Draft is complete' + '</u>'; 
        }
        // var ref = firebase.database().ref(data_base_turns3);
        // var pick;
        // ref.once("value")
        // .then(function(snapshot) {
        //     pick = snapshot.numChildren(); 
            updateTable(currentPickNum,data_base_selections3,data_base_turns3);
        // });
    }
    else{
        //this puts end of draft in the HTML Turns array 
        // IMPROVE -- prob shouldn't update HTML each time
        if (i == turnList.length){
        htmlTurns = htmlTurns + "End of Draft";
        document.getElementById('draft-results').innerHTML = htmlTurns;
        document.getElementById('whose-turn').innerHTML = htmlWhoseTurn;
        }
        //this puts everyone's name in the HTML Turns array
        // IMPROVE -- prob shouldn't update HTML each time
        else{
        numbered = i + 1;
        htmlTurns = htmlTurns + numbered + ". " + turnList[i] + "<br>"; 
        document.getElementById('draft-results').innerHTML = htmlTurns;
        document.getElementById('whose-turn').innerHTML = htmlWhoseTurn; 
        }
        //this blanks out the long turn list if the draft is over
        if(numbered == i + 1){
            document.getElementById('draft-results').innerHTML = '';
            document.getElementById('whose-turn').innerHTML = ''; 
        }
    }
};
        // document.getElementById('draft-results').innerHTML = htmlTurns;
        // document.getElementById('whose-turn').innerHTML = htmlWhoseTurn;
};

//  ++++++++++++++++++++++++ Update Table function ++++++++++++++++++++++++++++++++++ 

function updateTable(pick,data_base_selections4,data_base_turns4) {
    var data_base_turns = data_base_turns4;
  
    var teamArray = [];
    var playerArray = [];
    teamArray.length = 0;
    playerArray.length = 0;
    var playerNum;

  var queryTeams = firebase.database().ref(data_base_selections4).orderByKey();
  var query = firebase.database().ref(data_base_turns).child(data_base_turns).orderByKey();

  // this part puts the participant name values in the table
  query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var nameKey = childSnapshot.val().name;
      playerArray.push(nameKey);
    });
    playerNum = playerArray.length + 1;
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





