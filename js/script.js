$(document).ready(function(){
    $('.portfolio_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        swipe: false
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
});