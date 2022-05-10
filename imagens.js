var qtd_imagens_vestigio=0;
var t = 0;
function handleFileSelect(evt) {
  var id = $(this).attr('id');
  var files = evt.target.files; // FileList object
  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {
    var arquivo = $(this).get(0).files[i];
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
        qtd_imagens_vestigio++
		    t=t+1;
        span.innerHTML = ['<imagem><img class="thumb1" data-img="'+t+'" id="Vestigios_Imagem1'+t+'" src="', e.target.result,
        '" title="', escape(theFile.name), '"/><a href="javascript:removeFile('+t+',\''+id+'\')" class="remove">x</a></imagem>'].join('');
        document.getElementById('lista').insertBefore(span, null);
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
document.getElementById('uploadChange').addEventListener('change', handleFileSelect, false);