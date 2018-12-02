$(document).ready(function () {

    var images = ['subtle_grunge.png', 'subtle_white_feathers.png', 'ep_naturalwhite.png', 'extra_clean_paper.png', 'natural_paper.png', 'wall4.png'];
    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(images/backgrounds/' + images[randomNumber] + ')';

    $('body').css({
        'background-image': bgImg
    });

    var offset = 220;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });

    $('body').css({
        'visibility': 'visible'
    });
});