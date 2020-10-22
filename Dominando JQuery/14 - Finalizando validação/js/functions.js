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


    $('#form1').submit(function(e){
        e.preventDefault();

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
                //Se em cada palavra a primeira letra for Maiuscula e as demais minusculas ... 
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    
                }else{
                    aplicarCampoInvalido($('input[name=nome]'));
                }
            }
        }else{
            aplicarCampoInvalido($('input[name=nome]'));
            return false;
        }

        //Se chegou aqui é pq ta Okay.
    });


    function aplicarCampoInvalido(el){
        el.css('border','2px solid red');
        el.data('invalido','true');
    }
    

});