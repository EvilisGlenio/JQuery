$(function(){

    //.html
    /*
    var el = $('.box');
    //Adição de HTML via JavaScript
    el.html('<div class="teste1">'+"Meu primeiro teste"+'</div>');
    //Adição de mais conteúdo HTML, para que o novo conteúdo  não seja sobrescrito
    el.html(el.html()+'<h1 class="teste2">'+"Meu segundo teste em JavaScript"+'</h1>');
    */

    //.text
    /*
    //A função 'text' mostra apenas o texto.
    $('.box2').text('<div></div>');
    //Mostra o conteúdo do elemento
    console.log(el.text());
    //Mostra o conteúdo do elemento ...
    //Por se tratar de '.text'
    console.log($('.box2').text());
    */

    /*
    //Incrementadores de conteúdo
    //'.val' é usado principalmente em formulários
    $('input[type=text]').val("Olá Mundo!");
    //ALL(Com excessão dos inputs)
    $('textarea').text("Olá mundo");
    */

    $('input[type=button]').click(function(){
        var v = $('input[type=text]').val();
        //'.split' separa a string em indicies de ARRAY com base no deslimitador(No caso foi o @).
        /*var v2 = v.split("@");
        console.log(v2);*/
        
        //'.substr' recorta a string:(Ex.: Evilis --> vilis(1,4) --> pega apartir do indicie 1, 4 caracteres).
        //console.log(v.substr(1,4));

        //Aqui eu separo a string em duas partes
        var splitStr = v.split("@");

        //Se o índicie[1] for igual á "hotmail.com"...faça x
        if(splitStr[1] == 'hotmail.com'){
            alert("É Hotmail, portanto farei alguma coisa");
        //Se não, se o índicie[1] for diferente de "hotmail.com"...faça y
        }else if(splitStr[1] != 'hotmail.com'){
            alert("Tente outra vez!!  Este email não é válido!");
        }
    });

    

});