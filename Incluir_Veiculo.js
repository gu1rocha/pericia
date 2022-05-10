$row3no=$("#Incluir_Veiculo_table tr").length;

		var Qtd_de_veiculos = 1;
		var Qtd_de_inclusoes_veiculo = 1;
		function Incluir_Veiculo()
		{ 
			Qtd_de_veiculos = Qtd_de_veiculos + 1;
			Qtd_de_inclusoes_veiculo++;
			//$rowno=$("#Incluir_Veiculo_table tr").length;
			$row3no=$row3no+1;
			$("#Incluir_Veiculo_table tr:last").after("<tr id='row3"+$row3no.toString()+"'><td><label for='j_idt44:localizacao:rodovia' class='form-control-label'>V<input id='Numero_do_veiculo"+$row3no.toString()+"' type='number' min='2' max='99' ></label> <div class='input-group data-hora' id='j_idt44:localizacao:rodovia' tabindex='-1'><div class='input-group-prepend'><span class='input-group-text '> <span style='font-size: small;font-weight: bolder;'>Placa</span> </span></div><span id='j_idt44:localizacao:menuPlaca' class='ui-calendar form-control border-0 p-0'><input id='Placa"+$row3no.toString()+"' type='text' name='Placa' class='form-control border-inherit'></span><div class='input-group-append'><span class='input-group-text border-right-0'> <span style='font-size: small;font-weight: bolder;'>Marca</span> </span></div><span id='j_idt44:localizacao:menuMarca' class='ui-calendar form-control border-0 p-0'><input id='Marca"+$row3no.toString()+"' type='text' name='Marca' class='form-control border-inherit'></span><div class='input-group-append'><span class='input-group-text border-right-0'> <span style='font-size: small;font-weight: bolder;'>Modelo</span> </span></div><span id='j_idt44:localizacao:menuModelo' class='ui-calendar form-control border-0 p-0'><input id='Modelo"+$row3no.toString()+"' type='text' name='Modelo' class='form-control border-inherit'></span></output></div></div><input type='button' value='DELETE' onclick=delete_row3('row3"+$row3no.toString()+"')></td></tr>");
			
		}
		function delete_row3(row3no)
		{
			Qtd_de_veiculos = Qtd_de_veiculos - 1;
			$('#'+row3no).remove();
		}