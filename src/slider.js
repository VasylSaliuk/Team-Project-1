$(document).ready(function () {
    $('.sliderbig').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:10000,
        waitForAnimate:true,
        variableWidth: false,
        centerMode:false,
    });
});