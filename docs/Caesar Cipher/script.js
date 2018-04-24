document.getElementById("buttonEncode").addEventListener("click", encode);

function encode() {
  console.log("Button Pressed");

  var str = document.getElementById("inputMessage").value;
  var key = document.getElementById("inputKey").value;
  var arr = [];
  key = parseInt(key)

	for (var i = 0; i < str.length; i++) {

		var charCode = str.charCodeAt(i);
		console.log(charCode)
		if(charCode == 32){
			arr.push(String.fromCharCode(charCode))
		}
		if(65 < charCode && charCode < 91){
			charCode -= 66;
			charCode += key
			arr.push(String.fromCharCode(charCode+66))
		}
		else if (96 < charCode && charCode < 123){
			charCode -= 97
			charCode += key
			arr.push(String.fromCharCode(charCode+97))
		}
		
		console.log(charCode)
		document.getElementById('output').innerHTML = arr.join("");
	}
}

// My code works for the most part except I couldn't figure out how to use modulo.