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

$('.buttons').find('a').on('click', function(e) {
    e.preventDefault();
});

$('.searchBtn').on('click', function(e) {
    e.preventDefault();
});

// Navbar Open CLosed

$('.navOpen').on('click', function () {
    $('.navOpen').hide(500);
    $('.navClose').show(500);
});

function Closed  () {
    $('.navClose').hide(500);
    $('.navOpen').show(500);
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


// Navigation

// Tab

function openTabNav() {
    document.getElementById("myTabSidenav").style.width = "300px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeTabNav() {
    document.getElementById("myTabSidenav").style.width = "0";
    // document.body.style.backgroundColor = "white";
}



// Mobile
function openMobNav() {
    document.getElementById("myMobSidenav").style.width = "100%";
}

function closeMobNav() {
    document.getElementById("myMobSidenav").style.width = "0";
}




// Section Change

$('.deactiveHotel').on('click', function () {
    $('.flights').fadeToggle('slow', function() {
        $('.hotels').fadeIn('slow');
    });
});

$('.deactiveFlights').on('click', function () {
    $('.hotels').fadeToggle('slow', function() {
        $('.flights').fadeIn('slow');
    });
});

