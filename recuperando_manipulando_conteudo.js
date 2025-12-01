$(document).ready(function() {

            console.log('conteudo div 1: ', $('#div1').html())
            console.log('conteudo div 2: ', $('#div2').html())

            //Comandos utilizados para teste nessa aula

            $('#div1').html('Eu sou o valor novo')
            
            $('#div1').html('<strong>Eu sou o valor novo</strong>')

            $('#div1').html('<strong style="color: red">Eu sou o valor novo</strong>')

            //o text ele retorna a string pura
            $('#div1').text('<strong style="color: red">Eu sou o valor novo</strong>')

        })