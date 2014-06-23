  
      function parter(t, day){
        var d = new Date(0);
        d.setUTCSeconds(t);

        tYear = d.getUTCFullYear();
        pYear = day.getUTCFullYear();
        tMonth = d.getUTCMonth();
        pMonth = day.getUTCMonth();
        tday = d.getUTCDay();
        pday = day.getUTCDay();

        if (tYear < pYear) {
          return true;
        } else if ( tYear === pYear && tMonth < pMonth) {
          return true;
        } else if ( tYear === pYear && tMonth === pMonth && tDay <= pDay) {
          return true;
        } else {
          return false;
        }
      }
      

      function initialize() {

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
                    {name: "Sungyoung", timestamp: 1397009990, lat: 34.0500, lon: -118.2500}
                    ];

        var mapOptions = {
          center: new google.maps.LatLng(41.2500, -96.0000),
          zoom: 4
        };

        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        // number of partititions also used in the range min/max/step
        p = 5;
        // number of days will be p

        var currMillis = 1000;
        var firstMillis = 0; //only zero in this specific case

        var section = (currMillis-firstMillis)/p;
        var s = section;
        markers = [];


        for (var y = 0; y < data.length; y++){
           var m = new google.maps.Marker({
            position: new google.maps.LatLng(data[y].lat, data[y].lon),
            map: map,
            icon: 'http://s7.postimg.org/v3hm8ub5j/icon.png',
            title: data[y].name
            });
           markers.push(m);
           var infowindow = new google.maps.InfoWindow({
  			});

           google.maps.event.addListener(m, 'click', function() {
           	infowindow.setContent(this.title);
    		infowindow.open(map,this);
 			 });
        }
        document.getElementById('exampleInput').onchange = setPin;
        document.getElementById('fader').onchange = setPin;
    }

      google.maps.event.addDomListener(window, 'load', initialize);


     