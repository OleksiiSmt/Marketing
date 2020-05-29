$(document).ready(function () {


    // function initMap() {
    //     var e = {
    //             lat: 40.6971494,
    //             lng: 74.2598655
    //         },
    //         a = new google.maps.Map(document.getElementById("map"), {
    //             zoom: 6,
    //             center: e,
    //             disableDefaultUI: !0
    //         });
    //     new google.maps.Marker({
    //         position: e,
    //         map: a
    //     })
    // }

    //initMap();

    $('.js-menu-toggle').on('click', function () {
        $(this).toggleClass('toggler__icon--open');
        $('.js-nav').toggleClass('nav-list--open');
        $('.header__logo').toggleClass('header__logo--open');
    });

    $('.nav-list__link').on('click', function () {
        $('.js-menu-toggle').removeClass('toggler__icon--open');
    });

    $(".nav-list__link").on("click", function (event) {
        event.preventDefault();
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - 100,
        }, 900);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(".slider-info").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        dots: false,
        // autoplay: true,
        // autoplaySpeed: 5000,
        speed: 500,
        responsive: [{
            breakpoint: 821,
            settings: {
                dots: true,
            }
        }]
    });

    $(".slider-portfolio").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        centerMode: true,
        arrows: true,
        dots: false,
        // autoplay: true,
        // autoplaySpeed: 5000,
        speed: 500,
        responsive: [{
            breakpoint: 901,
            settings: {
                arrows: false,
            }
        }]
    });

    $(".slider-portfolio-popup").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        centerMode: true,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        responsive: [{
            breakpoint: 901,
            settings: {
                arrows: false,
            }
        }]
    });

    $("input[type='tel']").mask("+38 099 999-99-99");

    $('.info-item__list-name').on('click', function () {
        let $oc = $(this).next();
        $(".info-item__list-inner").not($oc).slideUp();
        $oc.slideToggle();
    });

    $('.btn-more').on('click', function () {
        $(this).toggleClass('opened').toggleClass('closed').prev().slideToggle();

        if ($(this).hasClass('opened')) {
            $(this).html('свернуть');
        } else {
            $(this).html('Read more');
        }
        return false;
    });

    $('.portfolio-info__btn').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

});

// $(window).on('resize', function (event) {
//     event.preventDefault()
//     if (window.innerWidth < 1025) {
//         $('.hide').hide().css('display', 'none');
//     } else {
//         $('.hide').show().css('display', 'block');
//     }
// }).triggerHandler('resize');

$(window).scroll(function () {
    if ($(window).scrollTop() >= 70) {
        $('.header-js').addClass('header--fixed');
    } else {
        $('.header-js').removeClass('header--fixed');
    }
});