$(function(){
   
    /*
    var frase = 'evilisglenio@hotmail.com';
    //.match é um mecanismo de pesquisa em strings
    //Encontre Tudo que estiver do inicio até x marcador... no caso @, depois Tudo após o marcador até o fim da string
    var verifica = frase.match(/^(.*?)@(.*?)$/);
    
    if(verifica != null){
        console.log('Encontramos algo!!');
        console.log(verifica[0]);
        console.log(verifica[1]);
        console.log(verifica[2]);
    }else{
        console.log('Nada foi encontrado!!');
    }
    */

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