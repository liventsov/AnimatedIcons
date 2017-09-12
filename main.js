//brake chain animation
function brakeChain() {
    let chain = document.getElementById('chain');
    chain.innerHTML = "&#xf0c1;";

    setTimeout(function () {
        chain.innerHTML = "&#xf127;";
    }, 1000);
}

//call animation
brakeChain();

//animate every 2 seconds
setInterval(brakeChain, 2000);

//battery charge animation
function chargeBattery() {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";

    setTimeout(function () {
        battery.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function () {
        battery.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function () {
        battery.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function () {
        battery.innerHTML = "&#xf240;";
    }, 4000);
}

//run aniation
chargeBattery();

//run animation every 5 seconds
setInterval(chargeBattery, 5000);


//hourglass tip animation
function hourglassTip() {
    let hourglass = document.getElementById('hourglass')
    hourglass.innerHTML = "&#xf251;";

    setTimeout(function () {
        hourglass.innerHTML = "&#xf252;";
    }, 1000);
    setTimeout(function () {
        hourglass.innerHTML = "&#xf253;";
    }, 2000);
}

//run animation
hourglassTip();

//run animation every 3 seconds
setInterval(hourglassTip, 3000);

//thermometer increase animation
function thermometerUp() {
    let thermometer = document.getElementById('thermometer')
    thermometer.innerHTML = "&#xf2cb"

    setTimeout(function () {
        thermometer.innerHTML = "&#xf2ca;";
    }, 1000);
    setTimeout(function () {
        thermometer.innerHTML = "&#xf2c9;";
    }, 2000);
    setTimeout(function () {
        thermometer.innerHTML = "&#xf2c8;";
    }, 3000);
    setTimeout(function () {
        thermometer.innerHTML = "&#xf2c7;";
    }, 4000);
}

//run animation
thermometerUp();

//run animation every 5 seconds
setInterval(thermometerUp, 5000);

//star animation
function starFull() {
    let star = document.getElementById('star')
    star.innerHTML = "&#xf006;";

    setTimeout(function () {
        star.innerHTML = "&#xf123;";
    }, 1000)
    setTimeout(function () {
        star.innerHTML = "&#xf005;";
    }, 2000)
}

starFull();
setInterval(starFull, 3000);
