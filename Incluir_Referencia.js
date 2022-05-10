$rowReferenciasno=$("#Incluir_Referencia_table tr").length;

		var Qtd_de_Referencias = 1;
		var Qtd_de_Referencia = 1;
		function Incluir_Referencia()
		{ 
			Qtd_de_Referencias++;
			Qtd_de_Referencia++;
			//$rowno=$("#Incluir_Referencia_table tr").length;
			$rowReferenciasno=$rowReferenciasno+1;
			$("#Incluir_Referencia_table tr:last").after("<tr id='rowReferencias"+$rowReferenciasno.toString()+"'><td><label for='j_idt44:TipodoAcidente' class='form-control-label'> Referencias "+$rowReferenciasno.toString()+"</label><span id='j_idt44:dataTipodoAcidente' class='ui-calendar form-control border-0 p-0'><select id='Referencias"+$rowReferenciasno.toString()+"' size='1' name='TipodoAcidente' class='form-control border-inherit'><option value= '1' >ALMEIDA, L. L. Manual de perícias em acidentes de trânsito. Campinas, SP: Millenium, 2011.</option><option value= '2' >ARAGÃO. R. F. Acidente de trânsito: análise da prova pericial. 5. Ed. Campinas: Millenium, 2011.</option><option value= 'ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 6021: informação e documentação: publicação periódica técnica e/ou científica.' >ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 6021: informação e documentação: publicação periódica técnica e/ou científica</option><option value= 'ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 8196: desenho técnico: emprego de escala. Rio de Janeiro, 1999.' >ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 8196: desenho técnico: emprego de escala. Rio de Janeiro, 1999.</option><option value= 'ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 10068: folha de desenho: leiaute e dimensões. Rio de Janeiro, 1987.' >ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 10068: folha de desenho: leiaute e dimensões. Rio de Janeiro, 1987.</option><option value= 'BRASIL. Departamento Nacional de Estradas de Rodagem. Manual de projeto geométrico de rodovias rurais. Rio de Janeiro, 1999.' >BRASIL. Departamento Nacional de Estradas de Rodagem. Manual de projeto geométrico de rodovias rurais. Rio de Janeiro, 1999.</option><option value= 'ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. Departamento Nacional de Infraestrutura de Transportes. Manual de projeto e práticas operacionais para segurança nas rodovias. Rio de Janeiro, 2010.' >ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. Departamento Nacional de Infraestrutura de Transportes. Manual de projeto e práticas operacionais para segurança nas rodovias. Rio de Janeiro, 2010.</option><option value= 'ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS.CONSELHO NACIONAL DE TRÂNSITO (Brasil). Sinalização horizontal / Contran-Denatran. 1. ed. Brasília, 2007a.' >ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS.CONSELHO NACIONAL DE TRÂNSITO (Brasil). Sinalização horizontal / Contran-Denatran. 1. ed. Brasília, 2007a.</option><option value= 'Sinalização vertical de regulamentação / Contran-Denatran. 2. ed. – Brasília, 2007b.' >Sinalização vertical de regulamentação / Contran-Denatran. 2. ed. – Brasília, 2007b.</option><option value= 'Outra' >Outra</option></select></span><div class='form-group' id='Outra_Referencias"+$rowReferenciasno.toString()+"' name='Outra_Referencias"+$rowReferenciasno.toString()+"' style='display:none;'><div class='form-group'><label for='j_idt44:Causas' class='form-control-label'>Descreva a Outra Referencia</label><input type='text' id='Outra_Referencia_texto"+$rowReferenciasno.toString()+"' name='Outra_Referencia_texto' class='form-control'/><div class='invalid-feedback'></div></div></div><input type='button' value='DELETE' onclick=delete_rowReferencias('rowReferencias"+$rowReferenciasno.toString()+"')></td></tr>");
			
$(document).ready(function () {
	$('#Referencias'+$rowReferenciasno.toString()).change(function () {
							  var Referencias=document.getElementById("Referencias"+$rowReferenciasno.toString()+"");
							  var Referencias =  Referencias.value;
							  if (Referencias=="Outra") {
								  $("#Outra_Referencias"+$rowReferenciasno.toString()+"").show();   
							  } else {
								  $("#Outra_Referencias"+$rowReferenciasno.toString()+"").hide();
							  }});
  });
		}
		function delete_rowReferencias(rowReferenciasno)
		{
			Qtd_de_Referencias--;
			$('#'+rowReferenciasno).remove();
		}



