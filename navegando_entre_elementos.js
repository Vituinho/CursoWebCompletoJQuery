console.log($('.secao1').parent())
			console.log($('.subSecao').closest('#pagina'))
			console.log($('.subSecao').closest('.secao1'))
			console.log($('.item').closest('#topo'))
			console.log($('.item').closest('ul'))
			console.log($('.item').parent())
			console.log($('#rodape').find('p'))
			console.log($('#topo').find('.item'))
			console.log($('.secao1').parent().find('h1'))
			console.log($('.subSecao').parent().parent().find('h1'))
			console.log($('.subSecao').closest('#pagina').find('h1'))

			//parent() -> elemento pai
			//closest() -> procura por elementos pais
			//find() -> procura por elementos filhos