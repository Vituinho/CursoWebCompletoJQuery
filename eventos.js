$(document).ready(() => {
    $('#onload').html('Página carregada')

    $(window).scroll(() => {
        $('#scroll').html('Scroll acionado')
    })

    $(window).resize(() => {
        $('#resize').html('Página redimensionada').css('background-color', 'red');
    })

    //function
    $('#div1').scroll(function() {
        $(this).css('background-color', 'blue')
    })

    //arrow function

    $('#div1').scroll(e => {
        $(e.target).css('background-color', 'blue')
    })
})