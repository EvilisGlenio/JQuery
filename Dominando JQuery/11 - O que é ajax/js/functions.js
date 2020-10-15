$(function(){
    
    $.ajax({
        'url':'conteudo.html',
        //'method':'post',
        //data:{'nome':'Evilis','idade':'25'}
    }).done(function(data){
        $('#container').append(data);
    });

});