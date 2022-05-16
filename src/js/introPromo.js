import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { debounce } from 'lodash';
import { convertRemToPixels } from './utils';

gsap.registerPlugin(ScrollTrigger);

export default function introPromo() {
    const intro = document.querySelector('.intro');

    const checkIntroHeight = () => {
        const introNotFullscreen = intro.offsetHeight >= Math.floor(convertRemToPixels(100));


        if (introNotFullscreen) {
            document.body.classList.add('intro-not-fullscreen');
        } else {
            document.body.classList.remove('intro-not-fullscreen');
        }

        console.log(introNotFullscreen, {
            introHeight: intro.offsetHeight,
            limit: Math.floor(convertRemToPixels(100))
        })

        return introNotFullscreen;
    };

    if (intro) {
        checkIntroHeight();
        window.addEventListener('resize', debounce(checkIntroHeight), 300);
    }
   
    const elements = Array.from(document.querySelectorAll('.js-intro-promo'));

    // return;

    elements.forEach(element => {
        ScrollTrigger.matchMedia({
            '(min-width: 641px)': function() {
                if (!intro || checkIntroHeight()) return;
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: () => `bottom-=${convertRemToPixels(3)} bottom`,
                        end: () => convertRemToPixels(20),
                        scrub: true,
                        pin: '.intro',
                        pinSpacing: true
                    }
                });

                tl.to(element, {
                    height: () => convertRemToPixels(26),
                    duration: 0.5
                })
                    .to(
                        '.intro__promo-heading',
                        {
                            scale: 1,
                            duration: 0.5
                        },
                        0
                    )
                    .to(
                        '.intro__promo-hidden',
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.5
                        },
                        0
                    )
                    .to(
                        '.intro__promo .icon-arrow-down',
                        {
                            rotation: 180,
                            duration: 0.2
                        },
                        0
                    );
            }
        });
    });
}
