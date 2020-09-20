$(document).ready(function () {
    $('.slider').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:false,
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite:true,
        speed:1000,
        autoplay:false,
        autoplaySpeed:10000,
        waitForAnimate:false,
        variableWidth: false,
        centerMode:true,
        asNavFor:".sliderbig"
    });
    
    $('.sliderbig').slick({
        arrows:false,
        fade:true,
        asNavFor:".slider"
    });    
});