var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clears = function() {
    ctx.beginPath();
    ctx.clearRect(0,0,500,500);
    prevX = -1;
    prevY = -1;
}

var cbutton = clear.addEventListener("click", clears);

var shape = 1;
var toggles = function(e) {
    if (shape == 1){
	shape = 2;
    }
    else{
	shape = 1;
    }
}

var tbutton = toggle.addEventListener("click",toggles);
var prevX = -1;
var prevY = -1;
var draw = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.beginPath();
    if (shape == 1) {
	ctx.arc(x, y, 25, 0, 2*Math.PI);
    }
    else {
	ctx.fillRect(x,y,50,50);
    }
    ctx.stroke();
    ctx.fill();
    if (prevX == -1){
	prevX = x;
	prevY = y;
    }
    else {
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(prevX,prevY);
	prevX = x;
	prevY= y;
    }	
    ctx.stroke();
    console.log("asdf");
}

slate.addEventListener("click", draw);
