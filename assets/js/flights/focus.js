// Input Focus Effects

function label () {
    var labClass = ["first", "second", 'third', 'fourth', 'fifth'];
    for (let i = 0; i < labClass.length; i++) {
        let id = labClass[i];
        let val = $(`.${id}Flight`).find('input').val();
            if (val !== '') {
                $(`.${id}Flight`).find('label').css({
                    top: '4px',
                    left: '5px',
                    fontSize: '13px',
                    color: '#DB6E00'
                });
            } else if (val === '') {
                $(`.${id}Flight`).find('label').css({
                    top: '21px',
                    left: '16px',
                    fontSize: '17px',
                    color: 'black'
                });
            }
            
            
        

    }
}

$('.mainSearch').find('input').on('input', function() {
    label() 
    // console.log('ff')
})

$('.mainSearch').find('input').on('change', function() {
    label() 
})

$('input').focusin(function() {
    // var a = '<input type="text" name="fromFlights" id="fromFlights">'
    let a = $(this).attr('id')
    let c = $(`.${a}`);
    c.css({
        top: '4px',
        left: '5px',
        fontSize: '13px',
        color: '#DB6E00'
    });

});

$('input').focusout(function() {
    // var a = '<input type="text" name="fromFlights" id="fromFlights">'
    let a = $(this).attr('id')
    let b =  $(`#${a}`).val();
    let c = $(`.${a}`);

    if (b === '') {
        c.css({
            top: '21px',
            left: '16px',
            fontSize: '17px',
            color: 'black'
        });
    } else if (b !== '') {
        c.css({
            top: '4px',
            left: '5px',
            fontSize: '13px',
            color: '#DB6E00'
        });
    }
    

});

// directionChange

$('.directionChange').on('click', function() {
    let a = $('#fromFlights').val();
    let b = $('#toFlights').val();
    $('#fromFlights').val(b);
    $('#toFlights').val(a);
})