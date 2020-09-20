$(document).ready(function () {
    $('.slider').slick({
        arrows:false,
        dots:false,
        adaptiveHeight:false,
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:10000,
        waitForAnimate:true,
        variableWidth: false,
        centerMode:false,
        asNavFor:".sliderbig"
    });
    
    $('.sliderbig').slick({
        arrows:true,
        fade:true,
        asNavFor:".slider"
    });    
});