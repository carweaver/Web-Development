

var button = document.getElementById("b1");
button.addEventListener("click", buttonPress);

function buttonPress() {
	console.log("press");
	document.getElementById("scriptable").style.color = "blue";

// if (counter==1) {
// document.getElementById("scriptable").innerHTML = "<h1>You pressed the button " + counter + " time.<h1>"
// 	}

}
