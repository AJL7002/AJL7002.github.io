var birthday = new Date("November 11, 2007 8:30")
function convertMS(milliseconds) {
    var year, day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    year = Math.floor(day / 365)
    day = day % 365
    return {
        year: year,
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
}
var x = convertMS(new Date - birthday)
var age = x.year + " years, " + x.day + " days, and " + x.hour + " hours old."
function swapcolor() {
    var color = getRandomColor();
    document.getElementById('link').style.color = color;
    document.getElementById('heading').style.color = color;
    document.getElementById('tint').style.background = hexToRGB(color, 0.5)
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}
function displaycolor() {
    document.getElementById('hexoutput').style.backgroundColor = gethexinput()
}
function gethexinput() {
    return '#' + document.getElementById("hexinput").value
}