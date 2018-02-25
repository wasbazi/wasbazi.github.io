//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    console.log("SPECIAL THANKS:", '\n',
                "A special thanks goes to a few people who have created free resources:", '\n',
                "http://web.archive.org/web/20170929200701/http://startbootstrap.com/ for creating and allowing use of the grayscale theme", '\n',
                "as well as http://subtlepatterns.com for the textured paper pattern")
});


/*
     FILE ARCHIVED ON 20:07:01 Sep 29, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:29:53 Feb 14, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/