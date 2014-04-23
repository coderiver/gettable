$(document).ready(function() {

    $(document).click(function(){
        window_el.fadeOut("fast");
        popup.fadeOut("fast");
        overlay.fadeOut("fast");
        $(".js-popup-link").removeClass("is-active");
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
            var id_active = $(this).find(".is-active").attr("href");
        	$("."+id_active).show();
        	//$(this).parents(".js-tab-group").find(".js-tab1").show();
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

    // if ($('.js-scroll-pane').length) {
    //     $('.js-scroll-pane').jScrollPane({
    //         autoReinitialise: true
    //     });
    // }
      

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

            // set max sidebar height
            if (height >= $(window).height()) {
                sidebar.find(".sidebar__wrap").css({
                    maxHeight: $(window).height()-80
                });
                sidebar_in.css({
                    maxHeight: $(window).height()-36
                });
            }
            if (height < $(window).height()) {
                sidebar.find(".sidebar__wrap").css({
                    maxHeight: 'auto'
                });
                sidebar_in.css({
                    maxHeight: 'auto'
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

    var card = $(".js-card");
    var card__in = $(".js-card__in");

    function fixedCardInfo() {
        
        var top = card.offset().top;
        var scroll_top = $("body").scrollTop();
        var height = card__in.outerHeight();

        if (scroll_top >= top) {
            $("body").addClass("is-fixed-sidebar");

            // set max sidebar height
            if (height >= $(window).height()) {
                card.find(".scroll-pane").css({
                    maxHeight: $(window).height()-80
                });
                card__in.css({
                    maxHeight: $(window).height()-36
                });
            }
            if (height < $(window).height()) {
                card.find(".scroll-pane").css({
                    maxHeight: 'auto'
                });
                card__in.css({
                    maxHeight: 'auto'
                });
            }

            // remove fixing
            var footer_bottom = $(".page-footer").offset().top; 
            var sidebar_bottom = $(".sidebar-target").offset().top+height; 
            console.log('target'+sidebar_bottom);
            console.log('item'+footer_bottom);

            if (sidebar_bottom >= footer_bottom) {
                $("body").addClass("is-abs-sidebar");
                $("body").removeClass("is-fixed-sidebar");
            }
            else if (sidebar_bottom < footer_bottom) {
                $("body").removeClass("is-abs-sidebar");
                $("body").addClass("is-fixed-sidebar");
            }
        }
        else {
            $("body").removeClass("is-fixed-sidebar");
        }
    }

    if (card.length) {
        fixedCardInfo();
    }  

    $(window).scroll(function(){
        if (sidebar.length) {
            fixedSidebar();
        }  
        if (card.length) {
            fixedCardInfo();
        }  
        windowPos();
    }); 
    $(window).resize(function(){
        if (sidebar.length) {
            fixedSidebar();
        }  
    }); 

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
        $(this).parents(".window").fadeOut("fast").removeAttr("data-id");
        $(".js-window-key").removeClass("js-active");
    });
    window_el.on("click", function(event){
        event.stopPropagation()
    })
    function windowPos() {
        if ($("body").find(".js-window-key.js-active").length) {
            var key = $("body").find(".js-window-key.js-active");
            var key_id = key.attr("href");
            var height = $("body").find("."+key_id).outerHeight();
            var top = key.offset().top - (height/2) +10;
            $("body").find("."+key_id).css({
                top: top
            })
        }
    }

    $(".js-window-key").on("click", function(event){
        window_el.hide();
        $(".js-window-key").removeClass("js-active");
        $(this).addClass("js-active");
        var el = $(this).attr("href");
        var height = $("."+el).outerHeight();
        var top = $(this).offset().top-(height/2)+($(this).outerHeight()/2);
        var left = $(this).offset().left+$(this).outerWidth();
        $("."+el).fadeIn("fast");
        $("."+el).attr("data-id",el);
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
    var overlay = $(".js-overlay");
    $(".js-popup-link").on("click", function(event){
        $(".window_bottom").fadeOut();
        var popup = $(this).attr("href");
        $(".js-popup-link").removeClass("is-active");
        $(this).addClass("is-active");
        $("."+popup).fadeIn();
        $(overlay).fadeIn();
        return false;
        event.stopPropagation()
    })
    popup.on("click", function(event){
        event.stopPropagation()
    })
    $(".js-popup-close").on("click", function(){
       popup.fadeOut("fast");
       overlay .fadeOut("fast");
       $(".window_bottom").fadeOut();
       $(".js-popup-link").removeClass("is-active");
    })


    $('.scroll-pane').bind('mousewheel', function(e) {
        if(e.originalEvent.wheelDelta < 0 && 
        ($(this).scrollTop() + $(this).height()) >= this.scrollHeight) return false;
    });

    $(".js-load-more").on("click", function(){
       $(this).addClass("is-active");
       return false;
    })
    

});      