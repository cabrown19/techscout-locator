
function setPin() {

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


    var slider = document.getElementById("exampleInput");
    var day = document.getElementById("fader");

    var date;

    if (!day.valueAsDate) {
        date = new Date(2014, 04, 01);
    } else {
        date = new Date(day.valueAsDate.getUTCFullYear(), day.valueAsDate.getUTCMonth(), slider.value);
    }

    for (i = 0; i < data.length; i++) {
        if (!parter(data[i].timestamp, date)) {
            markers[i].setVisible = false;
        } else {
            markers[i].setVisible = true;
        }
    }
}