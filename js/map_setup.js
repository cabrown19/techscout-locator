

// Function for determining if we want a pin 
// with date "t" to show up given selected date "day"     
function parter(t, day){
    var d = new Date(0);
    d.setUTCSeconds(t);

    tYear = d.getUTCFullYear();
    pYear = day.getUTCFullYear();
    tMonth = d.getUTCMonth();
    pMonth = day.getUTCMonth();
    tDay = d.getUTCDate();
    pDay = day.getUTCDate();

    if (tYear < pYear) {
        return true;
    } 
    else if (tYear === pYear && tMonth < pMonth) {
        return true;
    } 
    else if (tYear === pYear && tMonth === pMonth && tDay <= pDay) {
        return true;
    } else {
        return false;
    }
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
    }
    $scope.visibleCount = 0;
    $scope.totalCount = 0;

    $scope.$watch('visibleCount', function(newValue) { console.log('visibleCount changed to: ' + newValue)})

    // Initialize some fake data
    data = [
            {name: "Fred", timestamp: 1396896970, lat: 32.7150, lon: -117.1625},
            {name: "Sam", timestamp: 1396851550, lat: 36.33, lon: -122.4167},
            {name: "Sally", timestamp: 1398353030, lat: 33.7408, lon: -117.8814},
            {name: "Rebecca", timestamp: 1398006260, lat: 37.3544, lon: -121.9692},
            {name: "Corndawg", timestamp: 1395129060, lat: 34.0528, lon: -117.6278},
            {name: "Augustus", timestamp: 1394660520, lat: 33.1100, lon: -117.5197},
            {name: "Mom", timestamp: 1395212140, lat: 34.2100, lon: -118.7197},
            {name: "Kobe Bryant", timestamp: 1393516960, lat: 34.1100, lon: -117.7197},
            {name: "Bart", timestamp: 1396115100, lat: 37.7833, lon: -122.4167},
            {name: "Sungyoung", timestamp: 1397009990, lat: 34.0500, lon: -118.2500},
            {name: "Jo", timestamp: 1396509990, lat: 51.50722, lon: -0.12750},                  
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
            icon: 'http://s7.postimg.org/v3hm8ub5j/icon.png',
            title: data[y].name,
            visible: false
        });

        markers.push(m);

        google.maps.event.addListener(map, 'bounds_changed', (function() {

            var results = setPin(map.getBounds(), false, $scope.totalCount);
            $scope.totalCount = results.totalCount;
            $scope.visibleCount = results.visibleCount;
            console.log("count after: " + $scope.visibleCount);
        }), false);

        var infowindow = new google.maps.InfoWindow({});

        // Allow each marker to have an info window    
        google.maps.event.addListener(m, 'click', (function() {
            
            getLocationData(this, infowindow, map);

        }), false);
    }

}












































     