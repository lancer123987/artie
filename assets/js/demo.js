$(document).ready(function() {
    //選單背景
    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > 80) {
            $('header').addClass('active');
        }
        if (scrollVal <= 80) {
            $('header').removeClass('active');
        } else {}
    });
    //按鈕效果
    $('.bt_click').mousedown(function() {
        $(this).addClass('active');
    });
    $('.bt_click').mouseup(function() {
        $(this).removeClass('active');
    });
    //回到頂部
    $('.goToTop').click(function() {
        var target = $(this).attr('href');
        var position = $("html, body").offset().top;
        var duration = 1000;
        $("html, body").stop().animate({
            scrollTop: position
        }, duration);
    });
});