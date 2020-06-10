$(document).ready(function() {
    $('.bt_click').mousedown(function() {
        $(this).addClass('active');
    });
    $('.bt_click').mouseup(function() {
        $(this).removeClass('active');
    });
});