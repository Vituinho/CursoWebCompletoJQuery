$(document).ready(function() {

            $('#lista1').prepend('<li>Item 4</li>')
            $('#lista1').html('<p>Eu substitui todo o conteúdo que estava aqui!</p>')

            //$('#lista1').remove()
            //$('#lista2').remove()
            //$('#linha').remove()

            $('.item2').remove()

            $('#lista2').append('<div>Item novo</div>')

            $('#lista2').before('<p>Eu fui inserido após a div</p>')

            $('#linha').after('<p>Eu fui inserido após a div</p>')

            //before -> antes e fora da div
            //after -> depois e fora da div
            //apend -> depois e dentro da div
            //prepend -> antes e dentro da div

        })      