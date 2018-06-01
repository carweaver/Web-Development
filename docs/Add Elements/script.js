var button = document.getElementById("addElement")
button.addEventListener("click", function(e){
  console.log(e)
  addElement();
});
document.getElementById("inputElement").addEventListener("keypress",function(e){
  console.log(e.key);
  if (e.key == "Enter") {
     addElement();
  }
})

function addElement() {
  console.log("Button Pressed");
  var yah = document.getElementById("inputElement").value;
  var list = document.createElement("li")
  var listItem = document.createTextNode(yah)
  list.appendChild(listItem)
  var where = document.getElementById("output")
  where.appendChild(list)
  if (yah[0] == "A",yah[0] == "E",yah[0] == "I",yah[0] == "O",yah[0] == "U",yah[0] == "a",yah[0] == "e",yah[0] == "i",yah[0] == "o",yah[0] == "u") {
  	console.log("yah")
  	list.setAttribute("class","vowel")
  }
}