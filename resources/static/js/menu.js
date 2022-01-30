$(function() {
	$("nav li.menu ul").slideToggle(0);
	$("nav li.menu").click(function (event){
		$(this).children("ul").slideToggle();
		event.stopPropagation()
	}
	)
});
