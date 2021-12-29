$(document).ready(function(){
    $('.portfolio_slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        swipe: false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                swipe: true,
                arrows: false,
              }
            }
        ]
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 200);
        return false;
    });
    $('.burger').on('click', function(){
        $('.burger').toggleClass('burger_active');
        // $('body').css('position', 'fixed');
        // $('body').css('width', '100%');
        // $('body').css('height', '100%');
        $('.overlay').toggleClass('overlay_active');
    });
    $('.overlay_menu_item').on('click', function(e) {
        $('.overlay').removeClass('overlay_active');
        $('.burger').removeClass('burger_active');
        $('body').css('position', 'relative');
    });
});