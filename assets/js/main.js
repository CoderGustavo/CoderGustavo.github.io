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

    //imagens do projeto
    const imgs = ["assets/img/edutricot.png", "assets/img/velox.png", "assets/img/delicious.png", "assets/img/renove21.png"];

    //seta as imagens correspondentes em cada card
    const imgElements = document.querySelectorAll(".imgs-gallery");
    let i = 0;
    imgElements.forEach(element => {
        let currentImg = imgs[parseInt($(element).attr("img-number"))-1];
        $(element).css("background-image", "url("+currentImg+")");
        $(".imgs-of-gallery").append("<div class='align-items-center justify-content-center imgs'><img src='"+currentImg+"'></div>");
        i += 1
    });

    //seta as imagens na galleria
    let i2 = 0;
    let active_img = 0;
    const imgsGallery = document.querySelectorAll(".imgs-of-gallery .imgs")
    imgsGallery.forEach(element => {
        if(i2 == 0){
            $(element).show();
        }else{
            $(element).hide();
        }
        i2 +=1
    });
    i2=0

    //next-img of gallery
    $(".next-img").on("click", ()=>{
        if(imgsGallery.length - 1 === active_img){
            active_img = 0;
        }else{
            active_img += 1;
        }
        imgsGallery.forEach(element => {
            if(active_img === i2){
                $(element).show(500);
            }else{
                $(element).hide(500);
            }
            i2 += 1;
        });
        i2 = 0;
    });

    //back-img of gallery
    $(".back-img").on("click", ()=>{
        if(active_img === 0){
            active_img = imgsGallery.length - 1;
        }else{
            active_img -= 1;
        }
        imgsGallery.forEach(element => {
            if(active_img === i2){
                $(element).show(500);
            }else{
                $(element).hide(500);
            }
            i2 += 1;
        });
        i2 = 0;
    });

    //fechar gallery
    $(".close-gallery").on("click", ()=>{
        $(".gallery").hide();
        $("body").css("overflow-y", "auto");
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
