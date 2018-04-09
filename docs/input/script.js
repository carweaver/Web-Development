var button = document. getElementById("b1");
button.addEventListener("click",buttonPress);

function buttonPress() {
	var val1 = document.getElementById("input1").value;
	val1 = parseInt(val1);
	console.log(val1)
	var val2 = document.getElementById("input2").value;
	val2 = parseInt(val2);
	console.log(val2)
	console.log(val1+val2)
}


