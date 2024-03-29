import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const animationWrappers = document.querySelectorAll('.js-quarter-animation');

    if(animationWrappers.length < 0) return;

    animationWrappers.forEach((animationWrapper) => {
        const nodeArr = document.querySelectorAll('.js-quarter-animation-item');

        nodeArr.forEach((item, index) => {
            gsap.set(item, { 
                opacity: 0,
                yPercent: 100,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: animationWrapper,
                    start: "top center+=15%",
                    end: "top center+=25%", 
                    scrub: 2,
                    once: true
                }
            });

            tl.to(item, {
                delay: (index*4),
                opacity: 1,
                yPercent: 0,
                ease: "power1.in",
                duration: 3,
                stagger: 1.5,
            });
        })
    })
}