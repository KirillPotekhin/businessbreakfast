$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
        navigation: true,

        // Скрываем пагинатор начиная 8го .section и убераем хэдер у последнего экрана вер1
        // var n = .section[],

        // if (n>7 && '.fullpage .section.active') {
        //     $('#fp-nav').addClass('header-hide');
        //     else {
        //         $('#fp-nav').removeClass('header-hide');
        //     },
        // },
        // if (n=10 && '.fullpage .section.active') {
        //     $('header').addClass('header-hide');
        //     else {
        //             $('header').removeClass('header-hide');
        //         },
        // },

        // Скрываем пагинатор начиная 8го .section и убераем хэдер у последнего экрана вер2
        // if (.fullpage .section.active.hide) {
        //     $('#fp-nav').addClass('header-hide');
        //     else {
        //             $('#fp-nav').removeClass('header-hide');
        //         },
        // },
        // if (.fullpage .section.active.hide-header) {
        //     $('header').addClass('header-hide');
        //     else {
        //             $('header').removeClass('header-hide');
        //         },
        // },

        // Отступ справа для пагинатора, потому что Пагинатор добавляется сам поместить его в контейнер нельзя
        // var widthDocument = $(document).width,
        // var widthContainer = $('.container').width,
        // var marginR = (widthDocument-widthContainer)/2,
        // #fp-nav.style.marginRight = 'marginR';
    });
});

$(document).on('click', '#moveTo', function(){
    $.fn.fullpage.moveTo('page10');
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
        center: [54.98, 82.89],
        zoom: 13
    });
});
