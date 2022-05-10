var t=0;
function handleFileSelect(evt) {
  var id = $(this).attr('id');
  var files = evt.target.files; 
  for (var i = 0, f; f = files[i]; i++) {
    var arquivo = $(this).get(0).files[i];
    if (!f.type.match('image.*')) {
      continue;
    }
    var reader = new FileReader();
    reader.onload = (function(theFile) {
      return function(e) {
        var span = document.createElement('span');
        t++;
        span.innerHTML = ['<imagem><div class="box-images"><img class="thumb1" data-img="'+t+'" id="Sugestoes_Imagem" src="', e.target.result,
        '" title="', escape(theFile.name), '" width="200px"/></div><a href="javascript:removeFile('+t+',\''+id+'\')" class="remove">x</a></imagem>'].join('');
        document.getElementById('Sugestoes_imagem').insertBefore(span, null);
      };
    })(f);
    reader.readAsDataURL(f);
  }
}
function removeFile(item, id) {
  var el = $('img[data-img="'+item+'"]');
if (confirm('Tem certeza que deseja remover este item?')) {
        el.closest("imagem").remove();   
  }
}
document.getElementById('Sugestoes').addEventListener('change', handleFileSelect, false);