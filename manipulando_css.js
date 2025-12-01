            console.log($('#topo'))
			$('#topo').css('background-color', '#155661')
			
			$('#topo').css('background-color', '#155661').css('margin', '0px').css('padding', '10px 20px 10px 20px')

			$('#topo').css({ 'background': '#155661', 'margin': '0px', 'padding': '10px 20px 10px 20px'})

			$('body').css('margin', '0px')
			$('h1').css({'color': '#fff', 'margin': '0px'})

			$('input').addClass('campo')
			$('textarea').addClass('campo')

			$('textarea').addClass('campo erro')
			$('input').addClass('campo padrao')

			$('textarea').hasClass('padrao')
			$('textarea').hasClass('erro')

			if ($('textarea').hasClass('erro')) {
				alert('temos u campo com erro')
			}

			$('textarea').removeClass('padrao')
			$('textarea').removeClass('erro')

			$('textarea').addClass('padrao')
			$('textarea').addClass('erro')