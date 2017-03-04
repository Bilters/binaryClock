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
        lastSecs = secs % 10;
        selector1 = document.querySelector('#s01');
        selector2 = document.querySelector('#s02');
        selector4 = document.querySelector('#s04');
        selector8 = document.querySelector('#s08');
        switchCaseNumbers9(lastSecs);
    }

    function updateSecondsFirst() {
        firstSecs = secs / 10;
        selector1 = document.querySelector('#s10');
        selector2 = document.querySelector('#s20');
        selector4 = document.querySelector('#s40');
        switchCaseNumbers6(firstSecs);
    }
    updateSecondsLast();
    updateSecondsFirst();

}

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
}
