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
    
    
});