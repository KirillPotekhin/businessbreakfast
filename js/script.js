$(document).ready(function() {
    var fullPage;
    function initFullPage() {
        fullPage = $('#fullpage').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
            navigation: true,
            onLeave: function (index, nextIndex) {
                console.log(index, nextIndex);
                if (nextIndex > 7) {
                    $('#fp-nav').addClass('header-hide');
                } else {
                    $('#fp-nav').removeClass('header-hide');
                }
                if (nextIndex > 9) {
                    $('header').addClass('header-hide');
                } else {
                    $('header').removeClass('header-hide');
                }
            }
        });
        var widthDocument = $(window).width();
        var widthContainer = $('.container').width();
        var marginR = (widthDocument-widthContainer)/2;
        $('#fp-nav').css({'margin-right': marginR + 'px'});
    }



    $(window).on('resize', function () {
        var widthDocument = $(window).width();
        var widthContainer = $('.container').width();
        var marginR = (widthDocument - widthContainer) / 2;
        $('#fp-nav').css({'margin-right': marginR + 'px'});
        // Отступ справа для пагинатора, потому что Пагинатор добавляется сам поместить его в контейнер нельзя
        if (widthDocument > 768) {
            initFullPage();
        } else {
            $.fn.fullpage.destroy('all');
            fullPage = undefined;
        }
    });
    var widthDocument = $(window).width();
    if (widthDocument > 768 && !fullPage) {
        initFullPage();
    }
});

$(document).on('click', '#moveTo', function(){
    var widthDocument = $(window).width();
    if (widthDocument > 768) {
        $.fn.fullpage.moveTo('page10');
    } else {
        console.log('777');
        if (widthDocument <= 375) {
            $("html, body").animate({ scrollTop: $(document).height()-2*$(window).height() });
            console.log('000');
        }
        if (widthDocument > 375 && widthDocument <= 414) {
            $("html, body").animate({ scrollTop: $(document).height()-1.92*$(window).height() });
            console.log('000');
        }
        if (widthDocument > 414 && widthDocument < 768) {
            $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
            console.log('999');
        }
    }
});

// var swiper = new Swiper('.swiper-container', {
//     direction: 'vertical',
//     slidesPerView: 1,
//     spaceBetween: 30,
//     mousewheel: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     on: {
//         reachEnd: function () {
//             console.log("1");
//         },
//         slideChange: function () {
//             console.log("2");
//         },
//         slideChangeTransitionStart: function () {
//             console.log("3");
//         },
//         sliderMove: function () {
//             console.log("4");
//         },
//         transitionStart: function () {
//             console.log("5");
//         },
//         touchStart: function () {
//             console.log("6");
//         },
//     },
// });

var map;

DG.then(function () {
    console.log('123');
    map = DG.map('map', {
        center: [55.03103649555158,82.915824718277],
        zoom: 16
    });
    // var point = DG.point('100', '100');
    var myIcon = DG.divIcon({className: 'my-div-icon'});
    var marker = DG.marker([55.032423069669996,82.912767], {icon: myIcon}).addTo(map);
    marker.bindLabel('Ждём вас здесь', { static: true });
    // marker.bindLabel('Ждём вас здесь', { static: true }, { offset: 'point' });
    // console.log(point);
});
