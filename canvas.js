var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clear = function() {
    ctx.beginPath();
    ctx.clearRect(0,0,500,500);
}

var cbutton = document.getElementById("clear");
cbutton.addEventListener("click", clear);

var tbutton = document.getElementById("toggle");
tbutton.addEventListener("click",toggle);

var circle = function(e) {
    ctx.beginPath();
    ctx.arc(e.ClientX, e.ClientY, 25, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    console.log("asdf");
}

c.addEventListener("click", circle);
