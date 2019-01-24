
// turns.length=0;
// var emails = [];
// emails.length = 0;

$(document).ready(function() {
// $("#selection-table").load("../HTML/table1.html");
// var draftOrder = 'draftOrder2019';
// var draftSelection = '2019selections';
// listPlayers(draftOrder);
// listTeams(draftSelection);
});


// this part lists the participants of the pool

function listPlayers(orderedPlayerTurnList){
    var player_turn_list = firebase.database().ref(orderedPlayerTurnList).child(orderedPlayerTurnList).orderByKey();
    // 'draftOrder2019' & '2019selections' - need to pass this
    var turnArray=[];
    player_turn_list.once("value")
    .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.val().name;
            turnArray.push(key); // this should include all teams
        })
        // this part puts the participant name values in the table
        var playerNum = turnArray.length + 1;
        for (var i = 1; i < playerNum; i++) {
            if(playerNum > 0){
                var tableCell = 'p'+ i;
                document.getElementById(tableCell).textContent = turnArray[i-1];
            }
            else{
            }
            };
    });
};



// This part puts the picks/selections in the table
function listTeams(draftSelection){
var queryTeams = firebase.database().ref(draftSelection).orderByKey();
var teamArray = [];
  queryTeams.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var teamKey = childSnapshot.val().selTeam;
      teamArray.push(teamKey);
  });
    var pick = teamArray.length;
    for (var i = 1; i < pick + 1; i++) {
        if(pick > 0){
            var tableCell = 'pick'+ i;
            document.getElementById(tableCell).textContent = teamArray[i-1];
        }
        else{
        }
    };
  });
};