$( document ).ready(function() {
 
    document.onresize = function() {myFunction()};

    function myFunction() {
        $("intro-header").height(window.height()-$("navbar").height);
        $("intro-header").width($("document").width());
    }
        var last_known_scroll_position = 0;
        var ticking = false;

        function doSomething(scroll_pos) {
          // do something with the scroll position
        }

        $("#przycisk").click(function() {
            $('html, body').animate({
            scrollTop: $("#info").offset().top
            }, 2000);
            
        });

        window.addEventListener('scroll', function(e) {
          last_known_scroll_position = window.scrollY;
          if (!ticking) {
            window.requestAnimationFrame(function() {
              doSomething(last_known_scroll_position);
              ticking = false;
            });
          }
          ticking = true;
        });
        
     $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.content-section-a').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
      
    
});
