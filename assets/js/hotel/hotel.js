'use strict';

var loc =  ''; 
var checkIn = ''; 
var checkOut = '';
var guests = '';

function checkHotelInfo () {
    loc = $('#destination').val();
    checkIn = $('.checkInId').val();
    checkOut = $('#checkOut').val();
    guests = $('#guests').val();
};





$('.hotelBtn').on('click', function () {
    checkHotelInfo();
    
    // console.log(`Location ${loc}, check in: ${checkIn}, check out ${checkOut}, Guests ${guests}`)

    if (loc !== '' && checkIn !== '' && checkOut !== '' && guests !== '') {
        console.log('click');
        resultSearch();
        var settings = {

            "async": true,
            "crossDomain": true,
            "url": `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${loc}`,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5bbf7e83aamshe586a065f7fe016p1a7671jsn0c05b2cc2ccd",
                "x-rapidapi-host": "booking-com.p.rapidapi.com"
            }
        };
        
        $.ajax(settings).done(function (response) {
            var dests = response[0].dest_id;
            
            
        
        
        
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": `https://booking-com.p.rapidapi.com/v1/hotels/search?units=metric&order_by=popularity&checkin_date=${checkIn}&filter_by_currency=AED&adults_number=${guests}&checkout_date=${checkOut}&dest_id=${dests}&locale=en-gb&dest_type=city&room_number=1&children_ages=5%2C0&page_number=0&categories_filter_ids=facility%3A%3A107%2Cfree_cancellation%3A%3A1&children_number=2`,
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "5bbf7e83aamshe586a065f7fe016p1a7671jsn0c05b2cc2ccd",
                    "x-rapidapi-host": "booking-com.p.rapidapi.com"
                }
            };
            
            
            $.ajax(settings).done(function (answer) {
                // console.log(answer);
                var results = answer.result
                console.log(results.length)
                var hotelLimit = 4;
                if (hotelLimit > results.length) {
                    hotelLimit = results.length;
                }
                $('.hotelResBody').empty();
                for (let i = 0 ; i < hotelLimit; i ++) { //results.length
                    var hotelWebSite = results[i].url;
                    var hotelName = results[i].hotel_name_trans;
                    var priceCurrency = results[i].price_breakdown.currency;
                    var hotelPrice = results[i].composite_price_breakdown.net_amount.value.toFixed(2);
                    var hotelAdressDistrict = results[i].district;
                    var hotelAdress = results[i].address;
        
        
                    // console.log(hotelWebSite, hotelName, priceCurrency, hotelPrice, hotelAdressDistrict, hotelAdress)
        
                    
                    
                    $('.hotelResBody').append(`<div class="ticket">
                    <div class="ticImg">
                        <img src="./assets/img/unnamed.png" width="100px" height="100px" alt="" class="ticketImg">
                    </div>
                    <!-- /.ticImg -->
                    <div class="ticText">
                    <div class="hotelResText">
                                        <span class="hotelResName">
                                        ${hotelName}
                                        </span>
                        </div>
                        <div class="departGroup">
                            <div>
                                <span class="fromTic">${hotelAdress}</span>
                            </div>

                        </div>
                        <!-- /.departGroup -->
                        
                    </div>
                    <div class="hotelResLink">
                                        <a href="${hotelWebSite}" target="_blank">Reserve</a>
                                    </div>
                        <!-- /.flightTicGroup -->
                    <!-- /.ticText -->
                </div>
                <!-- /.ticket -->`)
        
                }
            });
        });
    };

});
















//console.log(destination);

