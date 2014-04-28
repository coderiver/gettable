head.ready(document, function () {
	$('.js-fotorama').on('fotorama:ready', function (e, fotorama) {
	  	$(".js-fotorama").addClass("is-visible");  
	});
});