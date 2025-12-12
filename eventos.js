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

    $('#teclado').keyup((e) => {
        if (e.keyCode < 97 || e.keyCode > 100) {
            let txt = $(e.target).val()
            txt = txt.slice(0, -1)
            $(e.target).val(txt)
        }
    })    

    /*
    $('#teclado').keyup((e) => {
        $('#resultadoTecla').html(`tecla liberada`)

        if(e.keyCode === 13) {
            let txt = $(e.target).val()
            $('#resultadoTecla').html(txt)
            $(e.target).val('')
        }
    })
    */  

    $('#nome').focus((e) => {
        console.log('focus no input')
        $(e.target).addClass('inputFocado')
    })

    $('#email').focus((e) => {
        console.log('focus no input')
        $(e.target).addClass('inputFocado')
    })

    $('#nome').blur((e) => {
        console.log('perdeu o focus no input')
        $(e.target).removeClass('inputFocado')
    })

    $('#email').blur((e) => {
        console.log('perdeu o focus no input')
        $(e.target).removeClass('inputFocado')
    })

    $('#opcao').change((e) => {
        const opcao = $(e.target).val()
        alert(`${opcao}`)
    })

    $('form').submit((e) => {
        e.preventDefault()
        alert('formulário enviado')
    })

    $('a').click((e) => { 
        e.preventDefault()
        alert('link bloqueado')
    })


})