

// Function for determining if we want a pin 
// with date "t" to show up given selected date "day"     
function parter(t, startDate, endDate){
    var d = new Date(0);
    d.setUTCSeconds(t);

    if(startDate <= d && d <= endDate) {
        return true;
    }
    return false;

    // tYear = d.getUTCFullYear();
    // sYear = startDate.getUTCFullYear();
    // eYear = endDate.getUTCFullYear();
    // tMonth = d.getUTCMonth();
    // sMonth = startDate.getUTCMonth();
    // eMonth = endDate.getUTCMonth();
    // tDay = d.getUTCDate();
    // sDay = startDate.getUTCDate();
    // eDay = endDate.getUTCDate();

    // if (   (sYear < tYear) && (tYear < pYear)
    //     && (sMonth < tMonth) && (tMonth < pMonth)
    //     && (sday < tDay) && (tDay < pDay)){
    //     return true;
    // }
    // return false;
}

function setLocation(m, locationString, infowindow, map) {
    var contentString = '<div class="infowindow">' +
                            m.title +
                            '<br>' +
                            locationString +
                        '</div>';

    infowindow.setContent(contentString);
    infowindow.open(map, m);
    return false;
}

function getLocationData(m, infowindow, map, setLocation) {
                geocoder = new google.maps.Geocoder();
                geocoder.geocode({'latLng': m.position}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {

                        for(var i = 0; i < results.length; i++) { 

                            if (results[i].types[0] == "locality") {
                                var addr = results[i].formatted_address;
                                break;
                            } else {
                                var addr = "     ";
                            }
                        }

                        var retString = addr.slice(
                            0, addr.length - 5);

                        this.setLocation(m, retString, infowindow, map);
                    } else {
                        this.setLocation(m, "", infowindow, map);
                    }
                });
            }



function dateCtrl($scope) {
    $scope.value = new Date(2014, 00, 1);

    $scope.setPin = function() {

        var results = setPin(map.getBounds(), true, $scope.totalCount);
        $scope.visibleCount = results.visibleCount;
        $scope.totalCount = results.totalCount;
        $scope.$digest();
    };

    $scope.mapChange = function() {

        var results = setPin(map.getBounds(), true, $scope.totalCount);
        $scope.visibleCount = results.visibleCount;
        $scope.totalCount = results.totalCount;
        $scope.$digest();
    };

    $scope.visibleCount = 0;
    $scope.totalCount = 0;

    //$scope.$watch('visibleCount', function(newValue) { console.log('visibleCount changed to: ' + newValue)}, true);


    var months = [30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28, 31];
    var monthNames = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];
    var yearNames = ["2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2015", "2015", "2015"];
    var customVals = [];

    for (var x = 0; x < months.length; x++){
        for (var y = 0; y < months[x]; y++){
            customVals.push(monthNames[x] + " " + (y+1).toString() + ", " + yearNames[x]);
        }
    }

    $("#slider").ionRangeSlider({
        values: customVals,
        type: 'double', 
        hasGrid: true
    });


    // Initialize some fake data
    data = [
            {name: "Fred", timestamp: 1396896970, lat: 32.7150, lon: -117.1625},
            {name: "Dmitri", timestamp: 1396851550, lat: 37.7833, lon: -122.4167},
            {name: "Sally", timestamp: 1398353030, lat: 33.7408, lon: -117.8814},
            {name: "Rebecca", timestamp: 1398006260, lat: 37.3544, lon: -121.9692},
            {name: "Corndawg", timestamp: 1395129060, lat: 34.0528, lon: -117.6278},
            {name: "Augustus", timestamp: 1394660520, lat: 34.1100, lon: -117.7197},
            {name: "Mom", timestamp: 1395212140, lat: 34.1100, lon: -117.7197},
            {name: "Kobe Bryant", timestamp: 1393516960, lat: 34.1100, lon: -117.7197},
            {name: "Bart", timestamp: 1396115100, lat: 37.7833, lon: -122.4167},
            {name: "Sungyoung", timestamp: 1397009990, lat: 34.0500, lon: -118.2500},
    ];


    // Set up the map configuration
    var mapOptions = {
        center: new google.maps.LatLng(37.2500, -119.5000),
        zoom: 6
    };

    // Set the map variable
    var map = new google.maps.Map(document.getElementById("map-canvas"),
                                                          mapOptions);

    // Create arrays for the markers and the locations with an index
    markers = [];
    locs = {};
    var i = 0;

    // Add the google geocoder to get addresses
    geocoder = new google.maps.Geocoder();

    // Create markers for each data point
    for (var y = 0; y < data.length; y++, i++){
        var latlng = new google.maps.LatLng(data[y].lat, data[y].lon);
        var m = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: '/icon.png',
            title: data[y].name,
            visible: false
        });

        markers.push(m);

        google.maps.event.addListener(map, 'bounds_changed', (function() {

            $scope.mapChange();

        }), false);

        var infowindow = new google.maps.InfoWindow({});

        // Allow each marker to have an info window    
        google.maps.event.addListener(m, 'click', (function() {
            
            getLocationData(this, infowindow, map);

        }), false);
    }


    document.getElementById('gobutton').onclick = function() {setPin(map.getBounds(), true, $scope.totalCount);};

}












































     