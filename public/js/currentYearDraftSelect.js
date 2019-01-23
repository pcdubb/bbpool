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
    var pageTitle = '2019 Draft';
    // update this section each year

  

    // Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

var dynamicContent = getParameterByName('what');

    $("#main-nav-item2").click(function(){
        // Give the parameter a variable name
        document.location.assign("localhost:5000/?what=2019_Prediction");
    });

    $(document).ready(function() {
        // Check if the URL parameter is apples
        if (dynamicContent == '2019_Prediction') {
            $("#team-selection-box").load("../HTML/blank.html");
            $("#whose-turn").load("../HTML/blank.html");
            $("#draft-results").load("../HTML/blank.html");
            document.getElementById('main-page-title').textContent = "2019 Prediction Pool";
            $("#selection-table").load("../HTML/sortableList.html");
            $("#main-nav-item1").attr("href","2018DraftRoom.html");
            $("#main-nav-item2").attr("href","http:/?what=2019_Draft");
            $("#section-123").load("../HTML/break-hr.html");
            document.getElementById('main-nav-item1').textContent = "2018 Results";
            document.getElementById('main-nav-item2').textContent = "2019 Draft";
        }
        else if (dynamicContent == '2019_Draft') {
            draftOrder = 'draftOrder2019';
            draftSelection = '2019selections';
            pageTitle = '2019 Draft';
            document.getElementById('main-page-title').textContent = pageTitle;
            $("#main-pic").attr("src","../img/basketball.png");
            $("#main-nav-item1").attr("href","http:/?what=2018_Draft");
            $("#main-nav-item2").attr("href","http:/?what=2019_Prediction");
            $("#section-123").load("../HTML/break-hr.html");
            document.getElementById('main-nav-item1').textContent = "2018 Results";
            document.getElementById('main-nav-item2').textContent = "Prediction Pool";
            $("#selection-table").load("../HTML/table1.html");
            $("#team-selection-box").load("../HTML/blank.html");
            $("#whose-turn").load("../HTML/blank.html");
            // $("#team-selection-box").load("../HTML/selectTeam.html");
            getTurnsList(draftOrder,draftSelection);
        }
        else if (dynamicContent == '2018_Draft') {
            draftOrder = "draftOrder2018";
            draftSelection = "2018selections";
            pageTitle = "2018 Draft";
            document.getElementById('main-page-title').textContent = pageTitle;
            $("#main-pic").attr("src","../img/basketball.png");
            $("#main-nav-item1").attr("href","http:/?what=2019_Draft");
            $("#main-nav-item2").attr("href","http:/?what=2019_Prediction");
            $("#section-123").load("../HTML/break-hr.html");
            document.getElementById('main-nav-item1').textContent = "2019 Results";
            document.getElementById('main-nav-item2').textContent = "Prediction Pool";
            $("#selection-table").load("../HTML/table1.html");
            $("#team-selection-box").load("../HTML/blank.html");
            $("#whose-turn").load("../HTML/blank.html");
            getTurnsList(draftOrder,draftSelection);
        }
    });
});