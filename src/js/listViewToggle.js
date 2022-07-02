import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function listViewToggle() {
    const elements = Array.from(document.querySelectorAll('.catalog__results-toggle'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('list-view');

            ScrollTrigger.refresh();
        });

        var mql = window.matchMedia('(max-width: 640px)');

        function screenTest(e) {
            if (e.matches) {
                document.body.classList.remove('list-view');
                ScrollTrigger.refresh();
            }
        }

        mql.addEventListener('change', screenTest);
    });
}
