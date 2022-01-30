$(function() {
	$("nav li.menu").click(function (event){
		$(this).children("ul").slideToggle();
		event.stopPropagation()
	}
	)
});
