var addbutton = document.getElementById("add");
addbutton.addEventListener("click",addPress);


function addPress() {
	var val1 = document.getElementById("input1").value;
	val1 = parseInt(val1);
	console.log(val1)
	var val2 = document.getElementById("input2").value;
	val2 = parseInt(val2);
	console.log(val2)
	var boolution = val1+val2;
	document.getElementById("boolution").innerHTML = boolution;
	console.log(boolution)
}

var multbutton = document.getElementById("mult");
multbutton.addEventListener("click",multPress);

function multPress() {
	var val1 = document.getElementById("input1").value;
	val1 = parseInt(val1);
	console.log(val1)
	var val2 = document.getElementById("input2").value;
	val2 = parseInt(val2);
	console.log(val2)
	var multSolution = val1*val2;
	document.getElementById("multSolution").innerHTML = multSolution;
	console.log(multSolution)
}

var dividebutton = document.getElementById("div");
dividebutton.addEventListener("click",divPress);

function divPress() {
	var val1 = document.getElementById("input1").value;
	val1 = parseInt(val1);
	console.log(val1)
	var val2 = document.getElementById("input2").value;
	val2 = parseInt(val2);
	console.log(val2)
	var divSolution = val1/val2;
	document.getElementById("divSolution").innerHTML = divSolution;
	console.log(divSolution)
}