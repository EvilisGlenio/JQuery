$(function(){
    /*
    //Evento de click
    $('a').click(function(e){
        //Previne que o evento padrão seja executado.
        //e.preventDefault();
        //Funciona da mesma maneira que o .preventDefault.
        return false;
    })
    */

    /*
    //Evento de scroll, que pode ser acionado apartir de qualquer elemento
    $(window).scroll(function(){

    });
    */

    /*
    var timer;

    //Evento de redimencionamento
    $(window).resize(function(){
        //console.log("minha janela está sendo redimencionada!");
        
        //Enquanto eu estiver redimencionando a página, o 'timer' estará sendo limpo, 
        //porém, se eu parar, e se passar 1s, só então o timer será ativado.
        clearTimeout(timer);
        //Após 1s a página será atualizada.
        timer = setTimeout(function(){
            location.href = "file:///C:/Users/gomes/Documents/GitHub/Danki%20Code/WebMaster/JQuery/Introduzindo%20JQuery/4%20-%20Mais%20sobre%20eventos/index.html";
        }, 1000);
        
    });
    */


    //Click Event
    //Ao clicar em qualquer local do 'body', algo acorerá...
    $('body').click(function(){
        $('.box').css('background-color','blue');
    });
    //A '.box' é mais específica que 'body'
    //Ao clicar na '.box' a propagação do evento será encerrada.
    //Pois, 'e' acessa qualquer função em que o elemento esteja inserido.
    $('.box').click(function(e){
        e.stopPropagation();
    });

});