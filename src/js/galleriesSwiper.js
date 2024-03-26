import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';


export default () => {
    const gallerySwiperWrappers = document.querySelectorAll('.js-gallery-swiper-wrapper');

    if(gallerySwiperWrappers.length < 1) return;

    Array.from(gallerySwiperWrappers).forEach((gallerySwiperWrapper) => {
        const gallerySwiper = new Swiper(gallerySwiperWrapper.querySelector('.swiper'), {
            slidesPerView: 1,
            speed: 1000,

            navigation: {
                nextEl: gallerySwiperWrapper.querySelector('.gallery-section__swiper-right-button'),
                prevEl: gallerySwiperWrapper.querySelector('.gallery-section__swiper-left-button'),
            },
            
            pagination: {
                el: ".swiper-pagination",
                clickable: false,
                dynamicBullets: true,
                dynamicMainBullets: 3,
            },
        })
    })
}