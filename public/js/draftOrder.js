// this file will contain a function to populate an array for the current year's draft order
// eventually, it would be good to have the year as a variable, so the user can select any year and see the 
// draft order and selections... For now, this will have to do...


// In order for this to work - you need to edit this file (to update the correct database) and uncomment the draftOrder.js 
// line in index.html additionally, you need to add the following button code somewhere in Index.html
// <button class="btn btn-primary" id='update-turns'>Update Turn Sequence</button>


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
// add a button with ID update-turns
//   $('#section-123').click(function() {
//     // var team = $('#tags').val();
//     populateDraftOrder();
//   });
});


populateDraftOrder();

function populateDraftOrder() {
console.log("made it to the populate function");

   var draftOrder2018 = {
        0:{
            name: "Chris",
            email: "cjames@lu-tek.com",
        },
        1:{
            name: "Tom",
            email: "tbarbar90@hotmail.com"
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
            name:"Pete",
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
        9:{
            name: "Rod",
            email: "rodhale@comcast.net",
        },
        10:{
            name: "Glen",
            email: "ccpowpow44@hotmail.com",
        }
    }

    console.log(draftOrder2018);

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
    var draftOrderRef = firebase.database().ref().child("draftOrder2018");
  
    // Write the new post's data 
    draftOrderRef.set({draftOrder2018});
    
    // // set database.
    // var draftOrderRef2 = firebase.database().ref().child("draftOrder2019");
  
    // // Write the new post's data 
    // draftOrderRef2.set({draftOrder2019});


};

