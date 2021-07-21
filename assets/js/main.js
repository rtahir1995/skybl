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
        backgroundPositionX: '0',
    }, 500, function() {
        $(".navigationMob").css({
            display: 'none'
        }).animate({
            opacity: 1
        }, 500);
    });

    $('.mobileNav').find('svg').animate({
        // height: '30px',
    }, 1000, function() {
        $(".mobileNav").css({
            display: 'flex'
        }).animate({
            opacity: 1
        }, 1000);
    });
    
});


$('.mobileNav').on('click', function () {
    
    $('.navigationMob').animate({
        // width: 0,
    }, 500, function() {
        $(".navigationMob").css({
            display: 'block'
        }).animate({
            opacity: 1
        }, 500);
    });

    $('.mobileNav').find('svg').animate({
        // height: '0px',
    }, 500, function() {
        $(".mobileNav").css({
            display: 'none'
        }).animate({
            opacity: 1
        }, 500);
    });
    
});


$('.pupup').on('click', function () {
    $('.pupupSection').css({
        display: 'none'
    });
});

$('.signUpButton').on('click', function() {
    $('.pupupSection').css({
        display: 'block'
    });
});

$('.logInPage').on('click', function(event) {
    event.stopPropagation();
});
