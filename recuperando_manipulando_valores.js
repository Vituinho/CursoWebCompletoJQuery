$(document).ready(function() {
            /*
            Aqui estão as coisas usadas na aula, que por motivos de ainda não saber como funciona algumas coisas, foram feitas no console.

            $('#nome').val() retorna oq colocou no input

            $('#origem').val() retorna oq colocou no select

            $('#nome').val('Jamilton Damasceno') coloca um valor no input

            $('#origem').val('1') coloca um valor no select


            */

            /*
            console.log($('.sexo'))
            console.log($('.sexo:checked'))
            console.log($('.sexo:checked')).val()
            */

            /*

            console.log($('.interesse'))
            console.log($('.interesse:checked'))
            console.log($('.interesse:checked')).val()
            
            

            */
            $.each($('.interesse:checked'), (indice, valor) => {
                console.log(indice, valor.value)
            })

        })