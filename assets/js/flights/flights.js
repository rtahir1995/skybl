$('#passengerFlights').on('input', function() {
    console.log('tahir')
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});