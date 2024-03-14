$(function () {
    $('.katalog__content-title').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

let swiper = new Swiper(".mySwiper", {
    effect: "flip",
    dots: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
    },
});
