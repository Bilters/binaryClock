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

    // hour = 22;
    // mins = 38;
    // secs = 58;

    function updateSecondsLast() {
        lastSecs = secs % 10;
        selector1 = document.querySelector('#s01');
        selector2 = document.querySelector('#s02');
        selector4 = document.querySelector('#s04');
        selector8 = document.querySelector('#s08');
        switchCaseNumbers9(lastSecs);
    }

    function updateSecondsFirst() {
        firstSecs = Math.floor(secs / 10);
        selector1 = document.querySelector('#s10');
        selector2 = document.querySelector('#s20');
        selector4 = document.querySelector('#s40');
        switchCaseNumbers6(firstSecs);
    }

    function updateMinutesLast() {
        lastMins = mins % 10;
        selector1 = document.querySelector('#m01');
        selector2 = document.querySelector('#m02');
        selector4 = document.querySelector('#m04');
        selector8 = document.querySelector('#m08');
        switchCaseNumbers9(lastMins);
    }

    function updateMinutesFirst() {
        firstMins = Math.floor(mins / 10);
        selector1 = document.querySelector('#m10');
        selector2 = document.querySelector('#m20');
        selector4 = document.querySelector('#m40');
        switchCaseNumbers6(firstMins);
    }

    function updateHoursLast() {
        lastHours = hour % 10;
        selector1 = document.querySelector('#h01');
        selector2 = document.querySelector('#h02');
        selector4 = document.querySelector('#h04');
        selector8 = document.querySelector('#h08');
        switchCaseNumbers9(lastHours);
    }

    function updateHoursFirst() {
        firstHours = Math.floor(hour / 10);
        selector1 = document.querySelector('#h10');
        selector2 = document.querySelector('#h20');
        switchCaseNumbers2(firstHours);
    }


    //
    // function updateHoursFirst() {
    //     firstHours = Math.floor(hour / 10);
    //     selector1 = document.querySelector('#h10');
    //     selector2 = document.querySelector('#h20');
    //     switchCaseNumbers2(firstHours);
    // }
    //
    // function updateHoursLast() {
    //     lastHours = hour % 10;
    //     selector1 = document.querySelector('#h01');
    //     selector2 = document.querySelector('#h02');
    //     selector2 = document.querySelector('#h04');
    //     selector2 = document.querySelector('#h08');
    //     switchCaseNumbers9(lastHours);
    // }

    updateSecondsLast();
    updateSecondsFirst();
    updateMinutesLast();
    updateMinutesFirst();
    updateHoursLast();
    updateHoursFirst();


    function switchCaseNumbers9(time) {
        switch (time) {
            case 1:
                selector1.checked = true;
                selector2.checked = false;
                selector4.checked = false;
                selector8.checked = false;
                break;
            case 2:
                selector1.checked = false;
                selector2.checked = true;
                selector4.checked = false;
                selector8.checked = false;
                break;
            case 3:
                selector1.checked = true;
                selector2.checked = true;
                selector4.checked = false;
                selector8.checked = false;
                break;
            case 4:
                selector1.checked = false;
                selector2.checked = false;
                selector4.checked = true;
                selector8.checked = false;
                break;
            case 5:
                selector1.checked = true;
                selector2.checked = false;
                selector4.checked = true;
                selector8.checked = false;
                break;
            case 6:
                selector1.checked = false;
                selector2.checked = true;
                selector4.checked = true;
                selector8.checked = false;
                break;
            case 7:
                selector1.checked = true;
                selector2.checked = true;
                selector4.checked = true;
                selector8.checked = false;
                break;
            case 8:
                selector1.checked = false;
                selector2.checked = false;
                selector4.checked = false;
                selector8.checked = true;
                break;
            case 9:
                selector1.checked = true;
                selector2.checked = false;
                selector4.checked = false;
                selector8.checked = true;
                break;
            default:
                selector1.checked = false;
                selector2.checked = false;
                selector4.checked = false;
                selector8.checked = false;
                break;
        }
    }

    function switchCaseNumbers6(time) {
        switch (time) {
            case 1:
                selector1.checked = true;
                selector2.checked = false;
                selector4.checked = false;
                break;
            case 2:
                selector1.checked = false;
                selector2.checked = true;
                selector4.checked = false;
                break;
            case 3:
                selector1.checked = true;
                selector2.checked = true;
                selector4.checked = false;
                break;
            case 4:
                selector1.checked = false;
                selector2.checked = false;
                selector4.checked = true;
                break;
            case 5:
                selector1.checked = true;
                selector2.checked = false;
                selector4.checked = true;
                break;
            case 6:
                selector1.checked = false;
                selector2.checked = true;
                selector4.checked = true;
                break;
            default:
                selector1.checked = false;
                selector2.checked = false;
                selector4.checked = false;
                selector8.checked = false;
                break;
        }
    }

    function switchCaseNumbers2(time) {
        switch (time) {
            case 1:
                selector1.checked = true;
                selector2.checked = false;
                selector4.checked = false;
                break;
            case 2:
                selector1.checked = false;
                selector2.checked = true;
                selector4.checked = false;
                break;
            default:
                selector1.checked = false;
                selector2.checked = false;
                selector4.checked = false;
                selector8.checked = false;
                break;
        }
    }

}
