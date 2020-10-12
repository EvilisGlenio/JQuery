$(function(){

    //Quando o botão for apertado eu quero que algo aconteça ...
    $('form').submit(function(){
        //Aqui peguei a estrutura.container para fazer algo no futuro ...
        var container = $('.container');
        //Nessa variável, pego os valores/dados inseridos no formulário.
        var content = 'Nome: '+ $('input[name=nome]').val() + '<hr>E-mail: '+ $('input[name=email').val() + '<hr>Telefone: '+ $('input[name=telefone]').val();
        
 
        container.html(content);
        return false;
    });

})