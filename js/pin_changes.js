function setPin(bounds, update, totalCount) {
    var visibleCount = 0;
    if (update) {
        totalCount = 0;
        // Get the elements with user input
        var day = document.getElementById("monthAndYear");
        var slider = document.getElementById("fader");
        var endDate = document.getElementById("endDate").valueAsDate;
        var startDate = document.getElementById("startDate").valueAsDate;


        var date;

        // Check if they are initialized, if not set a default
        // if (day.valueAsDate == null) {
        //     date = new Date(2014, 0, 01);
        // } else {
        //     // If they are, make a date
        //     date = new Date(day.valueAsDate.getUTCFullYear(), day.valueAsDate.getUTCMonth(), parseInt(slider.value));
        // }
        if (endDate == null) {
            endDate = new Date(2014, 0, 01);
        }

        if (startDate == null) {
            starDate = new Date(2014, 0, 01);
        }

        // iterate through all pins each time
        for (var i = 0; i < data.length; i++) {
            // Make them visible on the map if they should be
            if (!parter(data[i].timestamp, startDate, endDate)) {
                markers[i].setVisible(false);

            } else {
                markers[i].setVisible(true);
                totalCount++;

                if (bounds.contains(markers[i].getPosition())) {
                    visibleCount++;
                }
            }
        }
    } else {
        for (var i = 0; i < data.length; i++) {
            if (bounds.contains(markers[i].getPosition()) && markers[i].visible) {
                visibleCount++;
            }
        }

    }
    return {
        'visibleCount': visibleCount,
        'totalCount': totalCount,
    }
}