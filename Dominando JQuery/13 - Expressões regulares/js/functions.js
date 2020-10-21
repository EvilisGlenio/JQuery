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


    $('#form1').click(function(){

        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=tel]').val();
        var email = $('input[name=email]').val();
        
        //Pega a quantidade de strings separadas por um espaço
        var amount = nome.split(' ').length;
        //Para pegar apenas os índicies(Palavras deparadas por um espaço)
        var splitStr = nome.split(' ');
        //Se a quantidade strings separadas por um espaço for maior do que 2 ...
        if(amount >= 2){
            for(var i = 0; i < amount; i++){
                console.log(splitStr[i]);
            }
        }else{
            console.log('inválido');
            return false;
        }

        return false;
        //Se chegou aqui é pq ta Okay.
    });


    

});