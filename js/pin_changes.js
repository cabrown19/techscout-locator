
function setPin() {

    // Get the elements with user input
    var day = document.getElementById("monthAndYear");
    var slider = document.getElementById("fader");

    var date;

    // Check if they are initialized, if not set a default
    if (day.valueAsDate == null) {
        date = new Date(2014, 00, 01);
    } else {
        // If they are, make a date
        date = new Date(day.valueAsDate.getUTCFullYear(), day.valueAsDate.getUTCMonth(), parseInt(slider.value));
    }

    // iterate through all pins each time
    for (var i = 0; i < data.length; i++) {
        // Make them visible on the map if they should be
        if (!parter(data[i].timestamp, date)) {
            markers[i].setVisible(false);
        } else {
            markers[i].setVisible(true);
        }
    }
}