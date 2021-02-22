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
    // var draftOrder = 'draftOrder2019';
    // var draftSelection = '2019selections';
    // var pageTitle = '2019 Draft';
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


    // $("#main-nav-item3").click(function(){
    //     // Give the parameter a variable name
    //     document.location.assign("localhost:5000/?what=2021_Draft");
    // });


    $(document).ready(function() {
        // Check the URL parameter
        if (dynamicContent == '2021_Draft') {
            draftOrder = 'draftOrder2021';
            draftSelection = '2021selections';
            pageTitle = '2021 Draft';
            document.getElementById('main-page-title').textContent = pageTitle;
            $("#main-pic").attr("src","../img/basketball.png");
            // $("#main-nav-item1").attr("href","?what=2018_Draft");
            // $("#main-nav-item2").attr("href","?what=2019_Draft");
            $("#main-nav-item3").attr("href","?what=2021_Prediction");
            $("#section-123").load("../HTML/break-hr.html");
            // document.getElementById('main-nav-item1').textContent = "2018 Draft Results";
            // document.getElementById('main-nav-item2').textContent = "2019 Draft Results";
            document.getElementById('main-nav-item3').textContent = "2021 Prediction Pool";
            $("#selection-table").load("../HTML/table1.html");
            $("#team-selection-box").load("../HTML/blank.html");
            $("#whose-turn").load("../HTML/blank.html");
            // this gets commented out after draft
            // $("#team-selection-box").load("../HTML/selectTeam.html");
            // getTurnsList(draftOrder,draftSelection);
            //End of this gets commented out after draft
            listPlayers(draftOrder);
            listTeams(draftSelection);}
        else if (dynamicContent == '2021_Prediction') {
            $("#team-selection-box").load("../HTML/blank.html");
            $("#whose-turn").load("../HTML/blank.html");
            $("#draft-results").load("../HTML/blank.html");
            // $("#main-nav-item1").attr("href","?what=2018_Draft");
            // $("#main-nav-item2").attr("href","?what=2019_Draft");
            // $("#main-nav-item3").attr("href","?what=2020_Draft");
            $("#main-nav-item3").attr("href","?what=2021_Draft");
            $("#section-123").load("../HTML/break-hr.html");
            // document.getElementById('main-nav-item1').textContent = "2018 Draft Results";
            // document.getElementById('main-nav-item2').textContent = "2019 Draft Results";
            // document.getElementById('main-nav-item3').textContent = "2020 Draft Results";
            document.getElementById('main-nav-item3').textContent = "2021 Draft";
            document.getElementById('main-page-title').textContent = "2021 Prediction Pool";
            $("#selection-table").load("../HTML/sortableList.html");
        }
        // else if (dynamicContent == '2019_Draft') {
        //     draftOrder = 'draftOrder2019';
        //     draftSelection = '2019selections';
        //     pageTitle = '2019 Draft';
        //     document.getElementById('main-page-title').textContent = pageTitle;
        //     $("#main-pic").attr("src","../img/basketball.png");
        //     // $("#main-nav-item1").attr("href","?what=2018_Draft");
        //     $("#main-nav-item1").attr("href","?what=2021_Prediction");
        //     $("#main-nav-item3").attr("href","?what=2020_Draft");
        //     $("#main-nav-item4").attr("href","?what=2021_Draft");
        //     $("#section-123").load("../HTML/break-hr.html");
        //     document.getElementById('main-nav-item1').textContent = "2018 Draft Results";
        //     document.getElementById('main-nav-item2').textContent = "2019 Prediction Pool";
        //     document.getElementById('main-nav-item3').textContent = "2020 Draft";
        //     document.getElementById('main-nav-item4').textContent = "2021 Draft";
        //     $("#selection-table").load("../HTML/table1.html");
        //     $("#team-selection-box").load("../HTML/blank.html");
        //     $("#whose-turn").load("../HTML/blank.html");
        //     // this gets commented out after draft
        //     $("#team-selection-box").load("../HTML/selectTeam.html");
        //     getTurnsList(draftOrder,draftSelection);
        //     //End of this gets commented out after draft
        //     listPlayers(draftOrder);
        //     listTeams(draftSelection);
        // }
        // else if (dynamicContent == '2018_Draft') {
        //     draftOrder = "draftOrder2018";
        //     draftSelection = "2018selections";
        //     pageTitle = "2018 Draft";
        //     document.getElementById('main-page-title').textContent = pageTitle;
        //     $("#main-pic").attr("src","../img/basketball.png");
        //     // $("#main-nav-item1").attr("href","?what=2019_Draft");
        //     $("#main-nav-item1").attr("href","?what=2021_Prediction");
        //     $("#main-nav-item3").attr("href","?what=2020_Draft");
        //     $("#main-nav-item4").attr("href","?what=2021_Draft");
        //     $("#section-123").load("../HTML/break-hr.html");
        //     document.getElementById('main-nav-item1').textContent = "2019 Draft Results";
        //     document.getElementById('main-nav-item2').textContent = "2019 Prediction Pool";
        //     document.getElementById('main-nav-item3').textContent = "2020 Draft";
        //     document.getElementById('main-nav-item4').textContent = "2021 Draft";
        //     $("#selection-table").load("../HTML/table1.html");
        //     $("#team-selection-box").load("../HTML/blank.html");
        //     $("#whose-turn").load("../HTML/blank.html");
        //     //End of this gets commented out after draft
        //     // getTurnsList(draftOrder,draftSelection);
        //     //End of this gets commented out after draft
        //     listPlayers(draftOrder);
        //     listTeams(draftSelection);
        // }
        else{
            pageTitle = "Welcome to 2021 bbpool.com";
            document.getElementById('main-page-title').textContent = pageTitle;
            $("#main-pic").attr("src","../img/basketball.png");
            $("#section-123").load("../HTML/main-page-lead.html");
            // $("#main-nav-item1").attr("href","?what=2021_Draft");
            // $("#main-nav-item2").attr("href","?what=2019_Draft");
            $("#main-nav-item3").attr("href","?what=2021_Prediction");
            // document.getElementById('main-nav-item1').textContent = "CLICK TO ENTER DRAFT ROOM";
            // document.getElementById('main-nav-item2').textContent = "2019 Draft Results";
            document.getElementById('main-nav-item3').textContent = "2021 Prediction Pool";
        }
    });
});