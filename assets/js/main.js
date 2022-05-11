$(()=>{
    //redireciona usuario para pagina que o atributo goto manda
    $("[goto]").on("click", (e)=>{ 
        if($(e.currentTarget).attr("goto") === "#opengallery"){
            $(".gallery").show();
            $("body").css("overflow-y", "hidden");
        }else{
            window.location.href = $(e.currentTarget).attr("goto");
        }
    });
    
    let leftCurrentBarBottom, widthCurrentBarBottom;

    const setBarNav = ()=>{
        
        leftCurrentBarBottom = $("header nav a.activate").offset().left+parseInt($("header nav a.activate").css("padding-left"))-(($("header nav a.activate").width()*1.5 - $("header nav a.activate").width())/2);
        widthCurrentBarBottom = $("header nav a.activate").width()*1.5
        
        $(".bar_bottom").animate({
            left: leftCurrentBarBottom,
            width: widthCurrentBarBottom
        }, 100);
    }

    setBarNav();

    $("header nav a").on('click', (e)=>{
        e.preventDefault();
        $(e.currentTarget).addClass("activate");
        $(e.currentTarget).siblings().removeClass("activate");
        let element = $(e.currentTarget).attr("href");
        if(element === "#home"){
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        }else{
            $('html, body').animate({
                scrollTop: $(element).offset().top*0.7
            }, 500)
        }
    });

    const closeMenuMobile = ()=>{
        $(".navegation").css("transform", "translateY(-150%)");
        $(".openMenu span:nth-child(1)").css("width", "60%");
        $(".openMenu span:nth-child(2)").css("width", "70%");
        $(".openMenu span:nth-child(1)").css("margin-top", "");
        $(".openMenu span:nth-child(3)").css("margin-top", "");
        $(".openMenu span:nth-child(1)").css("transform", "");
        $(".openMenu span:nth-child(3)").css("transform", "");
    }

    const openMenuMobile = ()=>{
        $(".navegation").css("transform", "translateY(0)");
        $(".openMenu span:nth-child(2)").css("width", "0px");
        $(".openMenu span:nth-child(1)").css("width", "100%");
        $(".openMenu span:nth-child(1)").css("margin-top", "20px");
        $(".openMenu span:nth-child(1)").css("transform", "rotate(-45deg)");
        $(".openMenu span:nth-child(3)").css("transform", "rotate(45deg)");
        $(".openMenu span:nth-child(3)").css("margin-top", "-35px");
    }

    $(".openMenu").on("click", ()=>{
        if($(this).attr("menuOpened") === "true"){
            $(this).attr("menuOpened", "false");
            closeMenuMobile();
        }else{
            $(this).attr("menuOpened", "true");
            openMenuMobile();
        }
        return false;
    });

    $(window).scroll(function(){
        const top = window.pageYOffset + window.innerHeight*0.70;
        if(top <= window.innerHeight){
            $("header nav a[href='#home']").addClass("activate");
        }
        const sections = document.querySelectorAll("section");
        setTimeout(() => {
            setBarNav();
        }, 500);
        
        $("header nav a").each(function(){
            sections.forEach(element =>{
                if(top > element.offsetTop){
                    $("a[href='#"+$(element).attr("id")+"']").addClass("activate");
                    $("a[href='#"+$(element).attr("id")+"']").siblings().removeClass("activate");
                }else{
                    $("a[href='#"+$(element).attr("id")+"']").removeClass("activate")
                }
            })
        });
    });
});
