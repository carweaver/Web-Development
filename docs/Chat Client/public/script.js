//Begin the login process and set up the listener for new messages
login(start, recieveMessage);
var timeOpened

//This function runs after you have logged in. Your user information is passed to you in the variable 'user'
function start(user) {
	console.log(user);
	timeOpened = (new Date()).getTime();
  document.getElementById("sendMessage").addEventListener("click", send);
}
//This function runs every time you recieve a message. It will run for every message already in the database.
//THe message information is passed to you in the variable 'message'
function recieveMessage(message) {
	console.log(message);
	time = new Date();
	time = time.toUTCString();
	if (message.name != "Carter Weaver" && message.timestamp > timeOpened) {
		var texts = document.createElement("li")
  		var listItem = document.createTextNode(message.name + " " + time + ": " + message.content)
  		texts.appendChild(listItem)
  		var others = document.getElementById("others")
 		others.appendChild(texts)
 }
}
//The sendMessage('text') function will send a message from you to the database.
function send() {
	var val = document.getElementById("input").value;
	sendMessage(val);
	var mytexts = document.createElement("li")
  	var mylistItem = document.createTextNode(val)
  	mytexts.appendChild(mylistItem)
	var mine = document.getElementById("mine")
 	mine.appendChild(mytexts)
}

