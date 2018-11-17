$(document).ready(function(){
    $('.navbar, .links').css('visibility','visible').hide();
    
    if ($(window).width() < 600) {
    //alert('Less than 1280');
        $('.links').fadeIn(3000);
        var imagesSmall = ['seeds.png'];
        var randomNumberS = Math.floor(Math.random() * imagesSmall.length);
        var bgImgS = 'url(images/' + imagesSmall[randomNumberS] + ')';
        $('body').css({'background':bgImgS+' no-repeat center center fixed', 'background-size':'cover', 'background-attachment': 'scroll'});
    }
    else if($(window).width() < 768){
        $('.links').fadeIn(3000);
        var imagesLarge = ['healthdrinks.jpg', 'MowieKay_HOMEPAGE.jpg', '2_MowieKay_HOMEPAGE.jpg'];
        var randomNumberL = Math.floor(Math.random() * imagesLarge.length);
        var bgImgL = 'url(images/' + imagesLarge[randomNumberL] + ')';

        $('body').css({'background':bgImgL+' no-repeat center center fixed', 'background-size':'cover' });
    }
    else {
        var imagesLarge = ['healthdrinks.jpg', 'MowieKay_HOMEPAGE.jpg', '2_MowieKay_HOMEPAGE.jpg'];
        var randomNumberL = Math.floor(Math.random() * imagesLarge.length);
        var bgImgL = 'url(images/' + imagesLarge[randomNumberL] + ')';
        
        $('body').css({'background':bgImgL+' no-repeat center center fixed', 'background-size':'cover' });
    }

    $('html, body').css({'visibility':'visible' });
    $('.navbar').fadeIn(3000);
});

