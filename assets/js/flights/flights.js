'use strict';

$('#passengerFlights').on('input', function() {
    ('tahir')
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});


var d = []

$.ajax({
    url: 'skybl/assets/js/flights/airports.json',
    method: 'GET',
    dataType: 'json'
}).done(function (response) {
    
    // Name of Airports
    var a = response;
    // var bname = '';
    var bcity = '';
    var bcode = '';
    var ball = '';
    for (let i = 0; i < a.length; i++) {
        // bname = a[i].name;
        bcity = a[i].city;
        bcode = a[i].code;
        ball = `${bcity} (${bcode})`

        d.push(ball);

    }

}).catch(function(error) {
    ('error')
});








function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*An array containing all the country names in the world:*/
var countries = d;

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("fromFlight"), countries);
autocomplete(document.getElementById("toFlight"), countries);




// Focus Animation

// FLight Change 

$('.tglInput').on('change', function(){
    $('.secondFlightGroup').fadeToggle('slow', function() {
        $('.thirdFlightGroup').fadeToggle('slow');
        $('.thirdFlightGroup').css({
            display: 'flex'
        });
        $('.flightBtnRet').fadeToggle('slow');
        $('.flightBtnRet').css({
            display: 'flex'
        });
        $('.flightBtnRet').find('#changeReturn').prop('checked', true);
    });
})


$('.tglInputRet').on('change', function(){
    $('.thirdFlightGroup').fadeToggle('slow', function() {
        $('.flightBtnRet').fadeToggle('slow');
        $('.flightBtnRet').css({
            display: 'none'
        });
        $('.secondFlightGroup').fadeToggle('slow');
        $('.secondFlightGroup').css({
            display: 'flex'
        });
        $('.flightBtn').find('#changeReturn').prop('checked', false);
    });
})

// Focus Animation

$('input').focusin( function () {
    let a = $(this).attr('type');
    let b = $(this).attr('id');
    if (a === 'text') {
        $(this).animate({
            paddingTop: '20px'
        }, 100);

        $(this).siblings('label').animate({
            opacity: '1'
        });
    };
});

$('input').focusout( function () {
    let a = $(this).attr('type');
    let b = $(this).attr('id');
    if (a === 'text') {
        $(this).animate({
            paddingTop: '0px'
        }, 100);
    
        $(this).siblings('label').animate({
            opacity: '0'
        });
    };  
});


// $('.buttons')
// $('.description')
// $('.imgSection')
// $('.tglInput')
// $('.tglInputRet')
var searchResult = false;




function  resultSearch () {
    if (searchResult === false) {
        // $('.firstImgSec').css({
        //     minWidth: '100px'
        // })
        // $('.mainDiv').css({
        //     background: '#C76300'
        // });
        searchResult = true;

        $('.mainDiv').animate({
            width: '100%',
            maxWidth: 'none'
        }, 'slow');
        $('.buttons').toggle('slow');
        $('.description').toggle('slow');
        $('.tglInput').toggle('slow');
        $('.tglInputRet').toggle('slow');
        $('.searchResult').toggle('slow');

        // $('.searchResult').h

        $('.secondImgSec').animate({
            flexGrow: '0'
        }, 'slow');
    };

};



// Search Function


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

var fromInputVal = '';
var toInputVal = '';
var departInputVal = '';
var departInputValS = '';
var returnInputVal = '';
var forReturn = false;

var correctFrom = false;
var correctTo = false;
var correctDepart = false;
var correctDepartS = false;
var correctReturn = false;
var correctDate = false;


function checkInput () {
    fromInputVal = $('#fromFlight').val();
    toInputVal = $('#toFlight').val();
    departInputVal = $('#departFlight').val();
    departInputValS = $('#departFlightS').val();
    returnInputVal= $('.returnInFlight').val();
    forReturn = $('.flightBtn').find('#changeReturn').prop('checked');
};




