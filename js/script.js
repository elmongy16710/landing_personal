$(function () {
    $(window).scroll(function () {
        if($(window).scrollTop() > 100) {
            $('.navbar').addClass('noTransparent');
        }else {
            $('.navbar').removeClass('noTransparent')
        }

        if($(window).scrollTop() > 200) {
            if($('.scroll-to-top ').is(':hidden')) {
                $('.scroll-to-top ').fadeIn(500)
            }
        }else {
            $('.scroll-to-top ').fadeOut(500)
        }
    });

    // scroll to top (click)
    $('.scroll-to-top i ').on('click' , function() {
        $('html , body').animate({
            scrollTop : 0
        } , 500)
    });

    // circle - progress
    $('.circle').circleProgress({
        fill : "#086ed5",
    }).on('circle-animation-progress' , function(event , progress , stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });

    // scroll animation
    
    $('.nav-link').click(function () {

        var thash = this.hash ; 
        var navWhidth = $('.navbar').innerHeight();
        $('html , body').animate({
            scrollTop : $(thash).offset().top - navWhidth ,
        } , 800)
    })
});