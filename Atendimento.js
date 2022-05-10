$(function(){
  var delay = parseFloat($(".content").css("animation-duration").replace("s"));
  
  $("[href='#Capotamento']").click(function(e) {    
    $(".content").addClass("slideLeft");
    
    window.setTimeout(function() {
      $(".content").removeClass("slideLeft").addClass("slideFromRight");
      $(".content").html("<input type='checkbox' name='vehicle value='Bike'> Localizar o calço inicial<br><input type='checkbox' name='vehicle value='Bike'> Verificar a presença de vegetação entre as rodas e os pneus<br><input type='checkbox' name='vehicle value='Bike'> Registrar as marcas de toque do veículo com o solo - veículo<br><input type='checkbox' name='vehicle value='Bike'> Registrar as marcas de toque do veículo com o solo - solo<br>");
      
      window.setTimeout(function() {
        $(".content").removeClass("slideFromRight");
      }, delay * 1);
    }, delay * 1);
    
    e.preventDefault();
  });
  
  $("[href='#quem']").click(function(e) {
    $(".content").addClass("slideLeft");
    
    window.setTimeout(function() {
      $(".content").removeClass("slideLeft").addClass("slideFromRight");
      $(".content").html("Quem Somos - Content");
      
      window.setTimeout(function() {
        $(".content").removeClass("slideFromRight");
      }, delay * 1);
    }, delay * 1);
    
    e.preventDefault();
  });
  
  $("[href='#Loc']").click(function(e) {
    $(".content").addClass("slideLeft");
    
    window.setTimeout(function() {
      $(".content").removeClass("slideLeft").addClass("slideFromRight");
      $(".content").html("Localização");
      
      window.setTimeout(function() {
        $(".content").removeClass("slideFromRight");
      }, delay * 1);
    }, delay * 1);
    
    e.preventDefault();
  });
  
  $("[href='#AtrolPedestre']").click(function(e) {
    $(".content").addClass("slideLeft");
    
    window.setTimeout(function() {
      $(".content").removeClass("slideLeft").addClass("slideFromRight");
      $(".content").html("<input type='checkbox' name='vehicle value='Bike'> Especificar e detalhar localização da lesões<br><input type='checkbox' name='vehicle value='Bike'> Precisar a localização de vestes como calçados e pertences<br><input type='checkbox' name='vehicle value='Bike'> Verificar presença de material biológico no solo na provável trajetória do corpo<br><input type='checkbox' name='vehicle value='Bike'> Verificar presença de material biológico no veículo e compatibilizar com as lesões<br><input type='checkbox' name='vehicle value='Bike'> Verificar lâmpadas do veículo<br><input type='checkbox' name='vehicle value='Bike'> Precisar horário exato do ocorrido<br><input type='checkbox' name='vehicle value='Bike'> Verificar iluminação natural e artificial do local<br><input type='checkbox' name='vehicle value='Bike'> Registrar o dano no veículo com uma fotografia frontal ( Variação transversal do impacto do corpo)<br><input type='checkbox' name='vehicle value='Bike'> Verificar e registrar marcas de arrastamento de pneus<br><input type='checkbox' name='vehicle value='Bike'> Verificar deflexão no arrastamento dos pneus<br><input type='checkbox' name='vehicle value='Bike'> Registrar as condições de travessia (presença de faixa, sinalização, passarela,etc)<br><input type='checkbox' name='vehicle value='Bike'> Verificar presença de câmeras de segurança<br><input type='checkbox' name='vehicle value='Bike'> Verificar relatos de pessoas acerca da origem e destino da vítima<br><input type='checkbox' name='vehicle value='Bike'> MEDIÇÕES E VALORES<br><input type='checkbox' name='vehicle value='Bike'> Distância do local aproximado do impacto até o local do repouso");
      
      window.setTimeout(function() {
        $(".content").removeClass("slideFromRight");
      }, delay * 1);
    }, delay * 1);
    
    e.preventDefault();
  });
  $("[href='#Atropelamento']").click(function(e) {
    $(".content").addClass("slideLeft");
    
    window.setTimeout(function() {
      $(".content").removeClass("slideLeft").addClass("slideFromRight");
      $(".content").html("<input type='checkbox' name='vehicle value='Bike'> Especificar e detalhar localização da lesões<br><input type='checkbox' name='vehicle value='Bike'> Precisar a localização de vestes como calçados e pertences<br><input type='checkbox' name='vehicle value='Bike'> Verificar presença de material biológico no solo na provável trajetória do corpo<br><input type='checkbox' name='vehicle value='Bike'> Verificar presença de material biológico no veículo e compatibilizar com as lesões<br><input type='checkbox' name='vehicle value='Bike'> Verificar lâmpadas do veículo<br><input type='checkbox' name='vehicle value='Bike'> Precisar horário exato do ocorrido<br><input type='checkbox' name='vehicle value='Bike'> Verificar iluminação natural e artificial do local<br><input type='checkbox' name='vehicle value='Bike'> Registrar o dano no veículo com uma fotografia frontal ( Variação transversal do impacto do corpo)<br><input type='checkbox' name='vehicle value='Bike'> Verificar e registrar marcas de arrastamento de pneus<br><input type='checkbox' name='vehicle value='Bike'> Verificar deflexão no arrastamento dos pneus<br><input type='checkbox' name='vehicle value='Bike'> Registrar as condições de travessia (presença de faixa, sinalização, passarela,etc)<br><input type='checkbox' name='vehicle value='Bike'> Verificar presença de câmeras de segurança<br><input type='checkbox' name='vehicle value='Bike'> Verificar relatos de pessoas acerca da origem e destino da vítima<br><input type='checkbox' name='vehicle value='Bike'> MEDIÇÕES E VALORES<br><input type='checkbox' name='vehicle value='Bike'> Distância do local aproximado do impacto até o local do repouso");
      
      window.setTimeout(function() {
        $(".content").removeClass("slideFromRight");
      }, delay * 1);
    }, delay * 1);
    
    e.preventDefault();
  });
});