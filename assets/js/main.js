'use strict';

// Deactive Links
$('.activeNav').on('click', function(e) {
    e.preventDefault();
});

$('.activeButton').on('click', function(e) {
    e.preventDefault();
});

$('.signInSVG').find('a').on('click', function(e) {
    e.preventDefault();
});

$('.logInBtn').on('click', function(e) {
    e.preventDefault();
});

$('.mobileNav').on('click', function(e) {
    e.preventDefault();
});

// Navbar Open CLosed

$('.navOpen').on('click', function () {
    $('.navOpen').hide(500);
    $('.navClose').show(500);
    $('.navigationMob').show(500)
});

function Closed  () {
    $('.navClose').hide(500);
    $('.navOpen').show(500);
    $('.navigationMob').hide(500)
}

$('.navClose').on('click', function() {
    Closed();
});


$('.pupup').on('click', function () {
    $('.pupupSection').hide(300);

});

$('.logInBtn').on('click', function() {
    Closed();
    $('.pupupSection').show(300);
});

$('.logInPage').on('click', function(event) {
    event.stopPropagation();
});