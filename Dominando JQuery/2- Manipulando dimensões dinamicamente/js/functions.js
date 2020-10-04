$(function(){
    //Pegando a largura
    $('.box').width();

    //Setando a largura
    $('.box').css('width','500');
    
    //Mostra a largura DESCONTANDO o padding e IGNORANDO a margin.
    console.log("Width: "+$('.box').width());
    //Mostra a largura total INCLUINDO o padding e IGNORANDO a margin.
    console.log("innerWidth: "+$('.box').innerWidth());
    //Mostra a largura total INCLUINDO o padding e a margin(Caso o parâmetro seja 'true').
    console.log("outerWidth: "+$('.box').outerWidth(true));

     //Mostra a altura DESCONTANDO o padding e IGNORANDO a margin.
     console.log("Height: "+$('.box').height());
     //Mostra a altura total INCLUINDO o padding e IGNORANDO a margin.
     console.log("innerHeight: "+$('.box').innerHeight());
     //Mostra a altura total INCLUINDO o padding e a margin(Caso o parâmetro seja 'true').
     console.log("outerHeight: "+$('.box').outerHeight(true));

});