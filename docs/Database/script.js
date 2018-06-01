var config = {
apiKey: "AIzaSyCItJk-gZJEKrc1_EeojSu34aYjjzj9u1k",
authDomain: "list-a71e9.firebaseapp.com",
databaseURL: "https://list-a71e9.firebaseio.com",
projectId: "list-a71e9",
storageBucket: "list-a71e9.appspot.com",
messagingSenderId: "535106653853"
};
firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(result);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

var button = document.getElementById("addElement")
button.addEventListener("click", function(e){
  console.log(e)
  addElement();
});

function addElement() {
	firebase.database().ref("Carter").push("lit")
	firebase.database().ref("Carter").once("value",function(snapshot){
		var yah = snapshot.val();
		console.log(snapshot.val())
		})
  console.log("Button Pressed");
  var list = document.createElement("li")
  var listItem = document.createTextNode(yah)
  list.appendChild(listItem)
  var where = document.getElementById("output")
  where.appendChild(list)
  }	
