// --------------------Fill in Input when Window Loads------------------------------- //

window.onload = function(){

    var user = firebase.auth().currentUser;
    if (user) {
        name = user.displayName;
        document.getElementById('displayNameInput').textContent = name;
    } else {
        alert("You're not signed in");
    }
    };


$('#update-displayName').click(function(){
    updateDisplayName();
});

// --------------------Update Nickname------------------------------- //

function updateDisplayName(team){
    var user = firebase.auth().currentUser;
    var newName = document.getElementById('displayNameInput').textContent; 
    if (user) {
        user.updateProfile({
        displayName: newName,
        }).then(function() {
        alert('Update successful.');
        }, function(error) {
        alert('update not successful - check if you are signed in');
        });
    }
};



