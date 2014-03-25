$(document).ready(function() {

    $(document).click(function(){
        window_el.fadeOut("fast");
        popup.fadeOut("fast");
    });

    var window_el = $(".js-window");

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
        $('.js-scroll-pane').jScrollPane({
            autoReinitialise: true
        });
    }
      

    $(".js-item-key").on("click",function(){
        $(this).parents(".item").addClass("is-active");
        return false;
    }); 
    $(".js-hide-info").on("click",function(){
        $(this).parents(".item").removeClass("is-active");
        return false;
    });

    var sidebar = $(".js-sidebar");
    var sidebar_in = sidebar.find(".sidebar__in");
    function fixedSidebar() {

        var top = sidebar.offset().top-18;
        var scroll_top = $("body").scrollTop();
        var height = sidebar_in.outerHeight();

        if (scroll_top >= top) {
            $("body").addClass("is-fixed-sidebar");

            // set max sidebar heibht
            if (height >= $(window).height()) {
                sidebar.find(".sidebar__wrap").css({
                    maxHeight: $(window).height()-80
                });
                sidebar_in.css({
                    maxHeight: $(window).height()-36
                });
            }

            // remove fixing
            if ($(".js-item").length) {
                var item_bottom = $(".js-item").offset().top + $(".js-item").outerHeight(); 
            }
            
            var sidebar_bottom = $(".sidebar-target").offset().top+height; 

            if (sidebar_bottom >= item_bottom) {
                $("body").addClass("is-abs-sidebar");
                $("body").removeClass("is-fixed-sidebar");
            }
            else if (sidebar_bottom < item_bottom) {
                $("body").removeClass("is-abs-sidebar");
                $("body").addClass("is-fixed-sidebar");
            }


        }
        else {
            $("body").removeClass("is-fixed-sidebar");
        }
    }
    if (sidebar.length) {
        fixedSidebar();
    }
    $(window).scroll(function(){
        if (sidebar.length) {
            fixedSidebar();
        }  
        //$('.window').fadeOut("fast");
    }); 
    //  $("html").scroll(function(){
    //     // if (sidebar.length) {
    //     //     fixedSidebar();
    //     // }  
    //     $('.window').fadeOut("fast");
    // }); 

    $("body").prepend( '<div class="tip js-tip"><div class="tip__in"></div></div>' );
    var tooltip = $(".js-tip");
    $(".js-tip-key").hover(
        
        function(){
            var left = $(this).offset().left;
            var top = $(this).offset().top;
            var tooltip_html = $(this).attr("data-title");
            tooltip.find(".tip__in").html(tooltip_html);
            var tooltip_height = tooltip.outerHeight();
            tooltip.fadeIn("fast");
            tooltip.css({
                left: left+60,
                top: top-(tooltip_height/2)+10,
            });
            
        },
        function() {
            tooltip.hide();
        }
    );
    tooltip.hover(
        function(){
            tooltip.show();
        },
        function() {
            tooltip.hide(); 
        }
    );

    $(".js-close-window").on("click", function(){
        $(this).parents(".window").fadeOut("fast");
    });
    window_el.on("click", function(event){
        event.stopPropagation()
    })
    $(".js-window-key").on("click", function(event){
        window_el.hide();
        var el = $(this).attr("href");
        var height = $("."+el).outerHeight();
        var top = $(this).offset().top-(height/2)+($(this).outerHeight()/2);
        var left = $(this).offset().left+$(this).outerWidth();
        $("."+el).fadeIn("fast");
        $("."+el).css({
            top: top,
            left: left
        });
        event.stopPropagation();
        return false;
        
    });

    function mapHeight() {
        var height = $(window).height()-$(".page-header").outerHeight();
        $(".js-map-height").css({
            height: height
        });
    }
    mapHeight();
    $(window).resize(function(){
         mapHeight();
    });

    var popup = $(".popup");
    $(".js-popup-link").on("click", function(event){
        var popup = $(this).attr("href");
        $("."+popup).fadeIn();
        return false;
        event.stopPropagation()
    })
    popup.on("click", function(event){
        event.stopPropagation()
    })
    $(".js-popup-close").on("click", function(){
       popup.fadeOut("fast");
    })

});  