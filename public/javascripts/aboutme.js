$(document).ready(function(){


    var images = ['subtle_grunge.png', 'subtle_white_feathers.png', 'egg_shell.png', 'ep_naturalwhite.png', 'extra_clean_paper.png', 'linedpaper.png', 'natural_paper.png', 'wall4.png'];
    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(images/backgrounds/' + images[randomNumber] + ')';
    console.log(bgImg);

    $('body').css({'background-image':bgImg });
    $('body').css({'visibility':'visible' });
});
