import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const animationWrappers = document.querySelectorAll('.js-h-animation-wrapper');
    const gPlan = document.querySelector('.js-gplan-trigger');
    const aboutCols = document.querySelectorAll('.js-about-col-animation');
    const doubleAnimations = document.querySelectorAll('.js-double-animation');

    if(animationWrappers.length > 0) {
        Array.from(animationWrappers).forEach( wrapper => {
            if(wrapper.querySelector('.js-h-animation-heading')) {
                gsap.set(wrapper.querySelector('.js-h-animation-heading'), { 
                    opacity: 0,
                    yPercent: 50,
                });

                gsap.to(
                    wrapper.querySelector('.js-h-animation-heading'),
                    {
                        opacity: 1,
                        yPercent: 0,
                        ease: "power1.in",
                        duration: 2.2,
                        stagger: 1,
                        scrollTrigger:{
                            trigger: wrapper,
                            start: "top center+=15%",
                            end: "top center+=15%", 
                            once: true,
                            scrub: 1.5,
                        }
                    }
                );
            }

            if(wrapper.querySelector('.js-h-animation-text')) {
                gsap.set(wrapper.querySelector('.js-h-animation-text'), { 
                    opacity: 0,
                    yPercent: 50,
                });
        
                gsap.to(
                    wrapper.querySelector('.js-h-animation-text'),
                    {
                        opacity: 1,
                        yPercent: 0,
                        delay: 1,
                        ease: "power1.in",
                        duration: 4.2,
                        stagger: 0.5,
                        scrollTrigger:{
                            trigger: wrapper,
                            start: "top center+=15%",
                            end: "top center+=15%", 
                            once: true,
                            scrub: 1.5,
                        }
                    }
                );
            }
            
        })
    }

    if(aboutCols.length > 0) {
        aboutCols.forEach((item, index) => {
            gsap.set(item, { 
                opacity: 0,
                yPercent: 50 + (30 * index),
            });

            gsap.to(
                item,
                {
                    opacity: 1,
                    yPercent: 0,
                    ease: "power1.in",
                    duration: 3.5,

                    scrollTrigger:{
                        trigger: item.parentElement,
                        start: "top center+=5%",
                        end: "top center+=15%", 
                        once: true,
                        scrub: 1 + index,
                    }
                }
            );
        })
    }

    if(doubleAnimations.length > 0) {
        doubleAnimations.forEach((doubleAnimation) => {
            if(doubleAnimation.querySelector('.js-double-animation-first')) {
                gsap.set(doubleAnimation.querySelector('.js-double-animation-first'), { 
                    opacity: 0,
                    yPercent: 50,
                });

                gsap.to(
                    doubleAnimation.querySelector('.js-double-animation-first'),
                    {
                        opacity: 1,
                        yPercent: 0,
                        ease: "power1.in",
                        duration: 2.2,
                        stagger: 1,
                        scrollTrigger:{
                            trigger: doubleAnimation,
                            start: "top center+=45%",
                            end: "top center+=35%", 
                            once: true,
                            scrub: 1.5,
                        }
                    }
                );
            }

            if(doubleAnimation.querySelector('.js-double-animation-second')) {
                gsap.set(doubleAnimation.querySelector('.js-double-animation-second'), { 
                    opacity: 0,
                    yPercent: 100,
                });

                gsap.to(
                    doubleAnimation.querySelector('.js-double-animation-second'),
                    {
                        opacity: 1,
                        yPercent: 0,
                        ease: "power1.in",
                        duration: 4.2,
                        stagger: 1,
                        scrollTrigger:{
                            trigger: doubleAnimation,
                            start: "top center+=45%",
                            end: "top center+=35%",
                            once: true,
                            scrub: 2.5,
                        }
                    }
                );
            }
        })
    }

    // if(gPlan) {
    //     gsap.to(
    //         gPlan.querySelector('.general-plan__tooltip'),
    //         {
    //             opacity: 0,
    //             xPercent: -100,
    //             ease: "power1.in",
    //             duration: 2,
    //             stagger: 0.5,
    //             scrollTrigger:{
    //                 trigger: gPlan,
    //                 start: "top center+=15%",
    //                 end: "top center+=15%", 
    //                 once: true,
    //                 scrub: 1.5,
    //             }
    //         }
    //     );
    // }
}