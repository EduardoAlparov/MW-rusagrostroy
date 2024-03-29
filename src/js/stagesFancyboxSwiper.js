import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';

export default () => {
    const stagesGallerySwiperBoxes = document.querySelectorAll('.js-stages-gallery-swiper');

    if(stagesGallerySwiperBoxes.length > 0) {
        stagesGallerySwiperBoxes.forEach( (item) => {
            const stagesGallerySwiper = new Swiper(item, {
                speed: 1000,
                direction: 'vertical',
                effect: 'fade',

                navigation: {
                    nextEl: item.querySelector('.stages-gallery-swiper-right'),
                    prevEl: item.querySelector('.stages-gallery-swiper-left'),
                },

                pagination: {
                    el: item.querySelector('.swiper-pagination'),
                    type: 'fraction',
                },
                
                breakpoints: {
                    640: {
                        direction: 'horizontal',
                        effect: 'slide',
                    }
                  }
            })
        })
    }
}