'use strict';

$('#passengerFlights').on('input', function() {
    console.log('tahir')
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});


var d = []

$.ajax({
    url: '/assets/js/flights/airports.json',
    method: 'GET',
    // dataType: 'json'
}).done(function (response) {
    
    // Name of Airports
    var a = response;
    // var bname = '';
    var bcity = '';
    var bcode = '';
    var ball = '';
    for (let i = 0; i < a.length; i++) {
        // bname = a[i].name;
        bcity = a[i].state;
        bcode = a[i].code;
        ball = `${bcity} (${bcode})`

        d.push(ball);

    }

}).catch(function(error) {
    console.log('error')
});


$(document).ready(function () {
    var country_list = d;


    $("#fromFlights").autocompleter(country_list, {});
    $("#toFlights").autocompleter(country_list, {});
});
    
    var fromVal = '';
    var toflVal = '';

$('#toFlights').focusout(function() {
    let x = $('#toFlights').val();
    let z = x.split('(');
    let g = z[1].split(')');
    toflVal = g[0];
})

$('#fromFlights').focusout(function() {
    let x = $('#fromFlights').val();
    let z = x.split('(');
    let g = z[1].split(')');
    fromVal = g[0];
console.log(fromVal)
})

