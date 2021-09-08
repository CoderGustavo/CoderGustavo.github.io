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

    $('.menu a').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href')
        var targetOffset = $(id).offset().top;

        $(this).addClass("active");
        $(this).siblings().removeClass("active");
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 100);
    });
    $('.menu a[href="#inicio"]').click();

    const altura_sobre = $("#sobre").offset().top;
    const altura_servicos = $("#servicos").offset().top;
    const altura_portifolio = $("#portifolio").offset().top;
    const altura_contato = $("#contato").offset().top;
    
    $(document).on("scroll", function(){
        var altura_documento = ($(window).scrollTop())+150;
        if(altura_documento < altura_sobre){
            $('.menu a[href="#inicio"]').addClass("active");
            $('.menu a[href="#inicio"]').siblings().removeClass("active");
        }
        if(altura_documento >= altura_sobre && altura_documento <= altura_servicos){
            $('.menu a[href="#sobre"]').addClass("active");
            $('.menu a[href="#sobre"]').siblings().removeClass("active");
        }
        if(altura_documento >= altura_servicos && altura_documento <= altura_portifolio){
            $('.menu a[href="#servicos"]').addClass("active");
            $('.menu a[href="#servicos"]').siblings().removeClass("active");
        }
        if(altura_documento >= altura_portifolio && altura_documento <= altura_contato){
            $('.menu a[href="#portifolio"]').addClass("active");
            $('.menu a[href="#portifolio"]').siblings().removeClass("active");
        }
        if(altura_documento >= altura_contato){
            $('.menu a[href="#contato"]').addClass("active");
            $('.menu a[href="#contato"]').siblings().removeClass("active");
        }
    });
    

    $('.filtros-portifolio a').on('click', function(e){
        e.preventDefault();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        if($(this).attr("filtrar") == "todos"){
            $("#imagens-portifolio > div").fadeIn(100);
        }else{
            var filtro = $(this).attr("filtrar");
            $("#imagens-portifolio > div").fadeOut(100);
            $("#imagens-portifolio div[filtro="+filtro+"]").fadeIn(100);
        }
    });
    $('.filtros-portifolio a[filtrar="todos"]').click();

    
});