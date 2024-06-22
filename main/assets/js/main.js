$(document).ready(function () {
    var menuControl = $('.menu-top')
    var closeMenu = $('.close-icon');
    $('.icon-handle-menu').on('click', function () {
        $('.menu-top').toggleClass('active');
        $('.close-layout').toggleClass('active');
    });

    menuControl.css({ left: '-60%' });
    $('.icon-handle-menu').on('click', function () {
        menuControl.show('fast');
        $('.menu-top').animate({
            left: '0px',
            display: 'block'
        });
    });

    $('.close-icon, .close-layout').on('click', function () {
        menuControl.animate({ left: '-60%' });
        $('.close-layout').removeClass('active');
    });

    // Show text more
    var moreText = $('#text_more');
    var readLess = $('.readless_text');
    var readMore = $('.readmore_text');

    readMore.on('click', function () {
        moreText.show();
        $(this).hide();
    })

    readLess.on('click', function () {
        moreText.hide();
        readMore.show();
    });
});