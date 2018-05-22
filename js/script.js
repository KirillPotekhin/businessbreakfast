var widthDocument = $(window).width();

$(document).ready(function() {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        var x = ($(document).height() - $(document).scrollTop()) / $(window).height();
        console.log(x);

        if (widthDocument <= 320) {
            if (scroll >= $(document).height() - 5.74 * $(window).height()) {
                $('.button-wrapper__item--button-two').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-two').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 3.82 * $(window).height()) {
                $('.button-wrapper__item--button-three').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-three').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 2.23 * $(window).height()) {
                $('header').addClass('header-hide');
            } else {
                $('header').removeClass('header-hide');
            }
        }
        if (widthDocument > 320 && widthDocument <= 375) {
            if (scroll >= $(document).height() - 5.07 * $(window).height()) {
                $('.button-wrapper__item--button-two').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-two').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 3.4 * $(window).height()) {
                $('.button-wrapper__item--button-three').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-three').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 1.92 * $(window).height()) {
                $('header').addClass('header-hide');
            } else {
                $('header').removeClass('header-hide');
            }
        }
        if (widthDocument > 375 && widthDocument <= 414) {
            if (scroll >= $(document).height() - 4.75 * $(window).height()) {
                $('.button-wrapper__item--button-two').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-two').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 3.18 * $(window).height()) {
                $('.button-wrapper__item--button-three').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-three').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 1.85 * $(window).height()) {
                $('header').addClass('header-hide');
            } else {
                $('header').removeClass('header-hide');
            }
        }
        if (widthDocument > 414 && widthDocument < 992) {
            if (scroll >= $(document).height() - 3.08 * $(window).height()) {
                $('.button-wrapper__item--button-two').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-two').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 1.63 * $(window).height()) {
                $('.button-wrapper__item--button-three').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-three').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 1.05 * $(window).height()) {
                $('header').addClass('header-hide');
            } else {
                $('header').removeClass('header-hide');
            }
        }
    });

    var fullPage;
    function initFullPage() {
        fullPage = $('#fullpage').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13', 'page14', 'page15', 'page16', 'page17', 'page18', 'page19', 'page20', 'page21', 'page22', 'page23'],
            // navigation: true,
            // $('.fp-section').addClass('fp-section--fade');
            onLeave: function (index, nextIndex) {
                console.log(index, nextIndex);
                // if (nextIndex > 7) {
                //     $('#fp-nav').addClass('header-hide');
                // } else {
                //     $('#fp-nav').removeClass('header-hide');
                // }
                if (nextIndex > 20) {
                    $('.button-wrapper__item--button-two').addClass('header-hide');
                } else {
                    $('.button-wrapper__item--button-two').removeClass('header-hide');
                }

                if (nextIndex > 21) {
                    $('.button-wrapper__item--button-three').addClass('header-hide');
                } else {
                    $('.button-wrapper__item--button-three').removeClass('header-hide');
                }

                if (nextIndex > 22) {
                    $('header').addClass('header-hide');
                } else {
                    $('header').removeClass('header-hide');
                }
                // $('.fullpage-wrapper').addClass('fullpage-wrapper--fade');
                // $('.fp-section').addClass('fp-section--fade');
                // $('.fp-section').removeClass('active--fade');
                // $('.fp-section').removeClass('active--fade');
                $('body').removeClass('init');

                // $('.fp-section.active').addClass('active--fade');
            }
        });
        var widthDocument = $(window).width();
        var widthContainer = $('.container').width();
        // var marginR = (widthDocument-widthContainer)/2;
        // $('#fp-nav').css({'margin-right': marginR + 'px'});


    }

    $(window).on('resize', function () {
        // var widthDocument = $(window).width();
        var widthContainer = $('.container').width();
        // var marginR = (widthDocument - widthContainer) / 2;
        // $('#fp-nav').css({'margin-right': marginR + 'px'});
        // Отступ справа для пагинатора, потому что Пагинатор добавляется сам поместить его в контейнер нельзя
        if (widthDocument > 992) {
            initFullPage();
        } else {
            $.fn.fullpage.destroy('all');
            fullPage = undefined;
        }
    });
    var widthDocument = $(window).width();
    if (widthDocument > 992 && !fullPage) {
        initFullPage();
    }

    $('#contactForm').submit(function(e) {
        e.preventDefault();
        var form = e.target;
        var data = {
            name: $(form.name).val(),
            email: $(form.email).val(),
            phone: $(form.phone).val(),
        };
        $.post('https://formspree.io/Shenin@tochkarosy.com', data)
            .done(function() {
                $('#exampleModal').modal('show');
                console.log('email.sent');
            });
    });
});

$(document).on('click', '#moveTo', function(){
    // var widthDocument = $(window).width();
    if (widthDocument > 992) {
        $.fn.fullpage.moveTo('page23');
    } else {
        console.log('777');
        if (widthDocument <= 320) {
            $("html, body").animate({scrollTop: $(document).height() - 2.02 * $(window).height()});
            console.log('600');
        }
        if (widthDocument > 320 && widthDocument <= 375) {
            $("html, body").animate({ scrollTop: $(document).height()-1.84*$(window).height() });
            console.log('700');
        }
        if (widthDocument > 375 && widthDocument <= 414) {
            $("html, body").animate({ scrollTop: $(document).height()-1.77*$(window).height() });
            console.log('800');
        }
        if (widthDocument > 414 && widthDocument < 992) {
            $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
            console.log('999');
        }
    }
});

$(document).on('click', '#moveTo-two', function(){
    // var widthDocument = $(window).width();
    if (widthDocument > 992) {
        $.fn.fullpage.moveTo('page21');
    } else {
        console.log('777');
        if (widthDocument <= 320) {
            $("html, body").animate({scrollTop: $(document).height() - 5.66 * $(window).height()});
            console.log('602');
        }
        if (widthDocument > 320 && widthDocument <= 375) {
            $("html, body").animate({ scrollTop: $(document).height()-5.01*$(window).height() });
            console.log('700');
        }
        if (widthDocument > 375 && widthDocument <= 414) {
            $("html, body").animate({ scrollTop: $(document).height()-4.69*$(window).height() });
            console.log('800');
        }
        if (widthDocument > 414 && widthDocument < 992) {
            $("html, body").animate({ scrollTop: $(document).height()-2.85*$(window).height() });
            console.log('999');
        }
    }
});

$(document).on('click', '#moveTo-three', function(){
    // var widthDocument = $(window).width();
    if (widthDocument > 992) {
        $.fn.fullpage.moveTo('page22');
    } else {
        console.log('777');
        if (widthDocument <= 320) {
            $("html, body").animate({scrollTop: $(document).height() - 3.63 * $(window).height()});
            console.log('603');
        }
        if (widthDocument > 320 && widthDocument <= 375) {
            $("html, body").animate({ scrollTop: $(document).height()-3.24*$(window).height() });
            console.log('700');
        }
        if (widthDocument > 375 && widthDocument <= 414) {
            $("html, body").animate({ scrollTop: $(document).height()-3.08*$(window).height() });
            console.log('800');
        }
        if (widthDocument > 414 && widthDocument < 992) {
            $("html, body").animate({ scrollTop: $(document).height()-1.59*$(window).height() });
            console.log('999');
        }
    }
});

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    // mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

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
