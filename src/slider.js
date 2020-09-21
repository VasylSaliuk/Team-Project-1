$(document).ready(function () {
    $('.slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:false,
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
        centerMode:true,
        asNavFor: ".sliderbig",
        responsive: [
            {
                breakpoint:767,
                    settings: {
                    slidesToShow:3
                }
            }
        ],
        mobileFirst:true
    });
    $('.sliderbig').slick({
        arrows: true,
        fade:true,
        asNavFor:".slider"
    });
     
});