function handleFileSelect(evt) {
			
  var id = $(this).attr('id');
  var files = evt.target.files; // FileList object
  
  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {
    
    var t = (i % 2 == 0) ? 'item_white' : 'item_grey';
    
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
        span.innerHTML = ['<imagem><img class="thumb1" data-img="5" id="Reconstrucao_Digital_imagem" src="', e.target.result,
        '" title="', escape(theFile.name), '" width="200px"/><a href="javascript:removeFile(5,\''+id+'\')" class="remove">x</a></imagem>'].join('');
        document.getElementById('ReconstrucaoDigital_imagem').insertBefore(span, null);
      };
    })(f);
    
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

function removeFile(item, id) {
  var el = $('img[data-img="'+item+'"]');
if (confirm('Tem certeza que deseja remover este item?')) {
        el.closest("imagem").remove();   
}
}

document.getElementById('ReconstrucaoDigital').addEventListener('change', handleFileSelect, false);