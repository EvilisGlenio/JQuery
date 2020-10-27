$(function(){

  $(window).scroll(function(){
      //Pega a posição da janela baseada na quantidade de pixels ocultos acima da mesma
      var windowOffY = $(window).scrollTop();
      //Obtem a altura da janela
      var windowHeight = $(window).height();
      
    $('div.section').each(function(){
        //Obtem as coordenadas de um objeto
        //Qual a distancia do topo do elemento até o topo da janela
        var elOffY = $(this).offset().top;

        if(elOffY+30 < (windowOffY + windowHeight) && elOffY+30+$(this).height > windowOffY){
            //console.log("Estamos na sessão " + $(this).attr('target'));
            $('a').css('border-bottom','0');
            var target = $(this).attr('target');
            $('a.'+target).css('border-bottom','2px solid #333');

            return;
        }
    });
  });

});