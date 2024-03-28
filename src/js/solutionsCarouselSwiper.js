import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';

export default () => {
    const tabsSwiperBox = document.querySelector('.js-solutions-tabs-swiper');
    const mainSwiperBox = document.querySelector('.js-solutions-main-swiper');

    if(!tabsSwiperBox | !mainSwiperBox) return;
    
    const tabsSwiper = new Swiper('.js-solutions-tabs-swiper', {
        slidesPerView: "auto",
        spaceBetween: 8,
        freemode: true,
        speed: 1000,

        navigation: {
            nextEl: '.solutions-swiper-right-button',
            prevEl: '.solutions-swiper-left-button',
        },

        breakpoints: {
            640: {
                spaceBetween: 16,
            },
        }
    })

    const mainSwiper = new Swiper('.js-solutions-main-swiper', {
        slidesPerView: 1,
        loop: true,
        speed: 1000,

        effect: 'fade',

        fadeEffect: {
            crossFade: true
        },
    })

    tabsSwiper.controller.control = mainSwiper;
    mainSwiper.controller.control = tabsSwiper;
}