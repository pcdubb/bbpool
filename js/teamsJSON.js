




// Below is a JSON list of all NCAA Schools
// ++++++++++++++++++++++++++++++ this is made to run once to populate NCAA Teams-should only need to run once ever +++++++++++++++++++++++++++


function populateNCAAteams() {
    console.log("made it to the populate function");

var teams = [
    {
      "School": "Abilene Christian Wildcats",
      "City State": "Abilene Texas"
    },
    {
      "School": "Air Force Falcons",
      "City State": "USAF Academy Colorado"
    },
    {
      "School": "Akron Zips",
      "City State": "Akron Ohio"
    },
    {
      "School": "Alabama A&M Bulldogs",
      "City State": "Normal Alabama"
    },
    {
      "School": "Alabama Crimson Tide",
      "City State": "Tuscaloosa Alabama"
    },
    {
      "School": "Alabama State Hornets",
      "City State": "Montgomery Alabama"
    },
    {
      "School": "Alabama-Birmingham Blazers",
      "City State": "Birmingham Alabama"
    },
    {
      "School": "Albany (NY) Great Danes",
      "City State": "Albany New York"
    },
    {
      "School": "Alcorn State Braves",
      "City State": "Alcorn State Mississippi"
    },
    {
      "School": "Allegheny Gators",
      "City State": "Meadville Pennsylvania"
    },
    {
      "School": "American Eagles",
      "City State": "Washington D.C."
    },
    {
      "School": "Amherst Lord Jeffs",
      "City State": "Amherst Massachusetts"
    },
    {
      "School": "Appalachian State Mountaineers",
      "City State": "Boone North Carolina"
    },
    {
      "School": "Arizona State Sun Devils",
      "City State": "Tempe Arizona"
    },
    {
      "School": "Arizona Wildcats",
      "City State": "Tucson Arizona"
    },
    {
      "School": "Arkansas Razorbacks",
      "City State": "Fayetteville Arkansas"
    },
    {
      "School": "Arkansas State Red Wolves",
      "City State": "State University Arkansas"
    },
    {
      "School": "Arkansas-Little Rock Trojans",
      "City State": "Little Rock Arkansas"
    },
    {
      "School": "Arkansas-Pine Bluff Golden Lions",
      "City State": "Pine Bluff Arkansas"
    },
    {
      "School": "Armstrong Pirates",
      "City State": "Savannah Georgia"
    },
    {
      "School": "Army Black Knights",
      "City State": "West Point New York"
    },
    {
      "School": "Auburn Tigers",
      "City State": "Auburn Alabama"
    },
    {
      "School": "Augusta State Jaguars",
      "City State": "Augusta Georgia"
    },
    {
      "School": "Augustana (IL) Vikings",
      "City State": "Rock Island Illinois"
    },
    {
      "School": "Austin Peay Governors",
      "City State": "Clarksville Tennessee"
    },
    {
      "School": "Baker University Wildcats",
      "City State": "Baldwin City Kansas"
    },
    {
      "School": "Baldwin-Wallace Yellow Jackets",
      "City State": "Berea Ohio"
    },
    {
      "School": "Ball State Cardinals",
      "City State": "Muncie Indiana"
    },
    {
      "School": "Baltimore Super Bees",
      "City State": "Baltimore Maryland"
    },
    {
      "School": "Baylor Bears",
      "City State": "Waco Texas"
    },
    {
      "School": "Belmont Bruins",
      "City State": "Nashville Tennessee"
    },
    {
      "School": "Beloit Buccaneers",
      "City State": "Beloit Wisconsin"
    },
    {
      "School": "Bethune-Cookman Wildcats",
      "City State": "Daytona Beach Florida"
    },
    {
      "School": "Binghamton Bearcats",
      "City State": "Binghamton New York"
    },
    {
      "School": "Birmingham-Southern Panthers",
      "City State": "Birmingham Alabama"
    },
    {
      "School": "Bloomsburg Huskies",
      "City State": "Bloomsburg Pennsylvania"
    },
    {
      "School": "Boise State Broncos",
      "City State": "Boise Idaho"
    },
    {
      "School": "Boston College Eagles",
      "City State": "Chestnut Hill Massachusetts"
    },
    {
      "School": "Boston University Terriers",
      "City State": "Boston Massachusetts"
    },
    {
      "School": "Bowling Green State Falcons",
      "City State": "Bowling Green Ohio"
    },
    {
      "School": "Bradley Braves",
      "City State": "Peoria Illinois"
    },
    {
      "School": "Brigham Young College",
      "City State": "Logan Utah"
    },
    {
      "School": "Brigham Young Cougars",
      "City State": "Provo Utah"
    },
    {
      "School": "Brooklyn Bulldogs",
      "City State": "Brooklyn New York"
    },
    {
      "School": "Brown Bears",
      "City State": "Providence Rhode Island"
    },
    {
      "School": "Bryant Bulldogs",
      "City State": "Smithfield Rhode Island"
    },
    {
      "School": "Bucknell Bison",
      "City State": "Lewisburg Pennsylvania"
    },
    {
      "School": "Buffalo Bulls",
      "City State": "Buffalo New York"
    },
    {
      "School": "Butler Bulldogs",
      "City State": "Indianapolis Indiana"
    },
    {
      "School": "Cal Poly Mustangs",
      "City State": "San Luis Obispo California"
    },
    {
      "School": "Cal State Bakersfield Roadrunners",
      "City State": "Bakersfield California"
    },
    {
      "School": "Cal State Fullerton Titans",
      "City State": "Fullerton California"
    },
    {
      "School": "Cal State Los Angeles Golden Eagles",
      "City State": "Los Angeles California"
    },
    {
      "School": "Cal State Northridge Matadors",
      "City State": "Northridge California"
    },
    {
      "School": "Campbell Fighting Camels",
      "City State": "Buies Creek North Carolina"
    },
    {
      "School": "Canisius Golden Griffins",
      "City State": "Buffalo New York"
    },
    {
      "School": "Carleton College Knights",
      "City State": "Northfield Minnesota"
    },
    {
      "School": "Carnegie Mellon Tartans",
      "City State": "Pittsburgh Pennsylvania"
    },
    {
      "School": "Case Western Reserve Spartans",
      "City State": "Cleveland Ohio"
    },
    {
      "School": "Catholic Cardinals",
      "City State": "Washington D.C."
    },
    {
      "School": "Centenary (LA) Gents",
      "City State": "Shreveport Louisiana"
    },
    {
      "School": "Central Arkansas Bears",
      "City State": "Conway Arkansas"
    },
    {
      "School": "Central Connecticut State Blue Devils",
      "City State": "New Britain Connecticut"
    },
    {
      "School": "Central Florida Knights",
      "City State": "Orlando Florida"
    },
    {
      "School": "Central Michigan Chippewas",
      "City State": "Mount Pleasant Michigan"
    },
    {
      "School": "Central Missouri Mules",
      "City State": "Warrensburg Missouri"
    },
    {
      "School": "Central Normal College",
      "City State": "Danville Indiana"
    },
    {
      "School": "Central Pennsylvania College Knights",
      "City State": "Summerdale Pennsylvania"
    },
    {
      "School": "Centre (KY) Colonels",
      "City State": "Danville Kentucky"
    },
    {
      "School": "Charleston Southern Buccaneers",
      "City State": "Charleston South Carolina"
    },
    {
      "School": "Charlotte 49ers",
      "City State": "Charlotte North Carolina"
    },
    {
      "School": "Chattanooga Mocs",
      "City State": "Chattanooga Tennessee"
    },
    {
      "School": "Cheyenne Business College",
      "City State": "Cheyenne Wyoming"
    },
    {
      "School": "Chicago Maroons",
      "City State": "Chicago Illinois"
    },
    {
      "School": "Chicago State Cougars",
      "City State": "Chicago Illinois"
    },
    {
      "School": "Cincinnati Bearcats",
      "City State": "Cincinnati Ohio"
    },
    {
      "School": "Citadel Bulldogs",
      "City State": "Charleston South Carolina"
    },
    {
      "School": "City College of New York Beavers",
      "City State": "New York New York"
    },
    {
      "School": "Clemson Tigers",
      "City State": "Clemson South Carolina"
    },
    {
      "School": "Cleveland State Vikings",
      "City State": "Cleveland Ohio"
    },
    {
      "School": "Coastal Carolina Chanticleers",
      "City State": "Conway South Carolina"
    },
    {
      "School": "Colgate Raiders",
      "City State": "Hamilton New York"
    },
    {
      "School": "College of Charleston Cougars",
      "City State": "Charleston South Carolina"
    },
    {
      "School": "College of New Jersey Lions",
      "City State": "Ewing New Jersey"
    },
    {
      "School": "Colorado Buffaloes",
      "City State": "Boulder Colorado"
    },
    {
      "School": "Colorado College Tigers",
      "City State": "Colorado Springs Colorado"
    },
    {
      "School": "Colorado School of Mines Orediggers",
      "City State": "Golden Colorado"
    },
    {
      "School": "Colorado State Rams",
      "City State": "Fort Collins Colorado"
    },
    {
      "School": "Columbia Lions",
      "City State": "New York New York"
    },
    {
      "School": "Concordia Seminary Preachers",
      "City State": "St. Louis Missouri"
    },
    {
      "School": "Connecticut Huskies",
      "City State": "Storrs Connecticut"
    },
    {
      "School": "Coppin State Eagles",
      "City State": "Baltimore Maryland"
    },
    {
      "School": "Cornell Big Red",
      "City State": "Ithaca New York"
    },
    {
      "School": "Cotner University",
      "City State": "Lincoln Nebraska"
    },
    {
      "School": "Creighton Bluejays",
      "City State": "Omaha Nebraska"
    },
    {
      "School": "Cumberland University Bulldogs",
      "City State": "Lebanon Tennessee"
    },
    {
      "School": "Dakota Wesleyan Tigers",
      "City State": "Mitchell South Dakota"
    },
    {
      "School": "Dartmouth Big Green",
      "City State": "Hanover New Hampshire"
    },
    {
      "School": "Davidson Wildcats",
      "City State": "Davidson North Carolina"
    },
    {
      "School": "Dayton Flyers",
      "City State": "Dayton Ohio"
    },
    {
      "School": "Delaware Fightin' Blue Hens",
      "City State": "Newark Delaware"
    },
    {
      "School": "Delaware State Hornets",
      "City State": "Dover Delaware"
    },
    {
      "School": "Denison Big Red",
      "City State": "Granville Ohio"
    },
    {
      "School": "Denver Pioneers",
      "City State": "Denver Colorado"
    },
    {
      "School": "DePaul Blue Demons",
      "City State": "Chicago Illinois"
    },
    {
      "School": "DePauw Tigers",
      "City State": "Greencastle Indiana"
    },
    {
      "School": "Detroit Mercy Titans",
      "City State": "Detroit Michigan"
    },
    {
      "School": "Dickinson College Red Devils",
      "City State": "Carlisle Pennsylvania"
    },
    {
      "School": "Drake Bulldogs",
      "City State": "Des Moines Iowa"
    },
    {
      "School": "Drexel Dragons",
      "City State": "Philadelphia Pennsylvania"
    },
    {
      "School": "Duke Blue Devils",
      "City State": "Durham North Carolina"
    },
    {
      "School": "Duquesne Dukes",
      "City State": "Pittsburgh Pennsylvania"
    },
    {
      "School": "East Carolina Pirates",
      "City State": "Greenville North Carolina"
    },
    {
      "School": "East Central Tigers",
      "City State": "Ada Oklahoma"
    },
    {
      "School": "East Tennessee State Buccaneers",
      "City State": "Johnson City Tennessee"
    },
    {
      "School": "Eastern Illinois Panthers",
      "City State": "Charleston Illinois"
    },
    {
      "School": "Eastern Kentucky Colonels",
      "City State": "Richmond Kentucky"
    },
    {
      "School": "Eastern Michigan Eagles",
      "City State": "Ypsilanti Michigan"
    },
    {
      "School": "Eastern Washington Eagles",
      "City State": "Cheney Washington"
    },
    {
      "School": "Elon Phoenix",
      "City State": "Elon North Carolina"
    },
    {
      "School": "Emporia State Hornets",
      "City State": "Emporia Kansas"
    },
    {
      "School": "Evansville Purple Aces",
      "City State": "Evansville Indiana"
    },
    {
      "School": "Fairfield Stags",
      "City State": "Fairfield Connecticut"
    },
    {
      "School": "Fairleigh Dickinson Knights",
      "City State": "Teaneck New Jersey"
    },
    {
      "School": "Florida A&M Rattlers",
      "City State": "Tallahassee Florida"
    },
    {
      "School": "Florida Atlantic Owls",
      "City State": "Boca Raton Florida"
    },
    {
      "School": "Florida Gators",
      "City State": "Gainesville Florida"
    },
    {
      "School": "Florida Gulf Coast Eagles",
      "City State": "Fort Myers Florida"
    },
    {
      "School": "Florida International Panthers",
      "City State": "Miami Florida"
    },
    {
      "School": "Florida State Seminoles",
      "City State": "Tallahassee Florida"
    },
    {
      "School": "Fordham Rams",
      "City State": "Bronx New York"
    },
    {
      "School": "Franklin Grizzlies",
      "City State": "Franklin Indiana"
    },
    {
      "School": "Fresno State Bulldogs",
      "City State": "Fresno California"
    },
    {
      "School": "Furman Paladins",
      "City State": "Greenville South Carolina"
    },
    {
      "School": "Gardner-Webb Runnin' Bulldogs",
      "City State": "Boiling Springs North Carolina"
    },
    {
      "School": "Geneva Golden Tornadoes",
      "City State": "Beaver Falls Pennsylvania"
    },
    {
      "School": "George Mason Patriots",
      "City State": "Fairfax Virginia"
    },
    {
      "School": "George Washington Colonials",
      "City State": "Washington D.C."
    },
    {
      "School": "Georgetown Hoyas",
      "City State": "Washington D.C."
    },
    {
      "School": "Georgia Bulldogs",
      "City State": "Athens Georgia"
    },
    {
      "School": "Georgia Southern Eagles",
      "City State": "Statesboro Georgia"
    },
    {
      "School": "Georgia State Panthers",
      "City State": "Atlanta Georgia"
    },
    {
      "School": "Georgia Tech Yellow Jackets",
      "City State": "Atlanta Georgia"
    },
    {
      "School": "Gettysburg Bullets",
      "City State": "Gettysburg Pennsylvania"
    },
    {
      "School": "Gonzaga Bulldogs",
      "City State": "Spokane Washington"
    },
    {
      "School": "Grambling Tigers",
      "City State": "Grambling Louisiana"
    },
    {
      "School": "Grand Canyon Antelopes",
      "City State": "Phoenix Arizona"
    },
    {
      "School": "Green Bay Phoenix",
      "City State": "Green Bay Wisconsin"
    },
    {
      "School": "Grinnell Pioneers",
      "City State": "Grinnell Iowa"
    },
    {
      "School": "Grove City Wolverines",
      "City State": "Grove City Pennsylvania"
    },
    {
      "School": "Hamline Pipers",
      "City State": "St. Paul Minnesota"
    },
    {
      "School": "Hampton Pirates",
      "City State": "Hampton Virginia"
    },
    {
      "School": "Hardin-Simmons Cowboys",
      "City State": "Abilene Texas"
    },
    {
      "School": "Hartford Hawks",
      "City State": "West Hartford Connecticut"
    },
    {
      "School": "Harvard Crimson",
      "City State": "Boston Massachusetts"
    },
    {
      "School": "Haskell Indian Nations Institute Fighting Indians",
      "City State": "Lawrence Kansas"
    },
    {
      "School": "Hawaii Warriors",
      "City State": "Honolulu Hawaii"
    },
    {
      "School": "High Point Panthers",
      "City State": "High Point North Carolina"
    },
    {
      "School": "Hiram Terriers",
      "City State": "Hiram Ohio"
    },
    {
      "School": "Hofstra Pride",
      "City State": "Hempstead New York"
    },
    {
      "School": "Holy Cross Crusaders",
      "City State": "Worcester Massachusetts"
    },
    {
      "School": "Hope Flying Dutchmen",
      "City State": "Holland Michigan"
    },
    {
      "School": "Houston Baptist Huskies",
      "City State": "Houston Texas"
    },
    {
      "School": "Houston Cougars",
      "City State": "Houston Texas"
    },
    {
      "School": "Howard Bison",
      "City State": "Washington D.C."
    },
    {
      "School": "Idaho State Bengals",
      "City State": "Pocatello Idaho"
    },
    {
      "School": "Idaho Vandals",
      "City State": "Moscow Idaho"
    },
    {
      "School": "Illinois Fighting Illini",
      "City State": "Champaign Illinois"
    },
    {
      "School": "Illinois State Redbirds",
      "City State": "Normal Illinois"
    },
    {
      "School": "Illinois Wesleyan Titans",
      "City State": "Bloomington Illinois"
    },
    {
      "School": "Illinois-Chicago Flames",
      "City State": "Chicago Illinois"
    },
    {
      "School": "Incarnate Word Cardinals",
      "City State": "San Antonio Texas"
    },
    {
      "School": "Indiana Hoosiers",
      "City State": "Bloomington Indiana"
    },
    {
      "School": "Indiana State Sycamores",
      "City State": "Terre Haute Indiana"
    },
    {
      "School": "Iona Gaels",
      "City State": "New Rochelle New York"
    },
    {
      "School": "Iowa Hawkeyes",
      "City State": "Iowa City Iowa"
    },
    {
      "School": "Iowa State Cyclones",
      "City State": "Ames Iowa"
    },
    {
      "School": "IPFW Mastodons",
      "City State": "Fort Wayne Indiana"
    },
    {
      "School": "IUPUI Jaguars",
      "City State": "Indianapolis Indiana"
    },
    {
      "School": "Jackson State Tigers",
      "City State": "Jackson Mississippi"
    },
    {
      "School": "Jacksonville Dolphins",
      "City State": "Jacksonville Florida"
    },
    {
      "School": "Jacksonville State Gamecocks",
      "City State": "Jacksonville Alabama"
    },
    {
      "School": "James Madison Dukes",
      "City State": "Harrisonburg Virginia"
    },
    {
      "School": "John Carroll Blue Streaks",
      "City State": "University Heights Ohio"
    },
    {
      "School": "Kalamazoo Hornets",
      "City State": "Kalamazoo Michigan"
    },
    {
      "School": "Kansas Jayhawks",
      "City State": "Lawrence Kansas"
    },
    {
      "School": "Kansas State Wildcats",
      "City State": "Manhattan Kansas"
    },
    {
      "School": "Kennesaw State Owls",
      "City State": "Kennesaw Georgia"
    },
    {
      "School": "Kent State Golden Flashes",
      "City State": "Kent Ohio"
    },
    {
      "School": "Kentucky Wesleyan Panthers",
      "City State": "Owensboro Kentucky"
    },
    {
      "School": "Kentucky Wildcats",
      "City State": "Lexington Kentucky"
    },
    {
      "School": "La Salle Explorers",
      "City State": "Philadelphia Pennsylvania"
    },
    {
      "School": "Lafayette Leopards",
      "City State": "Easton Pennsylvania"
    },
    {
      "School": "Lake Forest Foresters",
      "City State": "Lake Forest Illinois"
    },
    {
      "School": "Lamar Cardinals",
      "City State": "Beaumont Texas"
    },
    {
      "School": "Latter Day Saints University",
      "City State": "Salt Lake City Utah"
    },
    {
      "School": "Lawrence Vikings",
      "City State": "Appleton Wisconsin"
    },
    {
      "School": "Lehigh Mountain Hawks",
      "City State": "Bethlehem Pennsylvania"
    },
    {
      "School": "Lewis University Flyers",
      "City State": "Romeoville Illinois"
    },
    {
      "School": "Liberty Flames",
      "City State": "Lynchburg Virginia"
    },
    {
      "School": "Lipscomb Bisons",
      "City State": "Nashville Tennessee"
    },
    {
      "School": "Long Beach State 49ers",
      "City State": "Long Beach California"
    },
    {
      "School": "Long Island University Blackbirds",
      "City State": "Brooklyn New York"
    },
    {
      "School": "Longwood Lancers",
      "City State": "Farmville Virginia"
    },
    {
      "School": "Louisiana State Fighting Tigers",
      "City State": "Baton Rouge Louisiana"
    },
    {
      "School": "Louisiana Tech Bulldogs",
      "City State": "Ruston Louisiana"
    },
    {
      "School": "Louisiana-Lafayette Ragin' Cajuns",
      "City State": "Lafayette Louisiana"
    },
    {
      "School": "Louisiana-Monroe Warhawks",
      "City State": "Monroe Louisiana"
    },
    {
      "School": "Louisville Cardinals",
      "City State": "Louisville Kentucky"
    },
    {
      "School": "Loyola (IL) Ramblers",
      "City State": "Chicago Illinois"
    },
    {
      "School": "Loyola (LA) Wolfpack",
      "City State": "New Orleans Louisiana"
    },
    {
      "School": "Loyola (MD) Greyhounds",
      "City State": "Baltimore Maryland"
    },
    {
      "School": "Loyola Marymount Lions",
      "City State": "Los Angeles California"
    },
    {
      "School": "Macalester Scots",
      "City State": "St. Paul Minnesota"
    },
    {
      "School": "Maine Black Bears",
      "City State": "Orono Maine"
    },
    {
      "School": "Manchester Spartans",
      "City State": "North Manchester Indiana"
    },
    {
      "School": "Manhattan Jaspers",
      "City State": "Riverdale New York"
    },
    {
      "School": "Marietta Pioneers",
      "City State": "Marietta Ohio"
    },
    {
      "School": "Marist Red Foxes",
      "City State": "Poughkeepsie New York"
    },
    {
      "School": "Marquette Golden Eagles",
      "City State": "Milwaukee Wisconsin"
    },
    {
      "School": "Marshall Thundering Herd",
      "City State": "Huntington West Virginia"
    },
    {
      "School": "Maryland Terrapins",
      "City State": "College Park Maryland"
    },
    {
      "School": "Maryland-Baltimore County Retrievers",
      "City State": "Baltimore Maryland"
    },
    {
      "School": "Maryland-Eastern Shore Hawks",
      "City State": "Princess Anne Maryland"
    },
    {
      "School": "Massachusetts Institute of Technology Engineers",
      "City State": "Cambridge Massachusetts"
    },
    {
      "School": "Massachusetts Minutemen",
      "City State": "Amherst Massachusetts"
    },
    {
      "School": "Massachusetts-Lowell River Hawks",
      "City State": "Lowell Massachusetts"
    },
    {
      "School": "McNeese State Cowboys",
      "City State": "Lake Charles Louisiana"
    },
    {
      "School": "Memphis Tigers",
      "City State": "Memphis Tennessee"
    },
    {
      "School": "Mercer Bears",
      "City State": "Macon Georgia"
    },
    {
      "School": "Merchant Marine Academy Mariners",
      "City State": "King's Point New York"
    },
    {
      "School": "Miami (FL) Hurricanes",
      "City State": "Coral Gables Florida"
    },
    {
      "School": "Miami (OH) RedHawks",
      "City State": "Oxford Ohio"
    },
    {
      "School": "Michigan State Spartans",
      "City State": "East Lansing Michigan"
    },
    {
      "School": "Michigan Wolverines",
      "City State": "Ann Arbor Michigan"
    },
    {
      "School": "Middle Tennessee Blue Raiders",
      "City State": "Murfreesboro Tennessee"
    },
    {
      "School": "Millikin Big Blue",
      "City State": "Decatur Illinois"
    },
    {
      "School": "Millsaps Majors",
      "City State": "Jackson Mississippi"
    },
    {
      "School": "Milwaukee Panthers",
      "City State": "Milwaukee Wisconsin"
    },
    {
      "School": "Minnesota A&M Aggies",
      "City State": "St. Paul Minnesota"
    },
    {
      "School": "Minnesota Golden Gophers",
      "City State": "Minneapolis Minnesota"
    },
    {
      "School": "Mississippi Rebels",
      "City State": "University Mississippi"
    },
    {
      "School": "Mississippi State Bulldogs",
      "City State": "Mississippi State Mississippi"
    },
    {
      "School": "Mississippi Valley State Delta Devils",
      "City State": "Itta Bena Mississippi"
    },
    {
      "School": "Missouri State Bears",
      "City State": "Springfield Missouri"
    },
    {
      "School": "Missouri Tigers",
      "City State": "Columbia Missouri"
    },
    {
      "School": "Missouri-Kansas City Kangaroos",
      "City State": "Kansas City Missouri"
    },
    {
      "School": "Monmouth Hawks",
      "City State": "West Long Branch New Jersey"
    },
    {
      "School": "Montana Grizzlies",
      "City State": "Missoula Montana"
    },
    {
      "School": "Montana State Bobcats",
      "City State": "Bozeman Montana"
    },
    {
      "School": "Morehead State Eagles",
      "City State": "Morehead Kentucky"
    },
    {
      "School": "Morgan State Bears",
      "City State": "Baltimore Maryland"
    },
    {
      "School": "Morris Brown Wolverines",
      "City State": "Atlanta Georgia"
    },
    {
      "School": "Mount St. Mary's Mountaineers",
      "City State": "Emmitsburg Maryland"
    },
    {
      "School": "Mount Union Purple Raiders",
      "City State": "Alliance Ohio"
    },
    {
      "School": "Muhlenburg Mules",
      "City State": "Allentown Pennsylvania"
    },
    {
      "School": "Murray State Racers",
      "City State": "Murray Kentucky"
    },
    {
      "School": "Muskingum Fighting Muskies",
      "City State": "New Concord Ohio"
    },
    {
      "School": "Navy Midshipmen",
      "City State": "Annapolis Maryland"
    },
    {
      "School": "Nebraska Cornhuskers",
      "City State": "Lincoln Nebraska"
    },
    {
      "School": "Nebraska Wesleyan Prairie Wolves",
      "City State": "Lincoln Nebraska"
    },
    {
      "School": "Nebraska-Omaha Mavericks",
      "City State": "Omaha Nebraska"
    },
    {
      "School": "Nevada Wolf Pack",
      "City State": "Reno Nevada"
    },
    {
      "School": "Nevada-Las Vegas Rebels",
      "City State": "Las Vegas Nevada"
    },
    {
      "School": "New Hampshire Wildcats",
      "City State": "Durham New Hampshire"
    },
    {
      "School": "New Mexico Lobos",
      "City State": "Albuquerque New Mexico"
    },
    {
      "School": "New Mexico State Aggies",
      "City State": "Las Cruces New Mexico"
    },
    {
      "School": "New Orleans Privateers",
      "City State": "New Orleans Louisiana"
    },
    {
      "School": "New York University Violets",
      "City State": "New York New York"
    },
    {
      "School": "Newberry Wolves",
      "City State": "Newberry South Carolina"
    },
    {
      "School": "Niagara Purple Eagles",
      "City State": "Niagara University New York"
    },
    {
      "School": "Nicholls State Colonels",
      "City State": "Thibodaux Louisiana"
    },
    {
      "School": "NJIT Highlanders",
      "City State": "Newark New Jersey"
    },
    {
      "School": "Norfolk State Spartans",
      "City State": "Norfolk Virginia"
    },
    {
      "School": "North Carolina A&T Aggies",
      "City State": "Greensboro North Carolina"
    },
    {
      "School": "North Carolina Central Eagles",
      "City State": "Durham North Carolina"
    },
    {
      "School": "North Carolina State Wolfpack",
      "City State": "Raleigh North Carolina"
    },
    {
      "School": "North Carolina Tar Heels",
      "City State": "Chapel Hill North Carolina"
    },
    {
      "School": "North Carolina-Asheville Bulldogs",
      "City State": "Asheville North Carolina"
    },
    {
      "School": "North Carolina-Greensboro Spartans",
      "City State": "Greensboro North Carolina"
    },
    {
      "School": "North Carolina-Wilmington Seahawks",
      "City State": "Wilmington North Carolina"
    },
    {
      "School": "North Central Cardinals",
      "City State": "Naperville Illinois"
    },
    {
      "School": "North Dakota State Bison",
      "City State": "Fargo North Dakota"
    },
    {
      "School": "North Dakota UND",
      "City State": "Grand Forks North Dakota"
    },
    {
      "School": "North Florida Ospreys",
      "City State": "Jacksonville Florida"
    },
    {
      "School": "North Texas Mean Green",
      "City State": "Denton Texas"
    },
    {
      "School": "Northeastern Huskies",
      "City State": "Boston Massachusetts"
    },
    {
      "School": "Northeastern Illinois Golden Eagles",
      "City State": "Chicago Illinois"
    },
    {
      "School": "Northern Arizona Lumberjacks",
      "City State": "Flagstaff Arizona"
    },
    {
      "School": "Northern Colorado Bears",
      "City State": "Greeley Colorado"
    },
    {
      "School": "Northern Illinois Huskies",
      "City State": "De Kalb Illinois"
    },
    {
      "School": "Northern Iowa Panthers",
      "City State": "Cedar Falls Iowa"
    },
    {
      "School": "Northern Kentucky Norse",
      "City State": "Highland Heights Kentucky"
    },
    {
      "School": "Northwest Missouri State Bearcats",
      "City State": "Maryville Missouri"
    },
    {
      "School": "Northwestern State Demons",
      "City State": "Natchitoches Louisiana"
    },
    {
      "School": "Northwestern Wildcats",
      "City State": "Evanston Illinois"
    },
    {
      "School": "Notre Dame Fighting Irish",
      "City State": "Notre Dame Indiana"
    },
    {
      "School": "Oakland Golden Grizzlies",
      "City State": "Rochester Michigan"
    },
    {
      "School": "Oberlin Yeomen",
      "City State": "Oberlin Ohio"
    },
    {
      "School": "Ohio Bobcats",
      "City State": "Athens Ohio"
    },
    {
      "School": "Ohio State Buckeyes",
      "City State": "Columbus Ohio"
    },
    {
      "School": "Ohio Wesleyan Battling Bishops",
      "City State": "Delaware Ohio"
    },
    {
      "School": "Oklahoma City Chiefs",
      "City State": "Oklahoma City Oklahoma"
    },
    {
      "School": "Oklahoma Sooners",
      "City State": "Norman Oklahoma"
    },
    {
      "School": "Oklahoma State Cowboys",
      "City State": "Stillwater Oklahoma"
    },
    {
      "School": "Old Dominion Monarchs",
      "City State": "Norfolk Virginia"
    },
    {
      "School": "Oral Roberts Golden Eagles",
      "City State": "Tulsa Oklahoma"
    },
    {
      "School": "Oregon Ducks",
      "City State": "Eugene Oregon"
    },
    {
      "School": "Oregon State Beavers",
      "City State": "Corvallis Oregon"
    },
    {
      "School": "Pacific Tigers",
      "City State": "Stockton California"
    },
    {
      "School": "Penn State Nittany Lions",
      "City State": "University Park Pennsylvania"
    },
    {
      "School": "Pennsylvania Quakers",
      "City State": "Philadelphia Pennsylvania"
    },
    {
      "School": "Pepperdine Waves",
      "City State": "Malibu California"
    },
    {
      "School": "Phillips Haymakers",
      "City State": "Enid Oklahoma"
    },
    {
      "School": "Pittsburg State Gorillas",
      "City State": "Pittsburg Kansas"
    },
    {
      "School": "Pittsburgh Panthers",
      "City State": "Pittsburgh Pennsylvania"
    },
    {
      "School": "Portland Pilots",
      "City State": "Portland Oregon"
    },
    {
      "School": "Portland State Vikings",
      "City State": "Portland Oregon"
    },
    {
      "School": "Prairie View Panthers",
      "City State": "Prairie View Texas"
    },
    {
      "School": "Pratt Institute Cannoneers",
      "City State": "Brooklyn New York"
    },
    {
      "School": "Presbyterian Blue Hose",
      "City State": "Clinton South Carolina"
    },
    {
      "School": "Princeton Tigers",
      "City State": "Princeton New Jersey"
    },
    {
      "School": "Providence Friars",
      "City State": "Providence Rhode Island"
    },
    {
      "School": "Purdue Boilermakers",
      "City State": "West Lafayette Indiana"
    },
    {
      "School": "Quinnipiac Bobcats",
      "City State": "Hamden Connecticut"
    },
    {
      "School": "Radford Highlanders",
      "City State": "Radford Virginia"
    },
    {
      "School": "Regis (CO) Rangers",
      "City State": "Denver Colorado"
    },
    {
      "School": "Rensselaer Engineers",
      "City State": "Troy New York"
    },
    {
      "School": "Rhode Island Rams",
      "City State": "Kingston Rhode Island"
    },
    {
      "School": "Rice Owls",
      "City State": "Houston Texas"
    },
    {
      "School": "Richmond Spiders",
      "City State": "Richmond Virginia"
    },
    {
      "School": "Rider Broncs",
      "City State": "Lawrenceville New Jersey"
    },
    {
      "School": "Ripon Red Hawks",
      "City State": "Ripon Wisconsin"
    },
    {
      "School": "Roanoke Maroons",
      "City State": "Salem Virginia"
    },
    {
      "School": "Robert Morris Colonials",
      "City State": "Moon Township Pennsylvania"
    },
    {
      "School": "Rochester (NY) Yellowjackets",
      "City State": "Rochester New York"
    },
    {
      "School": "Rose-Hulman Fightin' Engineers",
      "City State": "Terre Haute Indiana"
    },
    {
      "School": "Rutgers Scarlet Knights",
      "City State": "New Brunswick New Jersey"
    },
    {
      "School": "Sacramento State Hornets",
      "City State": "Sacramento California"
    },
    {
      "School": "Sacred Heart Pioneers",
      "City State": "Fairfield Connecticut"
    },
    {
      "School": "Saint Francis (PA) Red Flash",
      "City State": "Loretto Pennsylvania"
    },
    {
      "School": "Saint Joseph's Hawks",
      "City State": "Philadelphia Pennsylvania"
    },
    {
      "School": "Saint Louis Billikens",
      "City State": "St. Louis Missouri"
    },
    {
      "School": "Saint Mary's (CA) Gaels",
      "City State": "Moraga California"
    },
    {
      "School": "Saint Peter's Peacocks",
      "City State": "Jersey City New Jersey"
    },
    {
      "School": "Sam Houston State Bearkats",
      "City State": "Huntsville Texas"
    },
    {
      "School": "Samford Bulldogs",
      "City State": "Birmingham Alabama"
    },
    {
      "School": "San Diego State Aztecs",
      "City State": "San Diego California"
    },
    {
      "School": "San Diego Toreros",
      "City State": "San Diego California"
    },
    {
      "School": "San Francisco Dons",
      "City State": "San Francisco California"
    },
    {
      "School": "San Jose State Spartans",
      "City State": "San Jose California"
    },
    {
      "School": "Santa Clara Broncos",
      "City State": "Santa Clara California"
    },
    {
      "School": "Savage School of Physical Education",
      "City State": "New York New York"
    },
    {
      "School": "Savannah State Tigers",
      "City State": "Savannah Georgia"
    },
    {
      "School": "Scranton Royals",
      "City State": "Scranton Pennsylvania"
    },
    {
      "School": "Seattle Redhawks",
      "City State": "Seattle Washington"
    },
    {
      "School": "Seton Hall Pirates",
      "City State": "South Orange New Jersey"
    },
    {
      "School": "Sewanee Tigers",
      "City State": "Sewanee Tennessee"
    },
    {
      "School": "Siena Saints",
      "City State": "Loudonville New York"
    },
    {
      "School": "South Alabama Jaguars",
      "City State": "Mobile Alabama"
    },
    {
      "School": "South Carolina Gamecocks",
      "City State": "Columbia South Carolina"
    },
    {
      "School": "South Carolina State Bulldogs",
      "City State": "Orangeburg South Carolina"
    },
    {
      "School": "South Carolina Upstate Spartans",
      "City State": "Spartanburg South Carolina"
    },
    {
      "School": "South Dakota Coyotes",
      "City State": "Vermillion South Dakota"
    },
    {
      "School": "South Dakota State Jackrabbits",
      "City State": "Brookings South Dakota"
    },
    {
      "School": "South Florida Bulls",
      "City State": "Tampa Florida"
    },
    {
      "School": "Southeast Missouri State Redhawks",
      "City State": "Cape Girardeau Missouri"
    },
    {
      "School": "Southeastern Louisiana Lions",
      "City State": "Hammond Louisiana"
    },
    {
      "School": "Southern California Trojans",
      "City State": "Los Angeles California"
    },
    {
      "School": "Southern Illinois Salukis",
      "City State": "Carbondale Illinois"
    },
    {
      "School": "Southern Illinois-Edwardsville Cougars",
      "City State": "Edwardsville Illinois"
    },
    {
      "School": "Southern Jaguars",
      "City State": "Baton Rouge Louisiana"
    },
    {
      "School": "Southern Methodist Mustangs",
      "City State": "Dallas Texas"
    },
    {
      "School": "Southern Mississippi Golden Eagles",
      "City State": "Hattiesburg Mississippi"
    },
    {
      "School": "Southern Utah Thunderbirds",
      "City State": "Cedar City Utah"
    },
    {
      "School": "Southwestern (KS) Moundbuilders",
      "City State": "Winfield Kansas"
    },
    {
      "School": "Southwestern (TX) Pirates",
      "City State": "Georgetown Texas"
    },
    {
      "School": "Springfield Pride",
      "City State": "Springfield Massachusetts"
    },
    {
      "School": "St. Bonaventure Bonnies",
      "City State": "St. Bonaventure New York"
    },
    {
      "School": "St. Francis (NY) Terriers",
      "City State": "Brooklyn Heights New York"
    },
    {
      "School": "St. John's (NY) Red Storm",
      "City State": "Queens New York"
    },
    {
      "School": "St. John's College (OH)",
      "City State": "Toledo Ohio"
    },
    {
      "School": "St. Lawrence Saints",
      "City State": "Canton New York"
    },
    {
      "School": "Stanford Cardinal",
      "City State": "Stanford California"
    },
    {
      "School": "Stephen F. Austin Lumberjacks",
      "City State": "Nacogdoches Texas"
    },
    {
      "School": "Stetson Hatters",
      "City State": "DeLand Florida"
    },
    {
      "School": "Stevens Institute Ducks",
      "City State": "Hoboken New Jersey"
    },
    {
      "School": "Stony Brook Seawolves",
      "City State": "Stony Brook New York"
    },
    {
      "School": "SUNY-Potsdam Bears",
      "City State": "Potsdam New York"
    },
    {
      "School": "Swarthmore Garnet",
      "City State": "Swarthmore Pennsylvania"
    },
    {
      "School": "Syracuse Orange",
      "City State": "Syracuse New York"
    },
    {
      "School": "Temple Owls",
      "City State": "Philadelphia Pennsylvania"
    },
    {
      "School": "Tennessee State Tigers",
      "City State": "Nashville Tennessee"
    },
    {
      "School": "Tennessee Tech Golden Eagles",
      "City State": "Cookeville Tennessee"
    },
    {
      "School": "Tennessee Volunteers",
      "City State": "Knoxville Tennessee"
    },
    {
      "School": "Tennessee-Martin Skyhawks",
      "City State": "Martin Tennessee"
    },
    {
      "School": "Texas A&M Aggies",
      "City State": "College Station Texas"
    },
    {
      "School": "Texas A&M-Corpus Christi Islanders",
      "City State": "Corpus Christi Texas"
    },
    {
      "School": "Texas Christian Horned Frogs",
      "City State": "Fort Worth Texas"
    },
    {
      "School": "Texas Longhorns",
      "City State": "Austin Texas"
    },
    {
      "School": "Texas Southern Tigers",
      "City State": "Houston Texas"
    },
    {
      "School": "Texas State Bobcats",
      "City State": "San Marcos Texas"
    },
    {
      "School": "Texas Tech Red Raiders",
      "City State": "Lubbock Texas"
    },
    {
      "School": "Texas Wesleyan Rams",
      "City State": "Fort Worth Texas"
    },
    {
      "School": "Texas-Arlington Mavericks",
      "City State": "Arlington Texas"
    },
    {
      "School": "Texas-El Paso Miners",
      "City State": "El Paso Texas"
    },
    {
      "School": "Texas-Rio Grande Valley Vaqueros",
      "City State": "Edinburg Texas"
    },
    {
      "School": "Texas-San Antonio Roadrunners",
      "City State": "San Antonio Texas"
    },
    {
      "School": "Toledo Rockets",
      "City State": "Toledo Ohio"
    },
    {
      "School": "Towson Tigers",
      "City State": "Towson Maryland"
    },
    {
      "School": "Trinity (CT) Bantams",
      "City State": "Hartford Connecticut"
    },
    {
      "School": "Trinity (TX) Tigers",
      "City State": "San Antonio Texas"
    },
    {
      "School": "Troy Trojans",
      "City State": "Troy Alabama"
    },
    {
      "School": "Tulane Green Wave",
      "City State": "New Orleans Louisiana"
    },
    {
      "School": "Tulsa Golden Hurricane",
      "City State": "Tulsa Oklahoma"
    },
    {
      "School": "U.S. International Gulls",
      "City State": "San Diego California"
    },
    {
      "School": "UC-Davis Aggies",
      "City State": "Davis California"
    },
    {
      "School": "UC-Irvine Anteaters",
      "City State": "Irvine California"
    },
    {
      "School": "UC-Riverside Highlanders",
      "City State": "Riverside California"
    },
    {
      "School": "UC-Santa Barbara Gauchos",
      "City State": "Santa Barbara California"
    },
    {
      "School": "UCLA Bruins",
      "City State": "Los Angeles California"
    },
    {
      "School": "Union (NY) Dutchmen",
      "City State": "Schenectady New York"
    },
    {
      "School": "University of California Golden Bears",
      "City State": "Berkeley California"
    },
    {
      "School": "Utah State Aggies",
      "City State": "Logan Utah"
    },
    {
      "School": "Utah Utes",
      "City State": "Salt Lake City Utah"
    },
    {
      "School": "Utah Valley Wolverines",
      "City State": "Orem Utah"
    },
    {
      "School": "Utica Pioneers",
      "City State": "Utica New York"
    },
    {
      "School": "Valparaiso Crusaders",
      "City State": "Valparaiso Indiana"
    },
    {
      "School": "Vanderbilt Commodores",
      "City State": "Nashville Tennessee"
    },
    {
      "School": "Vermont Catamounts",
      "City State": "Burlington Vermont"
    },
    {
      "School": "Villanova Wildcats",
      "City State": "Villanova Pennsylvania"
    },
    {
      "School": "Virginia Cavaliers",
      "City State": "Charlottesville Virginia"
    },
    {
      "School": "Virginia Commonwealth Rams",
      "City State": "Richmond Virginia"
    },
    {
      "School": "Virginia Military Institute Keydets",
      "City State": "Lexington Virginia"
    },
    {
      "School": "Virginia Tech Hokies",
      "City State": "Blacksburg Virginia"
    },
    {
      "School": "Wabash Little Giants",
      "City State": "Crawfordsville Indiana"
    },
    {
      "School": "Wagner Seahawks",
      "City State": "Staten Island New York"
    },
    {
      "School": "Wake Forest Demon Deacons",
      "City State": "Winston-Salem North Carolina"
    },
    {
      "School": "Washburn Ichabods",
      "City State": "Topeka Kansas"
    },
    {
      "School": "Washington & Jefferson Presidents",
      "City State": "Washington Pennsylvania"
    },
    {
      "School": "Washington & Lee Generals",
      "City State": "Lexington Virginia"
    },
    {
      "School": "Washington (MO) Bears",
      "City State": "St. Louis Missouri"
    },
    {
      "School": "Washington College Shoremen",
      "City State": "Chestertown Maryland"
    },
    {
      "School": "Washington Huskies",
      "City State": "Seattle Washington"
    },
    {
      "School": "Washington State Cougars",
      "City State": "Pullman Washington"
    },
    {
      "School": "Wayne State (MI) Warriors",
      "City State": "Detroit Michigan"
    },
    {
      "School": "Weber State Wildcats",
      "City State": "Ogden Utah"
    },
    {
      "School": "Wesleyan (CT) Cardinals",
      "City State": "Middletown Connecticut"
    },
    {
      "School": "West Chester Golden Rams",
      "City State": "West Chester Pennsylvania"
    },
    {
      "School": "West Texas A&M Buffaloes",
      "City State": "Canyon Texas"
    },
    {
      "School": "West Virginia Mountaineers",
      "City State": "Morgantown West Virginia"
    },
    {
      "School": "Western Carolina Catamounts",
      "City State": "Cullowhee North Carolina"
    },
    {
      "School": "Western Illinois Leathernecks",
      "City State": "Macomb Illinois"
    },
    {
      "School": "Western Kentucky Hilltoppers",
      "City State": "Bowling Green Kentucky"
    },
    {
      "School": "Western Michigan Broncos",
      "City State": "Kalamazoo Michigan"
    },
    {
      "School": "Western State Mountaineers",
      "City State": "Gunnison Colorado"
    },
    {
      "School": "Westminster (MO) Blue Jays",
      "City State": "Fulton Missouri"
    },
    {
      "School": "Westminster (PA) Titans",
      "City State": "New Wilmington Pennsylvania"
    },
    {
      "School": "Wheaton (IL) Thunder",
      "City State": "Wheaton Illinois"
    },
    {
      "School": "Whittier Poets",
      "City State": "Whittier California"
    },
    {
      "School": "Wichita State Shockers",
      "City State": "Wichita Kansas"
    },
    {
      "School": "Widener Pride",
      "City State": "Chester Pennsylvania"
    },
    {
      "School": "William & Mary Tribe",
      "City State": "Williamsburg Virginia"
    },
    {
      "School": "Williams Ephs",
      "City State": "Williamstown Massachusetts"
    },
    {
      "School": "Winthrop Eagles",
      "City State": "Rock Hill South Carolina"
    },
    {
      "School": "Wisconsin Badgers",
      "City State": "Madison Wisconsin"
    },
    {
      "School": "Wisconsin-Stevens Point Pointers",
      "City State": "Stevens Point Wisconsin"
    },
    {
      "School": "Wisconsin-Superior Yellowjackets",
      "City State": "Superior Wisconsin"
    },
    {
      "School": "Wittenberg Tigers",
      "City State": "Springfield Ohio"
    },
    {
      "School": "Wofford Terriers",
      "City State": "Spartanburg South Carolina"
    },
    {
      "School": "Wooster Fighting Scots",
      "City State": "Wooster Ohio"
    },
    {
      "School": "Worcester Tech Engineers",
      "City State": "Worcester Massachusetts"
    },
    {
      "School": "Wright State Raiders",
      "City State": "Dayton Ohio"
    },
    {
      "School": "Wyoming Cowboys",
      "City State": "Laramie Wyoming"
    },
    {
      "School": "Xavier Musketeers",
      "City State": "Cincinnati Ohio"
    },
    {
      "School": "Yale Bulldogs",
      "City State": "New Haven Connecticut"
    },
    {
      "School": "Youngstown State Penguins",
      "City State": "Youngstown Ohio"
    }
];

    // set database.
    // var NCAAteamRef = firebase.database().ref().child("teams");
    var NCAAteamRef = firebase.database().ref().set({teams});
    // NCAAteamRef.set({teams});
  
    // Write the new post's data 
    //NCAAteamRef.set({teams});
    
};