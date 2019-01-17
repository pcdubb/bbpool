//  ++++++++++++++++++++++++ Update Table function ++++++++++++++++++++++++++++++++++ 

function updateTable(pick) {
    var query = firebase.database().ref('draftOrder2019').child('draftOrder2019').orderByKey();
    var queryTeams = firebase.database().ref("2019selections").orderByKey();


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
    
  
  
    // This part puts the picks/selections in the database
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