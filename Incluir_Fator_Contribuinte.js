$rowContribuinteno=$("#Incluir_Fator_Contribuinte_table tr").length;

		var Qtd_de_Fatores_Contribuintes = 1;
		var Qtd_de_Fatores = 1;
		function Incluir_Fator_Contribuinte()
		{ 
			Qtd_de_Fatores_Contribuintes++;
			Qtd_de_Fatores++;
			//$rowno=$("#Incluir_Fator_Contribuinte_table tr").length;
			$rowContribuinteno=$rowContribuinteno+1;
			$("#Incluir_Fator_Contribuinte_table tr:last").after("<tr id='rowContribuinte"+$rowContribuinteno.toString()+"'><td><label for='j_idt44:TipodoAcidente' class='form-control-label'>Fator Contribuinte "+$rowContribuinteno.toString()+"</label><span id='j_idt44:dataTipodoAcidente' class='ui-calendar form-control border-0 p-0'><select id='Fator_Contribuinte"+$rowContribuinteno.toString()+"' size='1' name='TipodoAcidente' class='form-control border-inherit'><option value= 'Animais na Pista' >Animais na Pista</option><option value= 'Defeito Mecânico no Veículo' >Defeito Mecânico no Veículo</option><option value= 'Velocidade Incompatível' >Velocidade Incompatível</option><option value= 'Falta de Atenção à Condução' >Falta de Atenção à Condução</option><option value= 'Defeito na Via' >Defeito na Via</option><option value= 'Desobediência às normas de trânsito pelo condutor' >Desobediência às normas de trânsito pelo condutor</option><option value= 'Ingestão de Álcool' >Ingestão de Álcool</option><option value= 'Não guardar distância de segurança' >Não guardar distância de segurança</option><option value= 'Condutor Dormindo' >Condutor Dormindo</option><option value= 'Carga excessiva e/ou mal acondicionada' >Carga excessiva e/ou mal acondicionada</option><option value= 'Avarias e/ou desgaste excessivo no pneu' >Avarias e/ou desgaste excessivo no pneu</option><option value= 'Objeto estático sobre o leito carroçável' >Objeto estático sobre o leito carroçável</option><option value= 'Ultrapassagem Indevida' >Ultrapassagem Indevida</option><option value= 'Mal Súbito' >Mal Súbito</option><option value= 'Sinalização da via insuficiente ou inadequada' >Sinalização da via insuficiente ou inadequada</option><option value= 'Falta de Atenção do Pedestre' >Falta de Atenção do Pedestre</option><option value= 'Deficiência ou não Acionamento do Sistema de Iluminação/Sinalização do Veículo' >Deficiência ou não Acionamento do Sistema de Iluminação/Sinalização do Veículo</option><option value= 'Restrição de Visibilidade' >Restrição de Visibilidade</option><option value= 'Pista Escorregadia' >Pista Escorregadia</option><option value= 'Fenômenos da Natureza' >Fenômenos da Natureza</option><option value= 'Ingestão de álcool e/ou substâncias psicoativas pelo pedestre' >Ingestão de álcool e/ou substâncias psicoativas pelo pedestre</option><option value= 'Desobediência às normas de trânsito pelo pedestre' >Desobediência às normas de trânsito pelo pedestre</option><option value= 'Agressão Externa' >Agressão Externa</option><option value= 'Ingestão de Substâncias Psicoativas' >Ingestão de Substâncias Psicoativas</option><option value= 'Outro' >Outro</option></select></span><div class='form-group' id='Outro_Fator_Contribuinte"+$rowContribuinteno.toString()+"' name='Outro_Fator_Contribuinte"+$rowContribuinteno.toString()+"' style='display:none;'><div class='form-group'><label for='j_idt44:Causas' class='form-control-label'>Descreva o Outro Fator Contribuinte</label><input type='text' id='Outro_Fator_Contribuinte_texto"+$rowContribuinteno.toString()+"' name='Outro_Fator_Contribuinte_texto' class='form-control'/><div class='invalid-feedback'></div></div></div><input type='button' value='DELETE' onclick=delete_rowContribuinte('rowContribuinte"+$rowContribuinteno.toString()+"')></td></tr>");
			
$(document).ready(function () {
	$('#Fator_Contribuinte'+$rowContribuinteno.toString()).change(function () {
							  var Fator_Contribuinte=document.getElementById("Fator_Contribuinte"+$rowContribuinteno.toString()+"");
							  var Fator_Contribuinte =  Fator_Contribuinte.value;
							  if (Fator_Contribuinte=="Outro") {
								  $("#Outro_Fator_Contribuinte"+$rowContribuinteno.toString()+"").show();   
							  } else {
								  $("#Outro_Fator_Contribuinte"+$rowContribuinteno.toString()+"").hide();
							  }});
  });
		}
		function delete_rowContribuinte(rowContribuinteno)
		{
			Qtd_de_Fatores_Contribuintes--;
			$('#'+rowContribuinteno).remove();
		}


