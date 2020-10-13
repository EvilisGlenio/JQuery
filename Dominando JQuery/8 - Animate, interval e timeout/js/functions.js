$(function(){
    //setTimeout .... -->>
    /*
    //variável criada para guardar a função setTimeout, para um determinado fim...
    var timer;
    //Aqui foi criada uma variável com uma função para auxiliar o setTimeout.
    var timeOut = function(){
        $('.b2').animate({
            'width':'25%',
            'height':'50vh',
            'marginLeft':'25%'
        },2000)
    }

    //Quando algum lugar da tela for clicado ...
    $('body').click(function(){
        alert("Animação cancelada");
        //imediatamente o setTimeout será cancelado
        clearTimeout(timer);
    });

    //.animate possui três paramentros...
    //O primeiro é um objeto onde inserimos todas as caracterisicas desejadas
    $('.b1').animate({
        'width':'25%',
        'height':'50vh',
        'marginLeft':'12%'
    //O segundo é o tempo em que a animação ocorrerá
    //E o terceiro é uma função em que 
    },2000,function(){
        //função criada para fazer uma determinada ação em um determinado tempo uma única vez, porém esse tipo de evento eu não consigo cancelar ou pausar
        timer = setTimeout(timeOut,2000);
    });
    */

    /*
    //setInterval -->>
    //variável criada para guardar a função setInterval, para um determinado fim...
    var timer;

    //Se algum lugar da tela for clicada ... faça algo
    $('body').click(function(){
        alert("Looping quebrado");
        clearInterval(timer);
    });

    //Um looping foi criado para fazer ... a cada 3s
    timer = setInterval(function(){
        alert("looping ativado");
    },3000);
    */
    
    var interval;
    var timer;
    var timeOut = function(){
        $('.b1').animate({
            'width':'25%',
            'height':'50vh',
            'marginLeft':'12%'
        },2000);
    }


    interval = setInterval(function(){

        $('.b2').animate({
            'width':'25%',
            'height':'50vh',
            'marginLeft':'25%'
        },2000,function(){
            timer = setTimeout(timeOut);
        })
    },1000);

})