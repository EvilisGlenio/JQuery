$(function(){

    //.append(); É uma função que adciona um determinado conteúdo dentro, porém ao final de um elemento selecionado.
    //$('.box div').append('<span>'+"Elemento adcionado dinamicamente (append)"+'</span>');
    
    //.eq() Seleciona dinamicamente o elemento desejado, funciona +/- como o nth-of-type() do css.
    //$('.box div').eq(0).append('<h3>Outro elemento adcionado dinamicamente (eq)</h3>');
    
    //Funciona da mesma forma que o ".append".
    //var elApp = $('<h3>appendTo now</h3>').appendTo($('.box'));

    //.prepend(); É uma função que adciona um determinado conteúdo dentro, porém no início de um elemento selecionado.
    //$('.box').prepend('<h4>Olá Mundo (prepend)</h4>');

    //Funciona da mesma forma que o ".prepend"
    //var elPrep = $('<h4>prepend</h4>').prependTo($('.box'));

    var pre = $('<h1>Antes</h1>');
    var app = $('<h1>Depois</h1>');

    //.before Insere um conteúdo antes do elemento selecionado.
    //$('.box').before(pre);
    //ou
    $(pre).insertBefore($('.box'));

    //.after Insere um conteúdo depois do elemento selecionado.
    //$('.box').after(app).css('margin','0');
    //ou
    $(app).insertAfter($('.box').css('margin','0'));

    $('.box').eq(0).remove();

});