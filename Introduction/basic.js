

function coloring() {
    var r1 = document.getElementById("heading1"); //get span to apply rainbow
    r1.style.background = "white";
    document.getElementsByTagName("html").item(0).style.background = "white";

    myRainbowSpan = new RainbowSpan(r1, 0, 360, 255, 50, 18); //apply static rainbow effect


    myRainbowSpan.timer = window.setInterval("myRainbowSpan.moveRainbow()", myRainbowSpan.speed);
    r1.style.position = "absolute";
    window.setInterval(new function () {
        r1.style.right = r1.style.right++;
    }, 50);

}
