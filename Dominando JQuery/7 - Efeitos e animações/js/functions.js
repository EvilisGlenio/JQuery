$(function(){
    /*
    //.fadeOut faz o elemento desaparecer
    $('.b1').fadeOut(2000,function(){
        //.fadeIn faz um elemento aparecer
        $('.b2').fadeIn(2000,function(){
            alert("é isto!");
        });
    });
    */

    //função bastante usada em menu mobile
    $('.b1').click(function(){
        $('.b2').slideToggle();
    });

})