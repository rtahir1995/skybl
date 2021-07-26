var fromVal = '';
var toflVal = '';


function toFlightCode () {

    let x = $('#toFlight').val();
    let z = x.split('(');
    let g = z[1].split(')');
    toflVal = g[0];

};

function fromFlightCode () {

    let x = $('#fromFlight').val();
    let z = x.split('(');
    let g = z[1].split(')');
    fromVal = g[0];

};



$('#flightBtn').on('click', function() {


    fromFlightCode();
    toFlightCode();


    
    var origin = fromVal; // From Flight
    var destination = toflVal; // To Flight
    var departDate = $('#departFlight').val();  // Depart Date
    var returnDate = '2021-08-12';  // Return Date
    var priceSky = [];  // Ticket price
    var airlineSky = [];  // Airlines Name
    var flightNumbSky = [];  // FLight Number
    var departTimeSky = [];  // Ticket Depart Time
    var returnTimeSky = []; // Ticket Return Time
    var transferSky = []; // Transfer Count

    

    console.log(`Destination: ${destination}, Origin: ${origin}, DepartDate: ${departDate}, ReturnDate: ${returnDate}`)


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/calendar?calendar_type=departure_date&destination=${destination}&origin=${origin}&depart_date=${departDate}&currency=USD&return_date=${returnDate}`,
        "method": "GET",
        "headers": {
            "x-access-token": "930f0773b8a3fcb14e981425518dfd33",
            "x-rapidapi-key": "5bbf7e83aamshe586a065f7fe016p1a7671jsn0c05b2cc2ccd",
            "x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
    
        (function getKeyValueFromJSON() {
            console.log(response)
        
            for (var val in response.data) {

            
                priceSky.push(response.data[val].price)
                airlineSky.push(response.data[val].airline)
                flightNumbSky.push(response.data[val].flight_number)
                departTimeSky.push(response.data[val].departure_at)
                returnTimeSky.push(response.data[val].return_at)
                transferSky.push(response.data[val].transfer)
            

            
            };

    })();
    
    console.log(`Price: ${priceSky}, airline: ${airlineSky}, flight: ${flightNumbSky}`)
    
    
    
        
    });
})
