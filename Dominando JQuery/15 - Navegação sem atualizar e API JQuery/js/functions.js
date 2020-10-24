$(function(){

   verificarClickMenu();

   function verificarClickMenu(){
       $('a').click(function(){
           //Aqui a própria página q será clicada será guardada no href
            var href = $(this).attr('href');
            $.ajax({
                'beforeSend':function(){
                    console.log("Estamos chamando o beforeSend!");
                },
                'timeOut':10000,
                'url':href,
                'error':function(jqXHR,textStatus,errorThrown){
                    if(jqXHR.statusText == 'Not Found'){
                        console.log('Página não encontrada!');
                    }
                },
                'success':function(data){
                    //$('#container').html(data);
                    $(data).appendTo('#container').fadeIn();
                }

            })
            return false;
       })
   }

});