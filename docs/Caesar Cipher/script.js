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

/* Getting the ASCII value from a character in a string:
  var x = "Hello World";        Start with a string variable
  var xVal = x.charCodeAt(0)   Call the charCodeAt method on the string object
                                The parameter it takes is a position in the string
                                e.g. 0 is H, 1 is e, 2 is l, etc
                                It will return the ASCII value of the character in that position
  console.log(xVal)             Prints: 72 to the console
*/