$(function(){
    
    //Ao envéz de fixar chamando sempre o mesmo elemento
    //Podemos chamar sempre o mesmo objeto, sem está criando várias instâncias dele.
    var el = $('div.box');

    setTimeout(function(){
        //Como pode ver, estou sempre chamando o mesmo objeto, apartir de qualquer lugar do código.
        el.css('background-color','yellow');

        function teste(){
            el.css('color','red');
        }

        teste();
        },1000);
});