import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller, Autoplay } from 'swiper';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const tabsSwiperBox = document.querySelector('.js-solutions-tabs-swiper');
    const mainSwiperBox = document.querySelector('.js-solutions-main-swiper');

    if(!tabsSwiperBox | !mainSwiperBox) return;
    
    const tabsSwiper = new Swiper('.js-solutions-tabs-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        freemode: true,
        speed: 1000,
        modules: [Autoplay],

        navigation: {
            nextEl: '.solutions-swiper-right-button',
            prevEl: '.solutions-swiper-left-button',
        },

        breakpoints: {
            640: {
                spaceBetween: 16,
            },
        },

        on: {
            init: function () {
                const slides = tabsSwiperBox.querySelectorAll('.solutions-carousel__tabs-swiper-slide');
                slides[0].classList.add('_start-animation');

                const sT = ScrollTrigger.create({
                    trigger: "#js-solutions-animation-trigger",
                    start: "top center+=50%",
                    onEnter: () => {
                        setTimeout(() => {
                            slides[0].classList.remove('_start-animation');
                            tabsSwiper.autoplay.start();
                        }, 1500);
                    },
                    once: true,
                });
            },
        },
    })

    const mainSwiper = new Swiper('.js-solutions-main-swiper', {
        slidesPerView: 1,
        speed: 1000,

        effect: 'fade',

        fadeEffect: {
            crossFade: true
        },
    })

    tabsSwiper.controller.control = mainSwiper;
    mainSwiper.controller.control = tabsSwiper;
}