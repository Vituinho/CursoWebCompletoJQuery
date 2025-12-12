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

    /*mouseover / mouseout (antigos) */

    $('#divExterna').mouseover(() => {
        $('#resultadoDiv1').html('entrou')
    })

    $('#divExterna').mouseout(() => {
        $('#resultadoDiv1').html('saiu')
    })

    $('#divInterna').mouseover(() => {
        $('#resultadoDiv2').html('entrou')
    })

    $('#divInterna').mouseout(() => {
        $('#resultadoDiv2').html('saiu')
    })

    // mouseover/mouseout é bugado, tem efeito bubble que é coco, melhor é usar o mouseenter/mouseleave

    /*mouseenter / mouseleave (novos) */

    $('#divExterna').mouseenter(() => {
        $('#resultadoDiv1').html('entrou')
    })
    
    $('#divExterna').mouseleave(() => {
        $('#resultadoDiv1').html('saiu')
    })

    $('#divInterna').mouseenter(() => {
        $('#resultadoDiv2').html('entrou')
    })
    
    $('#divInterna').mouseleave(() => {
        $('#resultadoDiv2').html('saiu')
    })

    

})