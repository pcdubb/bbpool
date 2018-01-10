// this file will contain a function to populate an array for the current year's draft order
// eventually, it would be good to have the year as a variable, so the user can select any year and see the 
// draft order and selections... For now, this will have to do...


// ++++++++++++++++++++++++++++++ this is made to run once to populate the selection order +++++++++++++++++++++++++++


function populateDraftOrder() {
console.log("made it to the populate function");
    // A post entry.
    var draftOrder2018 = {
        0:{
            name: "Chris",
            email: "cjames@lu-tek.com",
        },
        1:{
            name: "Tom",
            email: "tbarbar90@hotmail.com",
        },
        2:{
            name: "Greg",
            email: "ghaughtillini@hotmail.com",
        },
        3:{
            name: "Paul",
            email: "paul.weyant@gmail.com",
        },
        4:{
            name: "Pete",
            email: "peter.d.fischer@gmail.com",
        },
        5:{
            name: "Adam",
            email: "adam.durski@gmail.com",
        },
        6:{
            name: "James",
            email: "james.f.mckinney@gmail.com",
        },
        7:{
            name: "Marcus",
            email: "Marcus.Divita@concordenergy.com",
        },
        8:{
            name: "Rod",
            email: "rodhale@comcast.net",
        },
        9:{
            name: "Glen",
            email: "ccpowpow44@hotmail.com",
        }
    };

    // set database.
    var draftOrderRef = firebase.database().ref().child("draftOrder");
  
    // Write the new post's data 
    draftOrderRef.set({draftOrder2018});
    
};


