
// var teamsObject = require('./NCAAteams.json');
// var teamArray = [];

// for(var attributename in teamsObject){
//   teamArray.push(childData.School);
//   console.log(attributename+": " + myobject.School);
// }

// // This populates the selection box for teams with NCAA BB Teams for selection

var query = firebase.database().ref("teams").orderByKey();
var teamArray = [];
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      teamArray.push(childData.School);
  });
});


// // ----------------------------------------------------------- //


$(document).ready(function() {
    var aTags = teamArray;

    $( "#tags" ).autocomplete({
        source: aTags
    });
    
});
