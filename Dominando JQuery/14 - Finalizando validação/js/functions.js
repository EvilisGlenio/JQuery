$(function(){

    //Funções de abri e fechar formulário

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

    //Eventos do formulário

    $('input[type=text').focus(function(){
        resetCampoInvalido($(this));
    })

    $('#form1').submit(function(e){
        //e.preventDefault();

        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=tel]').val();
        var email = $('input[name=email]').val();
        
        if(validarNome(nome) == false){
            aplicarCampoInvalido($('input[name=nome'));
            return false;
        }else if(validarTelefone(telefone) == false){
            aplicarCampoInvalido($('input[name=tel]'));
            return false;
        }else if(validarEmail(email) == false){
            aplicarCampoInvalido($('input[name=email]'))
            return false;
        }else{
            alert("Formulário enviado com sucesso!!");
        }
       

        //Se chegou aqui é pq ta Okay.
    });


    //Funções para estilizar o campo do formulário

    function aplicarCampoInvalido(el){
        el.css('color','red');
        el.css('border','2px solid red');
        el.val('Campo Inválido');
        //el.data('invalido','true');
    }
    
    function resetCampoInvalido(el){
        el.css('color','#ccc');
        el.css('border','1px solid #ccc');
        el.val('');
    }

    //Funções para verificação dos campos

    function validarNome(nome){
        if(nome == ''){
            return false;
        }

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
                    return false;
                }
            }
        }else{
            return false;
        }
   }

   function validarTelefone(telefone){
       if(telefone == ''){
           return false;
       }
       if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null){
           return false;
       }
   }

   function validarEmail(email){
       if(email == ''){
           return false;
       }
       if(email.match(/^([A-Za-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
           return false;
       }
   }

});