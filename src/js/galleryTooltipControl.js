import { IS_HOVER } from './utils';

export default () => {
    const tips = document.querySelectorAll('.gallery-section__link.gallery-tooltip');

    if(tips.length < 1) return;

    if(!IS_HOVER) {
        Array.from(tips).forEach((tip) => {
            tip.addEventListener('click', (e) => {
                e.preventDefault();
                if(e.target.closest('button')) {
                    e.target.closest('button').classList.toggle('gallery-tooltip__button--active');
                }
            })
        })
    }
}