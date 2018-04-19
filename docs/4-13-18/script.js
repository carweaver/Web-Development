
// document.getElementById("date").innerHTML = date;


// document.getElementById("givenDate").innerHTML = givenDate;


var datecalc = document.getElementById("datecalc");
datecalc.addEventListener("click",dateDifference);

function dateDifference() {
	var date = new Date();
	console.log(date);
	var input = document.getElementById("input1").value;
	console.log(input)
	var givenDate = new Date(input)
	var difference = givenDate.getTime() - date.getTime();
	difference = (difference/8.64e+7);
	document.getElementById('difference').innerHTML = difference;
}



