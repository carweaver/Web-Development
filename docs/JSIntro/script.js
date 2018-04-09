

var button = document.getElementById("b1");
button.addEventListener("click", buttonPress);
var counter = 0;

function buttonPress() {
	counter++
	console.log("press");
	document.getElementById("scriptable").style.color = "blue";
	document.getElementById("scriptable").innerHTML = "<h1>You pressed the button " + counter + " time.<h1>"


}
