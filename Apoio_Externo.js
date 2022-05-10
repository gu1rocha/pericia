$row6no=$("#Apoio_Externo_table tr").length;

        var Qtd_de_Apoio = 1;
		function Apoio_Externo()
		{ 
			Qtd_de_Apoio++
			//$rowno=$("#Apoio_Externo_table tr").length;
			$row6no=$row6no+1;
			$("#Apoio_Externo_table tr:last").after("<tr id='row6"+$row6no.toString()+"'><td> <div class='input-group data-hora' id='j_idt44:localizacao:rodovia' tabindex='-1'><div class='input-group-prepend'><span class='input-group-text '><span class='fas fa-building'></span></span></div><span id='j_idt44:localizacao:menuMunicipio' class='ui-calendar form-control border-0 p-0'><input id='Orgao"+$row6no.toString()+"' type='text' name='Orgão' placeholder='Orgão' class='form-control border-inherit'></span><div class='input-group-append'><span class='input-group-text border-right-0'><span class='fas fa-car'></span></span></div><span id='j_idt44:localizacao:menuRodovia' class='ui-calendar form-control border-0 p-0'><input id='Viatura"+$row6no.toString()+"' type='text' name='Viatura(s)' placeholder='Placa da Viatura' class='form-control border-inherit'></span><div class='input-group-append'><span class='input-group-text border-right-0'><span class='fas fa-users'></span></span></div><span id='j_idt44:localizacao:menuKm' class='ui-calendar form-control border-0 p-0'><input id='Servidor"+$row6no.toString()+"' type='text' name='Servidores' placeholder='Número de Servidore(s)' class='form-control border-inherit'></span></div>   </output></div></div><input type='button' value='DELETE' onclick=delete_row6('row6"+$row6no.toString()+"')></td></tr>");
			
		}
		function delete_row6(row6no)
		{
			Qtd_de_Apoio--
			$('#'+row6no).remove();
		}