
var day = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();




var elemDepart = document.querySelector('input[name="departFlight"]');
var datepicker = new Datepicker(elemDepart, {
        autohide: true,
        calendarWeeks: true,
        format: 'yyyy-mm-dd',
        minDate: `${year}-${month}-${day}`,
        orientation: 'bottom'
});



var elemCheckIn = document.getElementById('checkIn');
var dateRangePicker = new DateRangePicker(elemCheckIn, {
        autohide: true,
        calendarWeeks: true,
        format: 'yyyy-mm-dd',
        minDate: `${year}-${month}-${day}`,
        orientation: 'bottom'
});

var elemDepartReturn = document.getElementById('depret');
var dateRangePicker = new DateRangePicker(elemDepartReturn, {
        autohide: true,
        calendarWeeks: true,
        format: 'yyyy-mm-dd',
        minDate: `${year}-${month}-${day}`,
        orientation: 'bottom'
});


