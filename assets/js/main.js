$(function(){
    $(".menu a").on('mouseover', function(){
        $(this).find(".barra").css("width", "80%");
    });
    $(".menu a").on('mouseout', function(){
        $(this).find(".barra").css("width", "0");
    });
    $("#topo").hide();
    $(document).scroll(function(){
        if($(document).scrollTop() != 0){
            $('nav').css("background-color", "#00000080");
            $("#topo").show(100);
        }else{
            $('nav').css("background-color", "transparent");
            $("#topo").hide(100);
        }
    });
    $(".fechar-mobile").on('click', function(){
        $('.menu').css("left","200%");
    });
    $(".menu-mobile").on('click', function(e){
        $('.menu').css("left","0");
    })
    $("#topo").on('click', function(){
        window.scrollTo(0, 0);
    });
});

$(function(){
    var texto = document.querySelector(".efeito-digitacao");
    var element = texto.innerHTML;

    function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        
        textoArray.forEach(function(letra, i){   
            setTimeout(function(){
                elemento.innerHTML += letra;
            }, 100 * i)
        });
        
        setTimeout(function(){
            var aa = elemento.innerHTML;
            textoArray.forEach(function(letra, i){   
                setTimeout(function(){
                    elemento.innerHTML = aa.slice(0, -i-1);
                }, 100 * i)
            });
            setTimeout(function(){
                mudartexto(elemento);
            }, 2000)
        }, 2000);
    }
    
    function mudartexto(elemento){
        if(element == "Front-End Web"){
            elemento.innerHTML = "Back-End Web";
        }else{
            elemento.innerHTML = "Front-End Web";
        }
        element = elemento.innerHTML;
        typeWrite(elemento);
    }

    typeWrite(texto);
});