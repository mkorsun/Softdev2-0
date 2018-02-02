var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clear = function() {
    ctx.beginPath();
    ctx.clearRect(0,0,500,500);
}

var cbutton = document.getLementById("clear")
cbutton.addEventListenter("click", clear)
