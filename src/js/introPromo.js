import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { debounce } from 'lodash';
import { convertRemToPixels, IS_MOBILE } from './utils';

import { Swiper, Navigation, Pagination, EffectFade } from 'swiper';
gsap.registerPlugin(ScrollTrigger);

Swiper.use([Navigation, EffectFade, Pagination]);

export default function introPromo() {
    const intro = document.querySelector('.intro');

    const checkIntroHeight = () => {
        const introNotFullscreen = intro.offsetHeight < document.documentElement.clientHeight;

        if (introNotFullscreen) {
            document.body.classList.add('intro-not-fullscreen');
        } else {
            document.body.classList.remove('intro-not-fullscreen');
        }

        console.log(introNotFullscreen, {
            introHeight: intro.offsetHeight,
            limit: document.documentElement.clientHeight
        });

        return introNotFullscreen;
    };

    if (intro) {
        checkIntroHeight();
        window.addEventListener('resize', debounce(checkIntroHeight), 300);
    }

    const elements = Array.from(document.querySelectorAll('.js-intro-promo'));

    // return;

    elements.forEach(element => {
        const slider = element.querySelector('.intro__promo-slider');
        const container = element.querySelector('.swiper');
        const navLinks = Array.from(element.querySelectorAll('.intro__promo-nav-link'));

        const instance = new Swiper(container, {
            effect: 'fade',
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.intro__promo-arrow--next'),
                prevEl: element.querySelector('.intro__promo-arrow--prev')
            },
            fadeEffect: {
                crossFade: true
            },
            init: false,
            on: {
                init: swiper => {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLinks[swiper.activeIndex].classList.add('active');
                },
                slideChange: swiper => {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLinks[swiper.activeIndex].classList.add('active');
                }
            }
        });

        instance.init();

        navLinks.forEach((link, linkIndex) => {
            link.addEventListener('click', event => {
                event.preventDefault();
                instance.slideTo(linkIndex);
            });
        });

        const arrow = document.querySelector('.intro__promo-nav-arrow');

        if (arrow) {
            arrow.addEventListener('click', event => {
                event.preventDefault();
                const promo = arrow.closest('.intro__promo');

                if (promo) {
                    promo.classList.toggle('promo-open');
                }
            });
        }
        // if (!intro) return;
        ScrollTrigger.matchMedia({
            '(min-width: 641px)': function() {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.intro',
                        start: () => `top top`,
                        end: '40%',
                        scrub: true,
                        pin: checkIntroHeight() ? false : true,
                        pinSpacing: true,
                        toggleClass: 'expanded'
                    }
                });

                tl.fromTo(
                    element,
                    { '--progress': 0 },
                    {
                        '--progress': 1,
                        duration: 0.5
                    }
                )
                    .to(
                        '.intro__promo-slider',
                        {
                            autoAlpha: 1,
                            duration: 0.5
                        },
                        0
                    )
                    .to(
                        '.intro__promo .icon-arrow-down',
                        {
                            rotation: 360,
                            duration: 0.2
                        },
                        0
                    );
            }
        });
    });
}
