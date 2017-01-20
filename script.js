function updateTime() {
    var today = new Date();
    var hour = today.getHours();
    var mins = today.getMinutes();
    var secs = today.getSeconds();
    var totalTime = hour + ":" + mins + ":" + secs;
    setTimeout("updateTime()", 1000);
    console.log(totalTime);
}
