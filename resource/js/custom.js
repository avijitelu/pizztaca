$(document).ready(function(){

    /*////////// OWL CAROUSEL /////////*/
    var owl = $('.popular__box');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        dots: false,
        // nav: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });

    var owl_recent = $('.recent-order__box');
    owl_recent.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        dots: false,
        // nav: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });


    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })


    /*////////// BXSLIDER /////////*/
    $('.bxslider').bxSlider({
        auto: true,
        // autoControls: true,
        // stopAutoOnClick: true,
        pager: false,
        mode: 'vertical',
        controls: false,
        // slideWidth: 600
    });

    /*////////// SUBSCRIBE /////////*/
    $('.btn__icon').click((e) => {
        e.preventDefault();
        let margin = $('.form').css("margin-left");
        if(margin === "-266px") {
            $('.form').css("margin-left", "0");
        }
        else {
            $('.form').css("margin-left", "-266px");
        }
    })


    /*////////// CONTROL ACTIVE /////////*/
    $('.control').click(function(event) {
        $(this).siblings().removeClass('control__active');
        $(event.target).addClass('control__active');
    })

        

});

var containerEl = document.querySelector('.portfolio-filter');
	var mixer = mixitup(containerEl);