$row3no=$("#employee3_table tr").length;

		var Qtd_de_veiculos = 1;
		function add_row3()
		{ 
			Qtd_de_veiculos = Qtd_de_veiculos + 1;
			//$rowno=$("#employee3_table tr").length;
			$row3no=$row3no+1;
			$("#employee3_table tr:last").after("<tr id='row3"+$row3no.toString()+"'><td> <div class='input-group data-hora' id='j_idt44:localizacao:rodovia' tabindex='-1'><div class='input-group-prepend'><span class='input-group-text '><span class='fas fa-list-ol'></span></span></div><span id='j_idt44:localizacao:menuPlaca' class='ui-calendar form-control border-0 p-0'><input id='Placa"+$row3no.toString()+"' type='text' name='Placa' placeholder='Placa' class='form-control border-inherit'></span><div class='input-group-append'><span class='input-group-text border-right-0'><span class='fas fa-car-side'></span></span></div><span id='j_idt44:localizacao:menuMarca' class='ui-calendar form-control border-0 p-0'><input id='Marca"+$row3no.toString()+"' type='text' name='Marca' placeholder='Marca' class='form-control border-inherit'></span><div class='input-group-append'><span class='input-group-text border-right-0'><span class='fas fa-car'></span></span></div><span id='j_idt44:localizacao:menuModelo' class='ui-calendar form-control border-0 p-0'><input id='Modelo"+$row3no.toString()+"' type='text' name='Modelo' placeholder='Modelo' class='form-control border-inherit'></span></output></div></div><input type='button' value='DELETE' onclick=delete_row3('row3"+$row3no.toString()+"')></td></tr>");
			
		}
		function delete_row3(row3no)
		{
			Qtd_de_veiculos = Qtd_de_veiculos - 1;
			$('#'+row3no).remove();
		}