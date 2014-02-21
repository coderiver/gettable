$(document).ready(function() {

	$(".js-slider").on('cycle-before', function() {
		$(this).find(".is-inactive").removeClass("is-inactive");
		$(this).find(".is-active").addClass("is-inactive");
	});
	$(".js-place-slider .cycle-slide-active").next().next().addClass("is-current");
	$(".js-place-slider").on('cycle-next', function() {
		$(this).find(".is-current").removeClass("is-current");
		$(this).find(".cycle-slide-active").next().next().next().addClass("is-current");
		$(this).find(".is-active").addClass("is-inactive");
	});
	$(".js-place-slider").on('cycle-prev', function() {
		$(this).find(".is-current").removeClass("is-current");
		$(this).find(".cycle-slide-active").next().addClass("is-current");
		$(this).find(".is-active").addClass("is-inactive");
	});



});