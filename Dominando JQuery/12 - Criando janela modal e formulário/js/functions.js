$(function(){

    abrirJanela();
    verificarClickFechar();

    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
        });
    }

    function verificarClickFechar(){
        
        var el = $('body, .close');

        el.click(function(){
            $('.bg').fadeOut();
        });

        $('form').click(function(e){
            e.stopPropagation();
        });

    }

});