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
    }


    // update this section each year
    var draftOrder = 'draftOrder2019';
    var draftSelection = '2019selections';
    var pageTitle = '2019 Draft Room';
    // update this section each year



    document.getElementById('main-page-title').textContent = pageTitle;
    $("#main-pic").attr("src","../img/basketball.png");
    $("#main-nav-item1").attr("href","2018DraftRoom.html");
    $("#section-123").load("../HTML/break-hr.html");
    document.getElementById('main-nav-item1').textContent = "2018 Results";
    $("#selection-table").load("../HTML/table1.html");
    $("#team-selection-box").load("../HTML/selectTeam.html");
    getTurnsList(draftOrder,draftSelection);
});

