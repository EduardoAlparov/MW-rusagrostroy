import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';

export default () => {
    const swiperSections = Array.from(document.querySelectorAll('.js-stages-section-swiper'));

    if(swiperSections.length > 0) {
        swiperSections.forEach((swiperSection) => {
            const swiperBox = swiperSection.querySelector('.swiper');

            if(!swiperBox) return;

            const stagesSwiper = new Swiper(swiperSection.querySelector('.swiper'), {
                slidesPerView: 1.05,
                spaceBetween: 20,
                speed: 1000,

                navigation: {
                    nextEl: swiperSection.querySelector('.stages-swiper-right-button'),
                    prevEl: swiperSection.querySelector('.stages-swiper-left-button'),
                },
    
                breakpoints: {
    
                    520: {
                        slidesPerView: 2.1,
                    },
    
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
    
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    }
                }
            })
        })
    } else {
        return;
    }
}