function updateTime() {
    var today = new Date();
    var hour = today.getHours();
    var mins = today.getMinutes();
    var secs = today.getSeconds();
    if (secs <= 9) {
        secs = "0" + secs;
    }
    if (mins <= 9) {
        mins = "0" + mins;
    }
    if (hour <= 9) {
        hour = "0" + hour;
    }
    var totalTime = hour + ":" + mins + ":" + secs;
    setTimeout("updateTime()", 1000);
    console.log(totalTime);

    function updateSecondsLast() {
        // Isolating last number
        secs = secs % 10;

        if (secs === 0) {
            document.secondsLast.s01.checked = false;
            document.secondsLast.s02.checked = false;
            document.secondsLast.s04.checked = false;
            document.secondsLast.s08.checked = false;
        } else {
            // LOOP through numbers higher lower checked
            
        }

        updateSecondsLast();
    }
}
