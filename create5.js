$row5no=$("#employee5_table tr").length;

        var Qtd_de_pessoas = 1;
        var Qtd_de_pessoasID = 1;
        
		function add_row5()
		{ 
			Qtd_de_pessoas = Qtd_de_pessoas + 1;
			Qtd_de_pessoasID = Qtd_de_pessoasID + 1;
			//$rowno=$("#employee5_table tr").length;
			$row5no=$row5no+1;
			$("#employee5_table tr:last").after("<tr id='row5"+$row5no.toString()+"'><td> <div class='form-group'><label for='j_idt44:Pessoa:Nome' class='form-control-label'>Nome</label><input id='Nome"+$row5no.toString()+"' type='text' name='j_idt44:Pessoa:Nome' class='form-control'  />       <div class='invalid-feedback'></div></div></div><div class='form-group'><div class='input-group data-hora' id='j_idt44:Pessoa:CPF' tabindex='-1'><div class='input-group-prepend'><span class='input-group-text '><span class='fas fa-address-card'></span></span></div><span id='j_idt44:Pessoa:CPF' class='ui-calendar form-control border-0 p-0'><input id='CPF"+$row5no.toString()+"' type='text' name='CPF' placeholder='CPF' class='form-control border-inherit'></span><div class='input-group-append'><span class='input-group-text border-right-0'><span class='fas fa-calendar-plus'></span></span></div><span id='j_idt44:Pessoa:Nascimeto' class='ui-calendar form-control border-0 p-0'><input id='Nascimeto"+$row5no.toString()+"' type='text' name='Nascimeto' placeholder='Ano de Nascimeto' class='form-control border-inherit'></span><div class='input-group-append'><span class='input-group-text border-right-0'><span class='fas fa-notes-medical'></span></span></div><samp id='j_idt44:Pessoa:Status' class='ui-calendar form-control border-0 p-0'><select id='Status"+$row5no.toString()+"' size='1' name='Status'  class='form-control border-inherit'><option value='Ileso'>Ileso</option><option value='Ferido Leve'>Ferido Leve</option><option value='Ferido Grave'>Ferido Grave</option><option value='Morto'>Morto</option></select></span></div></output></div></div><input type='button' value='DELETE' onclick=delete_row5('row5"+$row5no.toString()+"')></td></tr>");
			
		}
		function delete_row5(row5no)
		{
			Qtd_de_pessoas = Qtd_de_pessoas - 1;
			$('#'+row5no).remove();
		}