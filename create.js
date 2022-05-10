$row2no=$("#employee2_table tr").length;

		var Qtd_de_peritos = 1;
		var Qtd_de_peritosID = 1;
		function add_row2()
		{ 
			Qtd_de_peritos = Qtd_de_peritos + 1;
			Qtd_de_peritosID = Qtd_de_peritosID +1 ;
			//$rowno=$("#employee2_table tr").length;
			$row2no=$row2no+1;
			$("#employee2_table tr:last").after("<tr id='row2"+$row2no.toString()+"'><td><label for='j_idt44:dataPRF-Particao' class='form-control-label'>PRF Responsável e Partição do Laudo</label><div class='input-group data-hora' id='dhfdhPRFParticao"+$row2no.toString()+"' tabindex='-1'><div class='input-group-prepend'><span class='input-group-text'><span class='fa fa-user'></span></span></div><span id='j_idt44:dataPRF"+$row2no.toString()+"' class='ui-calendar form-control border-0 p-0'><input id='PRFParticao"+$row2no.toString()+"' type='text' name='PRF' class='form-control border-inherit'></span><div class='input-group-append'><span class='input-group-text border-right-0'><span class='fa fa-users'></span></span></div><span id='j_idt44:dataParticao"+$row2no.toString()+"' class='ui-calendar form-control border-0 p-0'><select id='Particao"+$row2no.toString()+"' size='1' name='Partição' class='form-control border-inherit'><option value= 'Levantamento' >Levantamento</option><option value= 'Levantamento Complementar' >Levantamento Complementar</option><option value= 'Confecção do Laudo' >Confecção do Laudo</option><option value= 'Cálculos Físicos' >Cálculos Físicos</option><option value= 'Confecção de Reconstrução Digital 3D' >Confecção de Reconstrução Digital 3D</option><option value= 'Confecção de Croqui' >Confecção de Croqui</option><option value= 7 >Confecção Pericial Completa</option></select></span></div><output id='list"+$row2no.toString()+"'></output></div></div><input type='button' value='DELETE' onclick=delete_row2('row2"+$row2no.toString()+"')></td></tr>");
			
		}
		function delete_row2(row2no)
		{
			Qtd_de_peritos = Qtd_de_peritos-1;
			$('#'+row2no).remove();
		}


		