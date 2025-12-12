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

    $('#btn1').mousedown(() => {
        $('#div2').css('background-color', 'green')
    })

    $('#btn1').click(() => {
        $('#div2').css('background-color', 'blue')
    })

    $('#btn2').dblclick(() => {
        $('#div2').css('background-color', 'yellow')
    })

    $('#div2').mousemove((e) => {
        console.log(e.offsetX, e.offsetY)
        $('#resultadoDiv').html(` X: ${e.offsetX} | Y: ${e.offsetY}`)
    })
})