$(function(){

    //Event click
    $('.bloco-1').click(function(){
        $('.bloco-2').css('background-color','red');
    });
    //Event Hover
    $('.bloco-2').hover(function(){
        $('.bloco-1').css('background-color','yellow');
    },function(){
        $('.bloco-1').css('background-color','#ccc');
    });

    //Event Focus/Blur
    $('textarea').focus(function(){
        console.log('Focado');
    });
    $('textarea').blur(function(){
        console.log('Desfocado');
    });

    function mudarTema(){
        $('select').change(function(){
            alert('Tema mudado!');
        });
    }

    mudarTema();
});