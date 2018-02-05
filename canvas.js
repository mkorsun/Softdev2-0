var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clear = function() {
    ctx.beginPath();
    ctx.clearRect(0,0,500,500);
}

var cbutton = document.getElementById("clear");
cbutton.addEventListener("click", clear);

var shape = 1;
var toggle = function() {
    if (shape == 1){
	var shape = 2;
    }
    if (shape ==2) {
	var shape = 1;
    }
}

var tbutton = document.getElementById("toggle");
tbutton.addEventListener("click",toggle);

var draw = function(e) {
    var x = e.ClientX - 7;
    var y = e.ClientY - 77;
    ctx.beginPath();
    if (shape == 1) {
	ctx.arc(x, y, 25, 0, 2*Math.PI);
    }
    if (shape == 2){
	ctx.fillRect(x,y,30,15);
    }
    ctx.stroke();
    ctx.fill();
    console.log("asdf");
}

c.addEventListener("click", draw);
