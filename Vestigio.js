$row4no=$("#Vestigio_table tr").length;
var Qtd_Vestigios = 1;
function Vestigio()
		{ 
			Qtd_Vestigios++;
			$row4no=$row4no+1;
			$("#Vestigio_table tr:last").after("<tr id='row4"+$row4no.toString()+"'><td><br><div><div class='col-6 col-md-4'><input id='Vestígios_Humano"+$row4no.toString()+"' type='radio' name='Vestigios"+$row4no.toString()+"' value='Humano'><label> Humano</label></div><div class='col-6 col-md-4'><input id='Vestígios_Veicular"+$row4no.toString()+"' type='radio' name='Vestigios"+$row4no.toString()+"' value='Veicular'><label> Veicular</label></div><div class='col-6 col-md-4'><input id='Vestígios_Viário_Ambiental"+$row4no.toString()+"' type='radio' name='Vestigios"+$row4no.toString()+"' value='Viário-Ambiental'><label> Viário-Ambiental</label></div>  <div ><textarea id='Vestígios_texto"+$row4no.toString()+"' name='Vestígios_texto' ></textarea><div class='invalid-feedback'></div><div class='input-group data-hora' id='j_idt44:dataAcidente"+$row4no.toString()+"' tabindex='-1'><div class='input-group-prepend'><span class='input-group-text border-right-0'><span class='fa fa-file-alt'></span></span></div><span class='ui-calendar form-control border-0 p-0'><input type='file' id='Vestigios_Imagem"+$row4no.toString()+"' multiple name='files"+$row4no.toString()+"[]' class='form-control border-inherit'></span></form></div><output id='Vestigios"+$row4no.toString()+"'></output></div></div><input type='button' value='DELETE' onclick=delete_row4('row4"+$row4no.toString()+"')></td></tr>");
			
			var t = 0;
			function handleFileSelect(evt) {
			
  var files = evt.target.files; // FileList object
  
  // Loop through the FileList and render image files as thumbnails.
  
  for (var i = 0, f; f = files[i]; i++) {
    var arquivo = $(this).get(0).files[i];
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
		t=t+1;
        span.innerHTML = ['<imagem><img class="thumb1" data-img='+$row4no.toString()+t+' id="Vestigios_Imagem'+$row4no.toString()+t+'" src="', e.target.result,
        '" title="', escape(theFile.name), '" width="200px"/><span>'+arquivo.name+'</span><a href="javascript:removeFile('+$row4no.toString()+t+',\''+id+'\')" class="remove">x</a></imagem>'].join('');
        document.getElementById('Vestigios'+$row4no.toString()).insertBefore(span, null);
      };
    })(f);
    
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document.getElementById('Vestigios_Imagem'+$row4no.toString()).addEventListener('change', handleFileSelect, false);
		}
		function delete_row4(row4no)
		{
			$('#'+row4no).remove();
    }
    $(function() {
      $('#Vestígios_texto'+$row4no.toString()).autoResize();
    });
		
		