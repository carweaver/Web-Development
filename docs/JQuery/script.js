var $head = $("#header")
console.log($head)
$head.on("click", function(){
	$head.fadeOut(500);
})

var $li = $("li")
console.log($li)
$li.on("keypress", function(){
	$(this).animate({
		fontSize:1000
	}, 300, function(){
		$(this).animate({
		fontSize:16
	}, 300)
	});
})

$li.addClass('item')

var $p = $('p')
$p.on("click", function(){
	$(this).fadeOut(500);
})