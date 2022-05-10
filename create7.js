$row7no=$("#employee7_table tr").length;
		
		var Qtd_de_sucessoes_acidentes = 1;
        
		function add_row7()
		{ 
			Qtd_de_sucessoes_acidentes =Qtd_de_sucessoes_acidentes + 1;
			//$rowno=$("#employee7_table tr").length;
			$row7no=$row7no+1;
			$("#employee7_table tr:last").after("<tr id='row7"+$row7no.toString()+"'><td><div class='form-group'><label for='j_idt44:TipodoAcidente' class='form-control-label'>Tipo de acidente</label><span id='j_idt44:dataPartição' class='ui-calendar form-control border-0 p-0'><select id='TipodoAcidente"+$row7no.toString()+"' size='1' name='TipodoAcidente' class='form-control border-inherit'><option value= 'Atropelamento de Animal' >Atropelamento de Animal</option><option value= 'Atropelamento de Pedestre' >Atropelamento de Pedestre</option><option value= 'Capotamento' >Capotamento</option><option value= 'Colisão com Objeto em Movimento' >Colisão com Objeto em Movimento</option><option value= 'Colisão com Objeto Estático' >Colisão com Objeto Estático</option><option value= 'Colisão Frontal' >Colisão Frontal</option><option value= 'Colisão Lateral' >Colisão Lateral</option><option value= 'Colisão Transversal' >Colisão Transversal</option><option value= 'Colisão Traseira' >Colisão Traseira</option><option value= 'Danos Eventuais' >Danos Eventuais</option><option value= 'Derramamento de Carga' >Derramamento de Carga</option><option value= 'Engavetamento' >Engavetamento</option><option value= 'Incêndio' >Incêndio</option><option value= 'Queda de Ocupante de Veículo' >Queda de Ocupante de Veículo</option><option value= 'Saída de Leito Carroçável' >Saída de Leito Carroçável</option><option value= 'Tombamento' >Tombamento</option></select></span>   </output></div></div><input type='button' value='DELETE' onclick=delete_row7('row7"+$row7no.toString()+"')></td></tr>");
			
		}
		function delete_row7(row7no)
		{
			Qtd_de_sucessoes_acidentes =Qtd_de_sucessoes_acidentes - 1;
			$('#'+row7no).remove();
		}