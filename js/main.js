$(document).ready(function(){
        // slider
    $('.slider').slick({
        arrows:false,
        dots:true,
        dotsClass: 'dots',
        autoplay:true,
        autoplaySpeed:3000,
    });
    //sticky menu
    window.addEventListener("scroll",function(){
        let menuArea = document.getElementById('main-nav');
        if(window.pageYOffset > 0){
            menuArea.classList.add("sticky");

        }
        else{
            menuArea.classList.remove("sticky")
        }
    });

    //checvron top 
    var offset = 250;
    var duration = 500;
    $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $('.back-top').fadeIn(duration);
        }
        else{
            $('.back-top').fadeOut(duration);
        }

    });

});

function openNav(){
    document.getElementById("navbar").style.width="100%";
    
}
function closeNav(){
    document.getElementById("navbar").style.width="0%";
    
}


