import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';
import { IS_MOBILE } from './utils';

export default () => {
    const tabSwiperBoxes = Array.from(document.querySelectorAll('.js-mobile-tabs'));

    if(tabSwiperBoxes.length > 0 && IS_MOBILE) {
        tabSwiperBoxes.forEach((tabSwiperBox) => {
            const tabsSwiper = new Swiper(tabSwiperBox, {
                wrapperClass: 'peculiarities-nav',
                slideClass: 'peculiarities-nav__item',
                slidesPerView: 'auto'
            })
        })
    }
}