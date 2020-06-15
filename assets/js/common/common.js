$(document).ready(function() {
    //選單背景
    function scrollHeaderBg() {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > 80) {
            $('header').addClass('active');
        }
        if (scrollVal <= 80) {
            $('header').removeClass('active');
        } else {}
    }
    scrollHeaderBg();
    $(window).scroll(function() {
        scrollHeaderBg();
    });
    //按鈕效果
    $('.bt_click').mousedown(function() {
        $(this).addClass('active');
    });
    $('.bt_click').mouseup(function() {
        $(this).removeClass('active');
    });
    //news切換
    $('.tab-content .news').hide();
    $('#all').show();
    $('.newsList a').click(function() {
        $('.newsList a').removeClass('active');
        $(this).addClass('active');
        var target = $(this).attr('href');
        $('.tab-content .news').hide();
        $(target).show();
        var linkVal = target.split("#", 2);
        $(".newsListSelect").val(linkVal[1]);
    });
    $(".newsListSelect").change(function() {
        var listVal = $(this).val();
        var target = '#' + listVal;
        $('.tab-content .news').hide();
        $(target).show();
        $(".newsList a").each(function() {
            var link = $(this).attr('href');
            if (link == target) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
    //回到頂部
    $('.goToTop').click(function() {
        var position = $("html, body").offset().top;
        var duration = 1000;
        $("html, body").stop().animate({
            scrollTop: position
        }, duration);
    });
});