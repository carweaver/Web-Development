var s = "Packer Collegiate Institute"
console.log(s.length)

var s2 = "Hello World"
console.log(s2.charAt(1))

var date = new Date();
console.log(date);
document.getElementById("date").innerHTML = date;

var grad = new Date('2020,06,14')
document.getElementById("grad").innerHTML = grad;

var difference = grad.getTime() - date.getTime();
difference = (difference/31556900000);
document.getElementById('difference').innerHTML = difference;