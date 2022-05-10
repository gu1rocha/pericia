$Intermediariono=$("#Intermediaria_table tr").length;
		var Qtd_Fases_Intermediarias = 1
		function Intermediaria()
		{ 
			Qtd_Fases_Intermediarias++;
			$Intermediariono=$Intermediariono+1;
			$("#Intermediaria_table tr:last").after("<tr id='Intermediario"+$Intermediariono.toString()+"'><td><div class='form-group'></div><textarea id='Intermediario_texto"+$Intermediariono.toString()+"' name='Intermediario"+$Intermediariono.toString()+"' ></textarea><span class='ui-calendar form-control border-0 p-0'><input type='file' id='CroquiIntermediario"+$Intermediariono.toString()+"'  name='files' class='form-control border-inherit'></span></div><output id='CroquiIntermediario_imagem"+$Intermediariono.toString()+"'></output></div></div><input type='button' value='DELETE' onclick=delete_Intermediario('Intermediario"+$Intermediariono.toString()+"')></td></tr>");
			function handleFileSelect(evt) {
				var files = evt.target.files; // FileList object
				// Loop through the FileList and render image files as thumbnails.
				for (var i = 0, f; f = files[i]; i++) {
				  var id = $(this).attr('id');
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
					  span.innerHTML = ['<imagem><img class="thumb1" data-img="'+i+$Intermediariono.toString()+'" id="Croqui_Intermediario_imagem'+$Intermediariono.toString()+'" src="', e.target.result,
					  '" title="', escape(theFile.name), '" width="200px"/><span>'+arquivo.name+'</span><a href="javascript:removeFile('+i+$Intermediariono.toString()+',\''+id+'\')" class="remove">x</a></imagem>'].join('');
					  document.getElementById('CroquiIntermediario_imagem'+$Intermediariono.toString()).insertBefore(span, null);
					};
				  })(f);
				  // Read in the image file as a data URL.
				  reader.readAsDataURL(f);
				}
			  }
			  document.getElementById('CroquiIntermediario'+$Intermediariono.toString()).addEventListener('change', handleFileSelect, false);
			  function removeFile(item, id) {
				var el = $('img[data-img="'+item+'"]');
			  if (confirm('Tem certeza que deseja remover este item?')) {
					  el.closest("imagem").remove();   
			  }
			  }
		}
		function delete_Intermediario(Intermediariono)
		{
			$('#'+Intermediariono).remove();
		}