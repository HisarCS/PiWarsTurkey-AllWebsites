function countDown(){
    var today = new Date();
    var eventDate = new Date("March 23,2019 08:40:00");

    var currentTime = today.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var sec = Math.floor(remTime/1000);
    var min = Math.floor(sec/60);
    var hrs = Math.floor(min/60);
    var days = Math.floor(hrs/24);

    hrs = hrs%24;
    min%=60;
    sec%=60;
    hrs = (hrs<10) ? "0"+hrs : hrs;
    min = (min<10) ? "0"+min : min;
    sec = (sec<10) ? "0"+sec : sec;
    document.getElementById("days").innerHTML =days ;
    document.getElementById("hrs").innerHTML =hrs ;
    document.getElementById("mins").innerHTML =min ;
    document.getElementById("secs").innerHTML =sec ;

    setTimeout(countDown,1000);
}
jQuery(document).ready(function($) {
    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });


    $('.toggle-menu').click(function(){
        $('.menu-first').toggleClass('show');
        // $('.menu-first').slideToggle();
    });

    $('.menu-first li a').click(function(){
      $('.menu-first').removeClass('show');
    });


    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
        console.log("HERE")
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    /*-----------------------------------
     * NAVBAR CLOSE ON CLICK
     *-----------------------------------*/

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    onScroll();
    $(document).on("scroll", onScroll);
});
function remove_all(){
    $('#navbarNav a').each(function () {
        $(this).removeClass("active");
    });
    }
    function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbarNav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos+5 && refElement.position().top + refElement.height() >= scrollPos-5) {
            remove_all();
            currLink.addClass("active");
        }
    });
}