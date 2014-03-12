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

  	function tab() {
       $(".js-tab").each(function(){
        	var tab_link = $(this).find("a");
        	var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
        	tab_cont.hide();
        	tab_link.first().addClass("is-active");
        	$(this).parents(".js-tab-group").find(".js-tab1").show();
        	tab_link.on("click", function() {
            	var index = $(this).attr("href");
            	tab_link.removeClass("is-active");
            	$(this).addClass("is-active");
            	tab_cont.hide();
            	$(this).parents(".js-tab-group").find("."+index).show();
            	return false;
          	});
       });
  	}
  	tab();

    if ($(".js-input-tel").length) {
        $(".js-input-tel").mask("(999) 999-99-99");
    }
    
    //$(".js-input-pass").mask("");

    $(".js-login-link").on("click", function(){
        $(".js-login-box").slideToggle("fast");
        $(this).toggleClass("is-active");
    });

    $(".js-close-login").on("click", function(){
        $(".js-login-box").slideUp("fast");
        $(".js-login-link").removeClass("is-active"); 
    });
    $(".js-clear-input").on("click", function(){
        $(this).fadeOut("fast");
        $(this).parent().find("input").val("");
    });

    $(".js-item-action").hover(
        function() {
            $(this).parents(".item").find(".item__action-info").fadeIn();
        }, function() {
            $(this).parents(".item").find(".item__action-info").fadeOut();
        }
    );

    if ($('.js-scroll-pane').length) {
        $('.js-scroll-pane').jScrollPane();
    }
      

    $(".js-item-key").on("click",function(){
        $(this).parents(".item").addClass("is-active");
        return false;
    }); 
    $(".js-hide-info").on("click",function(){
        $(this).parents(".item").removeClass("is-active");
        return false;
    });

}); 