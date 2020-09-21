$(document).ready(function () {
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite:true,
        speed:1000,
        autoplay:false,
        autoplaySpeed: 10000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        swipe:true,
        waitForAnimate:true,
        variableWidth: false,
        centerMode:false,
        asNavFor:".sliderbig"
    });
    $('.sliderbig').slick({
        arrows: false,
        asNavFor:".slider"
    });
     
});