$(document).ready(function() {
	console.log("maigat");

	$("ul>li>a").click(function(e) {
		var target = $(this).attr("href");
		e.preventDefault();
		console.log(target);
	    $('html, body').animate({
	        scrollTop: $(target).offset().top
	    }, 1200, 'easeInOutQuint');
	});

	$(".home a").click(function(e) {
		var target = $(this).attr("href");
		e.preventDefault();
		console.log(target);
	    $('html, body').animate({
	        scrollTop: $(target).offset().top
	    }, 1200, 'easeInOutQuint');
	});
});
