import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';

export default () => {
    const stagesGallerySwiperBoxes = document.querySelectorAll('.js-stages-gallery-swiper');

    if(stagesGallerySwiperBoxes.length > 0) {
        stagesGallerySwiperBoxes.forEach( (item) => {
            const stagesGallerySwiper = new Swiper(item, {
                speed: 1000,

                navigation: {
                    nextEl: item.querySelector('.stages-gallery-swiper-left'),
                    prevEl: item.querySelector('.stages-gallery-swiper-right'),
                },

                pagination: {
                    el: item.querySelector('.swiper-pagination'),
                    type: 'fraction',
                },
            })
        })
    }
}