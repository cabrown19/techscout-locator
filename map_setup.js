  /*
      function parter(t, p, s){
        //document.write(t.toString.length -1);
        return (t.toString.length -1);
      }
      */

      function initialize() {

        data = [
                    {name: "Fred", timestamp: 6, lat: 32.7150, lon: -117.1625},
                    {name: "Dmitri", timestamp: 88436, lat: 37.7833, lon: -122.4167},
                    {name: "Sally", timestamp: 938, lat: 33.7408, lon: -117.8814},
                    {name: "Rebecca", timestamp: 43, lat: 37.3544, lon: -121.9692},
                    {name: "Corndawg", timestamp: 5029, lat: 34.0528, lon: -117.6278},
                    {name: "Augustus", timestamp: 17, lat: 34.1100, lon: -117.7197},
                    {name: "Mom", timestamp: 970, lat: 34.1100, lon: -117.7197},
                    {name: "Kobe Bryant", timestamp: 14, lat: 34.1100, lon: -117.7197},
                    {name: "Bart", timestamp: 45238, lat: 37.7833, lon: -122.4167},
                    {name: "Sungyoung", timestamp: 2, lat: 34.0500, lon: -118.2500}
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


        for (var x = 0; x < p; x++){
          markers[x] = [];
        }

        for (var y = 0; y < data.length; y++){
           var m = new google.maps.Marker({
            position: new google.maps.LatLng(data[y][2], data[y][3]),
            map: map,
            icon: 'http://s7.postimg.org/v3hm8ub5j/icon.png',
            title: data[y][0]
            });

           var infowindow = new google.maps.InfoWindow({
  			});

           google.maps.event.addListener(m, 'click', function() {
           	infowindow.setContent(this.title);
    		infowindow.open(map,this);
 			 });

          markers[parter(data[y][1], p, s)].push(m);
        }
    }

      google.maps.event.addDomListener(window, 'load', initialize);
     