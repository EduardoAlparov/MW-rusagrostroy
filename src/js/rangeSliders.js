import noUiSlider from 'noUiSlider';
import { debounce } from 'lodash';

export default function rangeSliders() {
    const elements = Array.from(document.querySelectorAll('.js-range-slider-single'));

    elements.forEach(element => {
        const input = element.querySelector('input');
        const rangeSliderElement = element.querySelector('.range-slider__element');
        const minValue = input.hasAttribute('min') ? Number(input.getAttribute('min')) : 0;
        const maxValue = input.hasAttribute('max') ? Number(input.getAttribute('max')) : 150000;
        const stepValue = input.hasAttribute('step') ? Number(input.getAttribute('step')) : 500;
        const form = element.closest('form');
        const initialRangeValue = input.value;

        console.log('Range slider created');

        noUiSlider.create(rangeSliderElement, {
            start: [initialRangeValue || 1],
            connect: 'lower',
            orientation: 'horizontal',
            step: stepValue,
            range: {
                min: minValue,
                max: maxValue
            },
            format: {
                to: v => Number(parseFloat(v).toFixed(0)).toLocaleString(),
                from: v => parseFloat(v).toFixed(0)
            }
        });

        // rangeSliderElement.noUiSlider.on('update', () => {
        //     input.value = rangeSliderElement.noUiSlider.get();
        // });

        rangeSliderElement.noUiSlider.on('update', function(values, handle) {
            input.value = values[handle];
        });

        input.addEventListener('change', function() {
            rangeSliderElement.noUiSlider.set(this.value.replace(/[^\d]+/g, ''));
        });

        if (form) {
            form.addEventListener('reset', () => {
                console.log('Parent form has been reset')

                customRangeSliderElement.noUiSlider.reset()
            })
        }
    });
}
