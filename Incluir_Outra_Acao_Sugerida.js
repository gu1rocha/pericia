$row0no=$("#Incluir_Outra_Acao_Sugerida_table tr").length;

		
        
		
		
		function Incluir_Outra_Acao_Sugerida()
		{ 
			//$row0no=$("#Incluir_Outra_Acao_Sugerida_table tr").length;
			$row0no=$row0no+1;
			$("#Incluir_Outra_Acao_Sugerida_table tr:last").after("<tr id='row0"+$row0no.toString()+"'><td><br><div><div class='col-6 col-md-3'><input input id='Esforco_Legal' type='radio' name='Sugestoes' value='Esforco_Legal'><label> Esforço Legal</label></div><div class='col-6 col-md-3'><input input id='Acoes_Preventivas' type='radio' name='Sugestoes' value='Acoes_Preventivas'><label> Ações Preventivas</label></div><div class='col-6 col-md-3'><input input id='Intervencao_Viaria/Ambiental' type='radio' name='Sugestoes' value='Intervencao_Viaria/Ambiental'><label> Intervenção Viária/Ambiental</label></div><div class='col-6 col-md-3'><input input id='Intervencao_Veicular' type='radio' name='Sugestoes' value='Intervencao_Veicular'><label> Intervenção Veícular</label></div>  <textarea id='story"+$row0no.toString()+"' name='story' ></textarea><div class='invalid-feedback'></div><div class='input-group data-hora' id='j_idt44:dataAcidente"+$row0no.toString()+"' tabindex='-1'><div class='input-group-prepend'><span class='input-group-text border-right-0'><span class='fa fa-file-alt'></span></span></div><span id='multiple_upload"+$row0no.toString()+"' class='ui-calendar form-control border-0 p-0'><input type='file' id='Sugestoes_imagem"+$row0no.toString()+"' multiple name='files"+$row0no.toString()+"[]' class='form-control border-inherit'></span></form></div><div id='lista"+$row0no.toString()+"'></div> <output id='Sugestoes"+$row0no.toString()+"'></output> </div><input type='button' value='DELETE' onclick=delete_row0('row0"+$row0no.toString()+"')></td></tr>");
			

			var O = 0;
			function handleFileSelect(evt) {
			
				var files = evt.target.files; // FileList object
				
				// Loop through the FileList and render image files as thumbnails.
				for (var i = 0, f; f = files[i]; i++) {
					
					// Only process image files.
					if (!f.type.match('image.*')) {
						continue;
					}
					
					var reader = new FileReader();
					
					// Closure to capture the file information.
					reader.onload = (function(theFile) {
						return function(e) {
							// Render thumbnail.
							var span = document.createElement('span');
							O=O+1;
							span.innerHTML = ['<img class="thumb1" data-img='+i+' id="id_Vestigios_Imagem'+$row0no.toString()+O+'" src="', e.target.result,
				            '" title="', escape(theFile.name), '" width="200px"/>'].join('');
							document.getElementById('Sugestoes'+$row0no.toString()).insertBefore(span, null);
						};
					})(f);
					
					// Read in the image file as a data URL.
					reader.readAsDataURL(f);
				}
			}
			document.getElementById('Sugestoes_imagem'+$row0no.toString()).addEventListener('change', handleFileSelect, false);
		}
		function delete_row0(row0no)
		{
			$('#'+row0no).remove();
		}

		  
        