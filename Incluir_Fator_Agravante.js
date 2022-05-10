$rowAgravanteno=$("#Incluir_Fator_Agravante_table tr").length;

		var Qtd_de_Fatores_Agravantes = 1;
		var Qtd_de_Fator = 1;
		function Incluir_Fator_Agravante()
		{ 
			Qtd_de_Fatores_Agravantes++;
			Qtd_de_Fator++;
			//$rowno=$("#Incluir_Fator_Agravante_table tr").length;
			$rowAgravanteno=$rowAgravanteno+1;
			$("#Incluir_Fator_Agravante_table tr:last").after("<tr id='rowAgravante"+$rowAgravanteno.toString()+"'><td><label for='j_idt44:TipodoAcidente' class='form-control-label'>Fator Agravante "+$rowAgravanteno.toString()+"</label><span id='j_idt44:dataTipodoAcidente' class='ui-calendar form-control border-0 p-0'><select id='Fator_Agravante"+$rowAgravanteno.toString()+"' size='1' name='TipodoAcidente' class='form-control border-inherit'><option value= 'Animais na Pista' >Animais na Pista</option><option value= 'Defeito Mecânico no Veículo' >Defeito Mecânico no Veículo</option><option value= 'Velocidade Incompatível' >Velocidade Incompatível</option><option value= 'Falta de Atenção à Condução' >Falta de Atenção à Condução</option><option value= 'Defeito na Via' >Defeito na Via</option><option value= 'Desobediência às normas de trânsito pelo condutor' >Desobediência às normas de trânsito pelo condutor</option><option value= 'Ingestão de Álcool' >Ingestão de Álcool</option><option value= 'Não guardar distância de segurança' >Não guardar distância de segurança</option><option value= 'Condutor Dormindo' >Condutor Dormindo</option><option value= 'Carga excessiva e/ou mal acondicionada' >Carga excessiva e/ou mal acondicionada</option><option value= 'Avarias e/ou desgaste excessivo no pneu' >Avarias e/ou desgaste excessivo no pneu</option><option value= 'Objeto estático sobre o leito carroçável' >Objeto estático sobre o leito carroçável</option><option value= 'Ultrapassagem Indevida' >Ultrapassagem Indevida</option><option value= 'Mal Súbito' >Mal Súbito</option><option value= 'Sinalização da via insuficiente ou inadequada' >Sinalização da via insuficiente ou inadequada</option><option value= 'Falta de Atenção do Pedestre' >Falta de Atenção do Pedestre</option><option value= 'Deficiência ou não Acionamento do Sistema de Iluminação/Sinalização do Veículo' >Deficiência ou não Acionamento do Sistema de Iluminação/Sinalização do Veículo</option><option value= 'Restrição de Visibilidade' >Restrição de Visibilidade</option><option value= 'Pista Escorregadia' >Pista Escorregadia</option><option value= 'Fenômenos da Natureza' >Fenômenos da Natureza</option><option value= 'Ingestão de álcool e/ou substâncias psicoativas pelo pedestre' >Ingestão de álcool e/ou substâncias psicoativas pelo pedestre</option><option value= 'Desobediência às normas de trânsito pelo pedestre' >Desobediência às normas de trânsito pelo pedestre</option><option value= 'Agressão Externa' >Agressão Externa</option><option value= 'Ingestão de Substâncias Psicoativas' >Ingestão de Substâncias Psicoativas</option><option value= 'Outro' >Outro</option></select></span><div class='form-group' id='Outro_Fator_Agravante"+$rowAgravanteno.toString()+"' name='Outro_Fator_Agravante"+$rowAgravanteno.toString()+"' style='display:none;'><div class='form-group'><label for='j_idt44:Causas' class='form-control-label'>Descreva o Outro Fator Agravante</label><input type='text' id='Outro_Fator_Agravante_texto"+$rowAgravanteno.toString()+"' name='Outro_Fator_Agravante_texto' class='form-control'/><div class='invalid-feedback'></div></div></div><input type='button' value='DELETE' onclick=delete_rowAgravante('rowAgravante"+$rowAgravanteno.toString()+"')></td></tr>");
			
$(document).ready(function () {
	$('#Fator_Agravante'+$rowAgravanteno.toString()).change(function () {
							  var Fator_Agravante=document.getElementById("Fator_Agravante"+$rowAgravanteno.toString()+"");
							  var Fator_Agravante =  Fator_Agravante.value;
							  if (Fator_Agravante=="Outro") {
								  $("#Outro_Fator_Agravante"+$rowAgravanteno.toString()+"").show();   
							  } else {
								  $("#Outro_Fator_Agravante"+$rowAgravanteno.toString()+"").hide();
							  }});
  });
		}
		function delete_rowAgravante(rowAgravanteno)
		{
			Qtd_de_Fatores_Agravantes--;
			$('#'+rowAgravanteno).remove();
		}


