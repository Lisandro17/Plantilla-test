$(document).ready(function () {
    $('.arriba').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        })
    })


    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.arriba').slideDown();
        } else {
            $('.arriba').slideUp();
        }
    })
})