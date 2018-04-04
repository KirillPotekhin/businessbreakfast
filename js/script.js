$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
        navigation: true,
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
