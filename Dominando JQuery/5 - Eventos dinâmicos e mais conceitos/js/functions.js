$(function(){

   
    //Esse evento não vai funcionar, pois o elemento foi adcionado de forma dinâmica, logo o evento também precisa ser dinâmico.
    /*$('a').click(function(){
        $('.box').css('display','inline-block');
        return false;
    });*/
    //logo ...
    //De onde o elemento estiver, quando eu clicar no link, quero q algo aconteça
    /*$('body').on('click','a',function(){
        $('.box').css('display','inline-block');
        return false;
    });

    //Aqui a variável EL recebeu o conteúdo ja existente no body, somado ao adcionado nesse momento, para que não viesse ser sobreescrito.
    var el = $('body').html($('body').html()+'<a href="">Meu Link</a>');*/

    var func = function(){
        //Nesse caso, todos os inputs seriam ativados de uma vez 
        //$('input[type=text]').css('background','green');
        //por isso....

        //O THIS faz referência ao elemento que está tendo seu evento disparado no momento.
        //$(this).css('background','green');

        //Outra forma de ultilizar o this
        //Aqui ultilizamos o seletor EQ, para pegar o elemento que está sendo disparado, e tirar dele a sua posição, atravéz do .index()
        $('input[type=text]').eq($(this).index()).css('background','green');
    }

    $('input[type=text]').keyup(func);




});