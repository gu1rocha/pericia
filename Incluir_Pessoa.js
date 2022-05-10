$row5no=$("#Incluir_Pessoa_table tr").length;

		var Qtd_de_pessoas = 1;
		var Qtd_de_individuos = 1;
        
		function Incluir_Pessoa()
		{ 
			Qtd_de_pessoas = Qtd_de_pessoas + 1;
			Qtd_de_individuos++;
			//$rowno=$("#Incluir_Pessoa_table tr").length;
			$row5no=$row5no+1;
			$("#Incluir_Pessoa_table tr:last").after("<tr id='row5"+$row5no.toString()+"'><td> <div class='form-group'><label for='j_idt44:Pessoa:Nome' class='form-control-label'>Nome</label><input id='Nome"+$row5no.toString()+"' type='text' name='j_idt44:Pessoa:Nome' class='form-control'  />       <div class='invalid-feedback'></div></div></div><div class='form-group'><div class='input-group data-hora' id='j_idt44:Pessoa:CPF' tabindex='-1'><div class='input-group-prepend'><span class='input-group-text '><span style='font-size: small;font-weight: bolder;'>CPF</span></span></span></div><span id='j_idt44:Pessoa:CPF' class='ui-calendar form-control border-0 p-0'><input id='CPF"+$row5no.toString()+"' type='text' name='CPF' placeholder='CPF' class='form-control border-inherit'></span><div class='input-group-append'><span class='input-group-text border-right-0'><span style='font-size: small;font-weight: bolder;'>Ano</span></span></div><span id='j_idt44:Pessoa:Nascimeto' class='ui-calendar form-control border-0 p-0'><input id='Nascimeto"+$row5no.toString()+"' type='text' name='Nascimeto' placeholder='Ano de Nascimeto' class='form-control border-inherit'></span><div class='input-group-append'><span class='input-group-text border-right-0'> <span style='font-size: small;font-weight: bolder;'>Status</span> </span></div><samp id='j_idt44:Pessoa:Status' class='ui-calendar form-control border-0 p-0'><select id='Status"+$row5no.toString()+"' size='1' name='Status'  class='form-control border-inherit'><option value='Ileso'>Ileso</option><option value='Ferido Leve'>Ferido Leve</option><option value='Ferido Grave'>Ferido Grave</option><option value='Morto'>Morto</option></select></span></div><div class='form-group'><label for='j_idt44:Envolvimento"+$row5no.toString()+"' class='form-control-label'>Tipo de envolvimento</label><span id='j_idt44:dataEnvolvimento"+$row5no.toString()+"' class='ui-calendar form-control border-0 p-0'><select id='Envolvimento"+$row5no.toString()+"' size='1' name='Envolvimento' class='form-control border-inherit'><option value= 'não Informado' >Não Informado</option><option value= 'cavaleiro' >Cavaleiro</option><option value= 'condutor' >Condutor</option><option value= 'passageiro' >Passageiro</option><option value= 'pedestre' >Pedestre</option><option value= 'testemunha' >Testemunha</option></select></span> </div><div></div> <div class='form-group' id='condutor_passageiro"+$row5no.toString()+"' name='condutor_passageiro' style='display:none;'><div class='form-group'><label for='j_idt44:Causas' class='form-control-label'>De V<input type='number' min='1' max='99' id='condutor_passageiro_texto"+$row5no.toString()+"' name='condutor_passageiro_texto'></label><div class='invalid-feedback'></div></div></div></output></div></div><input type='button' value='DELETE' onclick=delete_row5('row5"+$row5no.toString()+"')></td></tr>");
			
			$(document).ready(function () {
				$('#Envolvimento'+$row5no.toString()).change(function () {
										  var Envolvimento=document.getElementById("Envolvimento"+$row5no.toString()+"");
										  var Envolvimento =  Envolvimento.value;
										  if (Envolvimento=="condutor"||Envolvimento=="passageiro") {
											  $("#condutor_passageiro"+$row5no.toString()+"").show();   
										  } else {
											  $("#condutor_passageiro"+$row5no.toString()+"").hide();
										  }});
			  });

		}
		function delete_row5(row5no)
		{
			Qtd_de_individuos--;
			$('#'+row5no).remove();}

			
