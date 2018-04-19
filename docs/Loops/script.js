document.getElementById("button").addEventListener("click", fn)

function fn(){
	var str = document.getElementById("input").value;
	console.log(str)

	for (var i = 0; i < str.length; i++) {

		var charCode = str.charCodeAt(i)-96;
		charCode += 5
		document.getElementById('charCode').innerHTML = str.fromCharCode(charCode);

	}
}