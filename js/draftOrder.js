// this file will contain a function to populate an array for the current year's draft order
// eventually, it would be good to have the year as a variable, so the user can select any year and see the 
// draft order and selections... For now, this will have to do...


// In order for this to work - you need to edit this file (to update the correct database) and uncomment the draftOrder.js 
// line in index.html ---<script src="js/draftOrder.js"></script>
// Also need to make sure the firebase database rules are set to write - true...

// 2020
// 1. Pete
// 2. G
// 3. Rod
// 4. Marcus
// 5. Adam 
// 6. Glen
// 7. Paul
// 8. Chris
// 9. Tom
// 10. James


//2019
//1. Tom
//2. Adam
//3. Rod
//4. James
//5. Glen
//6. G
//7. Chris
//8. Paul
//9. Pete
//10. Marcus

//2018
// 1. Chris
// 2. Pete 
// 3. Glen 
// 4. G
// 5. Paul
// 6. Adam
// 7. Marcus
// 8. Tom
// 9. James
// 10. Rod



// ++++++++++++++++++++++++++++++ this is made to run once to populate the selection order +++++++++++++++++++++++++++
$(document).ready(function() {
    // Detect ios 11_0_x affected 
    // NEED TO BE UPDATED if new versions are affected
    var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3|OS 11_1|OS 11_1_1|OS 11_1_2|OS 11_2|OS 11_2_1/.test(ua);

    // ios 11 bug caret position
    if ( iOS && iOS11 ) {

        // Add CSS class to body
        $("body").addClass("iosBugFixCaret");
    };
});
console.log('DraftOrder');

populateDraftOrder();

function populateDraftOrder() {
console.log("made it to the populate function");

// 1.  Tom
// 2. G
// 3. Adam
// 4. Glen
// 5. Paul
// 6. James
// 7. Chris
// 8. Rod
// 9. Pete
// 10. Marcus



   var draftOrder2021 = {
        0:{
            name: "Tom",
            email: "tbarbar90@hotmail.com",
        },
        1:{
            name: "Greg",
            email: "ghaughtillini@hotmail.com",
        },
        2:{
            name: "Adam",
            email: "adam.durski@gmail.com",
        },
        3:{
            name: "Glen",
            email: "ccpowpow44@hotmail.com",
        },
        4:{
            name: "Paul",
            email: "paul.weyant@gmail.com",
        },
        5:{
            name: "James",
            email: "james.f.mckinney@gmail.com",
        },
        6:{
            name: "Chris",
            email: "cjames@lu-tek.com",
        },
        7:{
            name: "Rod",
            email: "rodhale@comcast.net",
        },
        8:{
            name:"Pete",
            email: "peter.d.fischer@gmail.com",
        },
        9:{
            name: "Marcus",
            email: "Marcus.Divita@concordenergy.com",
        }
    }
    console.log(draftOrder2021);


    // var draftOrder2020 = {
    //     0:{
    //         name:"Pete",
    //         email: "peter.d.fischer@gmail.com",
    //     },
    //     1:{
    //         name: "Greg",
    //         email: "ghaughtillini@hotmail.com",
    //     },
    //     2:{
    //         name: "Rod",
    //         email: "rodhale@comcast.net",
    //     },
    //     3:{
    //         name: "Marcus",
    //         email: "Marcus.Divita@concordenergy.com",
    //     },
    //     4:{
    //         name: "Adam",
    //         email: "adam.durski@gmail.com",
    //     },
    //     5:{
    //         name: "Glen",
    //         email: "ccpowpow44@hotmail.com",
    //     },
    //     6:{
    //         name: "Paul",
    //         email: "paul.weyant@gmail.com",
    //     },
    //     7:{
    //         name: "Chris",
    //         email: "cjames@lu-tek.com",
    //     },
    //     9:{
    //         name: "Tom",
    //         email: "tbarbar90@hotmail.com",
    //     },
    //     10:{
    //         name: "James",
    //         email: "james.f.mckinney@gmail.com",
    //     }
    // }







    // var draftOrder2019 = {
    //     0:{
    //         name: "Tom",
    //         email: "tbarbar90@hotmail.com",
    //     },
    //     1:{
    //         name: "Adam",
    //         email: "adam.durski@gmail.com",
    //     },
    //     2:{
    //         name: "Rod",
    //         email: "rodhale@comcast.net",
    //     },
    //     3:{
    //         name: "James",
    //         email: "james.f.mckinney@gmail.com",
    //     },
    //     4:{
    //         name: "Glen",
    //         email: "ccpowpow44@hotmail.com",
    //     },
    //     5:{
    //         name: "Greg",
    //         email: "ghaughtillini@hotmail.com",
    //     },
    //     6:{
    //         name: "Chris",
    //         email: "cjames@lu-tek.com",
    //     },
    //     7:{
    //         name: "Paul",
    //         email: "paul.weyant@gmail.com",
    //     },
    //     8:{
    //         name: "Pete",
    //         email: "peter.d.fischer@gmail.com",
    //     },
    //     9:{
    //         name: "Marcus",
    //         email: "Marcus.Divita@concordenergy.com",
    //     }
    // }


    // set database.
    var draftOrderRef = firebase.database().ref().child("draftOrder2021");
  
    // Write the new post's data 
    draftOrderRef.set({draftOrder2021});
    
    // // set database.
    // var draftOrderRef2 = firebase.database().ref().child("draftOrder2019");
  
    // // Write the new post's data 
    // draftOrderRef2.set({draftOrder2019});


};

