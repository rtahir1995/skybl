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
    resultSearch();
    
    // console.log(`Location ${loc}, check in: ${checkIn}, check out ${checkOut}, Guests ${guests}`)

    if (loc !== '' && checkIn !== '' && checkOut !== '' && guests !== '') {
        console.log('click');
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
                for (let i = 0 ; i < 3; i ++) { //results.length
                    var hotelWebSite = results[i].url;
                    var hotelName = results[i].hotel_name_trans;
                    var priceCurrency = results[i].price_breakdown.currency;
                    var hotelPrice = results[i].composite_price_breakdown.net_amount.value.toFixed(2);
                    var hotelAdressDistrict = results[i].district;
                    var hotelAdress = results[i].address;
        
        
                    // console.log(hotelWebSite, hotelName, priceCurrency, hotelPrice, hotelAdressDistrict, hotelAdress)
        
                    
                    
                    $('.hotelResBody').append(`<section class="searchResult">
                            <div class="hotelResBody">
                                <div class="hotelRes">
                                    <div class="hotelResImg">
                                        <svg viewBox="0 0 31.45 42.91">
                                            <path
                                                d="M9.28,19.48a16.05,16.05,0,0,1,.21-3.25A15.81,15.81,0,0,1,20.91,4.06a15.41,15.41,0,0,1,5.44-.45A15.05,15.05,0,0,1,33,5.71a15.64,15.64,0,0,1,7.37,10.13,17.14,17.14,0,0,1,.28,5.74,29.13,29.13,0,0,1-4.37,12.36A47.81,47.81,0,0,1,25.54,46.12c-.56.45-.62.46-1.18,0A47.49,47.49,0,0,1,13.43,33.5,32.06,32.06,0,0,1,9.91,25,20.64,20.64,0,0,1,9.28,19.48Zm3.25-.38A12.26,12.26,0,1,0,24.41,6.84C18.08,7,12.33,12.57,12.53,19.11Z"
                                                transform="translate(-9.28 -3.54)" />
                                            <path
                                                d="M32.31,19.92v6.42H31.06c-.07,0-.14-.07-.19-.13-.54-.53-1.07-1.08-1.62-1.6a.54.54,0,0,0-.34-.14H21.23a.55.55,0,0,0-.34.14c-.58.53-1.15,1.08-1.73,1.61a.54.54,0,0,1-.32.13c-.44,0-.89,0-1.35,0V19.92Z"
                                                transform="translate(-9.28 -3.54)" />
                                            <path
                                                d="M19.19,18.61h-.92a.64.64,0,0,1,0-.09c0-1.05,0-2.1,0-3.15a2.32,2.32,0,0,1,2.39-2.28h8.78a1.4,1.4,0,0,1,.48.11,3.31,3.31,0,0,1,.48.25,2.12,2.12,0,0,1,1.1,1.87c0,1.06,0,2.13,0,3.2a.4.4,0,0,1,0,.08h-1c0-.08,0-.16,0-.24,0-.9,0-1.8,0-2.69a3.12,3.12,0,0,0-.09-.74,1.39,1.39,0,0,0-1.35-1l-7.42,0c-.39,0-.77.05-1.16,0a1.36,1.36,0,0,0-1.23,1.11c0,.43-.06.86-.07,1.29,0,.66,0,1.33,0,2C19.19,18.42,19.19,18.5,19.19,18.61Z"
                                                transform="translate(-9.28 -3.54)" />
                                            <path
                                                d="M20.16,18.61a1.46,1.46,0,0,1,1.37-1.39,9.41,9.41,0,0,1,2.09,0,1.39,1.39,0,0,1,1.11,1c.1.27,0,.35-.24.36l-1.09,0H20.16Z"
                                                transform="translate(-9.28 -3.54)" />
                                            <path
                                                d="M29.79,18.61h-.15l-4,0c-.42,0-.49-.12-.3-.51a1.54,1.54,0,0,1,1.36-.88,11,11,0,0,1,1.73,0A1.46,1.46,0,0,1,29.79,18.61Z"
                                                transform="translate(-9.28 -3.54)" />
                                        </svg>
                                    </div>
                                    <!-- /.hotelResImg -->

                                    <div class="hotelResText">
                                        <span class="hotelResName">
                                            ${hotelName}
                                        </span>
                                        <!-- /.hotelResName -->

                                        <div class="hotelAdressGroup">
                                            <span class="hotelResAdress"> ${hotelAdressDistrict} ${hotelAdress}</span>
                                            <!-- /.hotelResAdress -->
                                            <div class="hotelResBook">
                                                <svg viewBox="0 0 31.01 5.18">
                                                    <path
                                                        d="M6.68,5a1.51,1.51,0,0,1,1-1.19,2.51,2.51,0,0,1,1.19,0,1.45,1.45,0,0,1,.91,1.68A1.49,1.49,0,0,1,8.28,6.74c-.81,0-1.36-.49-1.6-1.48A1.72,1.72,0,0,1,6,6.45a1.62,1.62,0,0,1-1.33.25A1.49,1.49,0,0,1,3.58,5.07a1.47,1.47,0,0,1,1-1.29,1.7,1.7,0,0,1,1.35.12A1.68,1.68,0,0,1,6.68,5Zm2.25.25a.74.74,0,0,0-.62-.78.7.7,0,0,0-.68.72.7.7,0,0,0,.62.74A.66.66,0,0,0,8.93,5.25Zm-3.22,0c0-.45-.25-.75-.63-.75a.71.71,0,0,0-.62.74A.75.75,0,0,0,5.09,6,.69.69,0,0,0,5.71,5.22Z"
                                                        transform="translate(-0.65 -2.56)" />
                                                    <path class="blueSVG"
                                                        d="M27.34,5.24c0-.37,0-.74,0-1.11s.24-.51.54-.31a.57.57,0,0,0,.64,0,1,1,0,0,1,1,.08.39.39,0,0,0,.52,0,1.08,1.08,0,0,1,1.15-.06.84.84,0,0,1,.44.87c0,.52,0,1,0,1.57,0,.18,0,.38-.27.38s-.49,0-.52-.32,0-.69,0-1a1.9,1.9,0,0,0,0-.46c0-.12-.14-.31-.22-.31a.55.55,0,0,0-.42.17,1.31,1.31,0,0,0-.21.59,7,7,0,0,0,0,1c0,.29-.11.42-.4.41s-.47-.06-.45-.39a10.86,10.86,0,0,0,0-1.29.63.63,0,0,0-.27-.47.38.38,0,0,0-.49.34,11.74,11.74,0,0,0-.15,1.34c0,.4-.32.62-.69.46-.07,0-.12-.17-.13-.26s0-.4,0-.61,0-.38,0-.57Z"
                                                        transform="translate(-0.65 -2.56)" />
                                                    <path
                                                        d="M19,6.5a4.32,4.32,0,0,1-.62.1,1.16,1.16,0,0,1-1.25-1.06,2.89,2.89,0,0,1,0-1,1.23,1.23,0,0,1,1.46-.84,1.89,1.89,0,0,0,1,.06c.26,0,.33.06.33.31,0,.82,0,1.64,0,2.47a1.25,1.25,0,0,1-1,1.19,5.67,5.67,0,0,1-1.3-.12c-.1,0-.18-.16-.27-.25.16-.16.05-.55.43-.52.21,0,.42.07.64.09A.49.49,0,0,0,19,6.5Zm.05-1.34c0-.4-.2-.68-.51-.69s-.54.26-.53.69a.54.54,0,1,0,1,0Z"
                                                        transform="translate(-0.65 -2.56)" />
                                                    <path
                                                        d="M3,4.5a2.89,2.89,0,0,1,.39.61A1.17,1.17,0,0,1,2.25,6.67a13,13,0,0,1-1.36,0,.37.37,0,0,1-.24-.27c0-1.12,0-2.24,0-3.36a.37.37,0,0,1,.1-.25,2.37,2.37,0,0,1,2.33.32,1,1,0,0,1,0,1.27Zm-1.46.94c0,.24-.09.46.29.45.56,0,.76-.11.76-.46S2.36,5,1.88,4.94,1.49,5.17,1.52,5.44Zm0-1.6c0,.24,0,.42.32.41s.6-.13.59-.44-.16-.41-.53-.42S1.46,3.55,1.49,3.83Z"
                                                        transform="translate(-0.65 -2.56)" />
                                                    <path
                                                        d="M12.75,3.79c-.25.38-.45.73-.7,1a.42.42,0,0,0,0,.57c.24.4.47.82.71,1.23a.88.88,0,0,1-1.28-.38c-.14-.25-.28-.5-.42-.76l-.12,0c0,.27,0,.55,0,.82s-.09.4-.37.37-.6.12-.6-.37c0-1.1,0-2.19,0-3.29,0-.2,0-.43.26-.45s.67.12.68.45,0,.88,0,1.32a1.73,1.73,0,0,0,.05.29l.28-.17a.4.4,0,0,0,.08-.12C11.76,3.7,11.76,3.7,12.75,3.79Z"
                                                        transform="translate(-0.65 -2.56)" />
                                                    <path
                                                        d="M15,4a1.39,1.39,0,0,1,1.18-.24.88.88,0,0,1,.69.88q0,.84,0,1.68c0,.14-.06.38-.12.39a.87.87,0,0,1-.57-.08A.71.71,0,0,1,16,6.12c0-.37,0-.74,0-1.11a1.58,1.58,0,0,0-.21-.47,1.76,1.76,0,0,0-.56.3,1,1,0,0,0-.12.54c0,.33,0,.67,0,1s-.07.34-.31.33h-.36c-.23,0-.32-.11-.31-.33,0-.79,0-1.57,0-2.36,0-.25.4-.37.7-.22A1.35,1.35,0,0,1,15,4Z"
                                                        transform="translate(-0.65 -2.56)" />
                                                    <path class="blueSVG"
                                                        d="M24.11,5.21a1.5,1.5,0,0,1,3-.08,1.46,1.46,0,0,1-1.51,1.59A1.48,1.48,0,0,1,24.11,5.21Zm2.17,0a.69.69,0,0,0-.65-.7.76.76,0,0,0,0,1.51A.72.72,0,0,0,26.28,5.16Z"
                                                        transform="translate(-0.65 -2.56)" />
                                                    <path class="blueSVG"
                                                        d="M22.91,3.67a6.05,6.05,0,0,1,.78.3.49.49,0,0,1,.2.35c0,.15,0,.43-.11.44a1.14,1.14,0,0,1-.53-.09c-.17,0-.34-.18-.5-.17a.56.56,0,0,0-.57.45.81.81,0,0,0,.33.94.67.67,0,0,0,.77,0c.46-.27.66-.22.68.18a.51.51,0,0,1-.16.36A1.59,1.59,0,0,1,22,6.52a1.57,1.57,0,0,1-.67-1.78A1.61,1.61,0,0,1,22.91,3.67Z"
                                                        transform="translate(-0.65 -2.56)" />
                                                    <path
                                                        d="M12.86,5.21c0-.36,0-.71,0-1.07,0-.15-.06-.38.21-.36s.67-.13.69.3c0,.82,0,1.64,0,2.46,0,.05,0,.15-.07.15a2.81,2.81,0,0,1-.7,0c-.07,0-.12-.24-.13-.37,0-.37,0-.74,0-1.11Z"
                                                        transform="translate(-0.65 -2.56)" />
                                                    <path
                                                        d="M13.31,2.56a.5.5,0,0,1,.51.48.53.53,0,0,1-.51.54.59.59,0,0,1-.56-.5A.53.53,0,0,1,13.31,2.56Z"
                                                        transform="translate(-0.65 -2.56)" />
                                                    <path
                                                        d="M21.19,6.23a.46.46,0,0,1-.46.48.48.48,0,0,1-.47-.48.44.44,0,0,1,.48-.49C21,5.73,21.2,5.9,21.19,6.23Z"
                                                        transform="translate(-0.65 -2.56)" /></svg>
                                            </div>
                                            <!-- /.hotelResBook -->


                                        </div>
                                        <!-- /.hotelAdressGroup -->
                                    </div>
                                    <!-- /.hotelResText -->
                                    <div class="hotelCheckGroup">
                                        <span class="hotelResCheckIn"> <span>Check in:</span> 2012.12.12</span>
                                        <!-- /.hotelResCheckIn -->
                                        <span class="hotelResCheckOut"><span>Check out:</span> 2012.12.12</span>
                                        <!-- /.hotelResCheckOut -->
                                    </div>
                                    <!-- /.hotelCheckGroup -->


                                    <div class="hotelResLink">
                                        <a href="${hotelWebSite}" target="_blank">Reserve</a>
                                    </div>
                                    <!-- /.hotelResLink -->


                                    <div class="hotelResCost">
                                        <div class="hotelResPrice">${hotelPrice} <span>${priceCurrency}</span></div>
                                        <!-- /.hotelResPrice -->
                                    </div>
                                    <!-- /.hotelResCost -->

                                </div>
                                <!-- /.hotelRes -->

                            </div>
                            <!-- /.hotelRes Body -->

                        </section>`)
        
                }
            });
        });
    };

});
















//console.log(destination);

