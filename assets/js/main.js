'use strict';

$('.activeNav').on('click', function(e) {
    e.preventDefault();
});

$('.activeButton').on('click', function(e) {
    e.preventDefault();
});

$('.signInSVG').find('a').on('click', function(e) {
    e.preventDefault();
});


$('.mobileS3').on('click', function () {
    
    $('.navigationMob').animate({
        width: 0,
    }, 500, function() {
        $(".navigationMob").css({
            display: 'none'
        }).animate({
            opacity: 1
        }, 1000);

    });
    
});