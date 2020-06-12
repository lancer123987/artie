$(document).ready(function() {
    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > 80) {
            $('header').addClass('active');
        }
        if (scrollVal <= 80) {
            $('header').removeClass('active');
        } else {}
    });
    $('.bt_click').mousedown(function() {
        $(this).addClass('active');
    });
    $('.bt_click').mouseup(function() {
        $(this).removeClass('active');
    });
});