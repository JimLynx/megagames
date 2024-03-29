/**
 * Table of contents
 * -----------------------------------
 * 1.0 jQuery window load function
 * 1.1 Preloader
 ==================
 * 2.0 Document ready function
 * 2.1 Navbar animation on scroll
 * 2.2 One page navigation
 * 2.3 Animated progress bar
 * 2.4 Clients carousel
 * 2.5 Portfolio filter
 * 2.6 Counter JS
 * 2.7 Testimonial carousel
 * 2.8 Function for email address validation
 * 2.9 Contact form
 * 2.10 WOW JS
 ==================
 *
 */

(function ($) {
    "use strict"; // this function is executed in strict mode 

    /* =================================
       1.0 jQuery window load function
    =================================== */
    $(window).load(function () {

        /******************** 1.1 Preloader ********************/
        // will first fade out the loading animation
        $(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
        $(".preloader").delay(1000).fadeOut("slow");

    });

    /* =================================
       2.0 Document ready function
    =================================== */
    $(document).ready(function () {

        var wn = $(window);

        /******************** 2.1 Navbar animation on scroll ********************/
        function animateNav() {
            var offset = wn.scrollTop(),
                target = $('body').find('.navbar');
            if (offset > 21) {
                target.addClass('nav-sticky');
            } else {
                target.removeClass('nav-sticky');
            }
        }
        animateNav();
        wn.scroll(function () {
            animateNav();
        });

        /******************** 2.2 One page navigation ********************/
        $('.navbar-nav-op').onePageNav({
            currentClass: 'active',
            scrollOffset: 74,
        });

        $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });

        /******************** 2.3 Animated progress bar ********************/

        $('.progress_bar').waypoint(function () {
            $('.progress').each(function () {
                $('.progress .progress-bar').progressbar({
                    transition_delay: 1000
                });
            });
        }, {
            offset: '100%',
            triggerOnce: true
        });


        /******************** 2.4 Clients carousel ********************/
        $(".client-carousel").owlCarousel({
            itemsCustom: [
                [0, 2],
                [600, 2],
                [720, 3],
                [1000, 5]
            ],
            slideSpeed: 1000,
            pagination: true,
            autoPlay: true,
        });

        /******************** 2.6 Counter JS ********************/
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });

        /******************** 2.7 Testimonial carousel ********************/
        $(".testimonial-carousel").owlCarousel({
            itemsCustom: [
                [0, 1],
                [600, 1],
                [720, 2],
                [1000, 3]
            ],
            slideSpeed: 1000,
            pagination: true,
            autoPlay: true,
        });

        /******************** 2.7 Games carousel ********************/
        $(".games-carousel").owlCarousel({
            itemsCustom: [
                [0, 1],
                [600, 1],
                [720, 2],
                [1000, 3]
            ],
            slideSpeed: 1000,
            pagination: true,
            autoPlay: true,
        });

        /******************** 2.8 Function for email address validation ********************/
        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(emailAddress);
        };

        /******************** 2.10 WOW JS ********************/
        var wow = new WOW({
            animateClass: 'animated',
            offset: 50,
            mobile: true
        });
        wow.init();

    });

})(jQuery);