$('.flSbtn').on('click', function() {

    checkInput();

    for (let i = 0; i < d.length; i++) {
        if (fromInputVal === d[i]) {
            correctFrom = true;
            break
        } else {
            correctFrom = false;
        };
    };

    for (let i = 0; i < d.length; i++) {
        if (toInputVal === d[i]) {
            correctTo = true;
            break
        } else {
            correctTo = false;
        };
    };

    function isValidDate(dateString) {
        var regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateString.match(regEx)) return false; // Invalid format
        var d = new Date(dateString);
        var dNum = d.getTime();
        if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
        return d.toISOString().slice(0, 10) === dateString;
    };

    correctDepart = isValidDate(departInputVal);
    correctDepartS = isValidDate(departInputValS);
    correctReturn = isValidDate(returnInputVal);

    if (forReturn === false) {
        correctDate= true;
    } else if (forReturn === true) {
        if (correctDepartS === true && correctReturn === true) {
            correctDate = true;
        } else {
            correctDate = false;
        };
    } else {
        correctDate = false;
    };



    if (correctFrom === true && correctTo === true && correctDate === true) {
        fromFlightCode();
        toFlightCode();
    

        var departDateA = '';
        var returnDateA = '';

        if (forReturn === false) {
            departDateA = departInputVal;
            returnDateA = departInputVal;
        } else if (forReturn === true) {
            departDateA = departInputValS;
            returnDateA = returnInputVal;
        }

        // console.log(departDateA, returnDateA)
        function takeTime (x) {
            let retDate = [];
            let separation  = x.split('T');
            let date = separation[0];
            retDate.push(date);
            let separation2 = separation[1].split(':');
            let time = `${separation2[0]}:${separation2[1]}`
            retDate.push(time);
            return retDate
        };
    
        
        var origin = fromVal; // From Flight
        var destination = toflVal; // To Flight
        var departDate = departDateA;  // Depart Date
        var returnDate = returnDateA;  // Return Date

        
        var priceSky = [];  // Ticket price
        var airlineSky = [];  // Airlines Name
        var flightNumbSky = [];  // FLight Number
        var departTimeSky = [];  // Ticket Depart Time
        var returnTimeSky = []; // Ticket Return Time
        var transferSky = []; // Transfer Count
        var flightLogo = []; //Airlines Logo

        
        
        console.log(`Depart date ${departDate} Return date ${returnDate}`)
    
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
                // console.log(response)
            
                for (var val in response.data) {
    
                
                    priceSky.push(response.data[val].price);
                    airlineSky.push(response.data[val].airline);
                    flightNumbSky.push(response.data[val].flight_number);
                    let l = takeTime(response.data[val].departure_at);
                    departTimeSky.push(l);
                    let h = takeTime(response.data[val].return_at);
                    returnTimeSky.push(h);
                    transferSky.push(response.data[val].transfers);
                

                };
    
        })();

        
        $.ajax({
            url: 'skybl/assets/js/flights/airlines.json',
            method: 'GET',
            dataType: 'json'
        }).done(function (response) {
            

        
            for (let i = 0; i < airlineSky.length; i++) {
                var airCode = airlineSky[i];
                for (let i = 0; i < response.length; i++) {

                    var airId = response[i].id;
                    var airLogo = response[i].logo;

                    if (airId === airCode) {
                        flightLogo.push(airLogo);
                        break
                    };
                    

                };
            };
            
            

            $('.ticketBody').empty();
            var cityFrom = $('#fromFlight').val();
            var cityTo = $('#toFlight').val();
            for (let i = 0; i < priceSky.length; i++) {
                var returnDateFix =  '';
                if (forReturn === true) {
                    returnDateFix = `<span class="returnTic">Return: ${returnTimeSky[i][0]} in ${returnTimeSky[i][1]}</span>`
                } else {
                    returnDateFix = ''
                }
                
                $('.ticketBody').append(`<div class="ticket">
                                    <div class="ticImg">
                                        <img src="${flightLogo[i]}" alt="" class="ticketImg">
                                    </div>
                                    <!-- /.ticImg -->
                                    <div class="ticText">
                                        <div class="flightGroup">
                                            <span class="flightTic">${airlineSky[i]} ${flightNumbSky[i]}</span>
                                        </div>
                                        <div class="departGroup">
                                            <div>
                                                <span class="fromTic">From: ${cityFrom}</span>
                                                <span class="toTic">To: ${cityTo}</span>
                                            </div>
    
                                        </div>
                                        <!-- /.departGroup -->
                                        <div class="dateGroup">
                                            <span class="departTic">Depart: ${departTimeSky[i][0]} in ${departTimeSky[i][1]}</span>
                                            ${returnDateFix}
                                            <span class="transferTic">Transfer: ${transferSky[i]}</span>
                                        </div>
    
                                        <div class="priceGroup">
                                            <span class="priceTic"> ${priceSky[i]} USD</span>
                                        </div>
                                        <!-- /.flightTicGroup -->
    
                                    </div>
                                    <!-- /.ticText -->
                                </div>
                                <!-- /.ticket -->`);
                                resultSearch();
            }




        });
        

        
        
        
        
        
            
        });
    };

});





// Direction Change



$('.directionChange').on('click', function () {
    checkInput();
    $('#fromFlight').val(toInputVal);
    $('#toFlight').val(fromInputVal);
});


