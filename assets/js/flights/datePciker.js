// Date Picker

// Only Depart

var day = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();


// $(function() {
//     $('input[name="daterange"]').daterangepicker({
//         opens: 'center',
//         autoApply: true,
//         minDate:  `${month}/${day}/${year}`,
//     }, function(start, end, label) {
//         console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
//     });
// });



$ (function() {
    $('input[name="departFlights"]').daterangepicker({
        autoUpdateInput: true,
        singleDatePicker: true,
        opens: 'center',
        autoApply: true,
        minDate:  `${month}/${day}/${year}`,
    }, function(start, end, label) {
        // console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});


$ (function() {
    $('input[name="returnFlights"]').daterangepicker({
        autoUpdateInput: true,
        opens: 'center',
        autoApply: true,
        minDate:  `${month}/${day}/${year}`,
    }, function(start, end, label) {
        // console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});