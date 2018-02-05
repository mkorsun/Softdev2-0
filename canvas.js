var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clears = function() {
    ctx.beginPath();
    ctx.clearRect(0,0,500,500);
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

var draw = function(e) {
    var x = e.clientX - 5;
    var y = e.clientY - 3;
    ctx.beginPath();
    if (shape == 1) {
	ctx.arc(x, y, 25, 0, 2*Math.PI);
    }
    if (shape == 2){
	x=x-25;
	y=y-25
	ctx.fillRect(x,y,50,50);
    }
    ctx.stroke();
    ctx.fill();
    console.log("asdf");
}

slate.addEventListener("click", draw);
