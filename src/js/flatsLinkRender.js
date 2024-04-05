export default () => {
    const flatsButtons = document.querySelectorAll('.plan-layouts__link.location-section__nav-link');
    const flatsCountSpan = document.querySelector('.js-flats-count');
    const flatsLink = document.querySelector('.js-flats-link');

    if(flatsButtons.length > 0) {
        flatsButtons.forEach((flatsButton) => {
            if(flatsButton.classList.contains('location-section__nav-link--active')) {
                renderInfo(flatsButton, flatsCountSpan, flatsLink);
            }
        })

        flatsButtons.forEach((flatsButton) => {
            flatsButton.addEventListener('click', () => {
                renderInfo(flatsButton, flatsCountSpan, flatsLink);
            })
        })
    } else {
        return;
    }

    function renderInfo(btn, span, link) {
        const countValue = btn.dataset.countFlats;
        const hrefValue = btn.dataset.flatsLink;

        if(!countValue || !hrefValue) return;

        const flatWord = selectDesiredCase(btn.dataset.countFlats);
        
        span.textContent = countValue + ' ' + flatWord;
        link.textContent = `Показать ${countValue} ${flatWord} этого типа`;

        link.setAttribute("href", hrefValue);
    }

    function selectDesiredCase(count) {
        const lastNumber = Number(count.split('').pop());

        if(lastNumber === 1) {
            return 'квартиру';
        } else if(lastNumber > 1 && lastNumber <= 4) {
            return 'квартиры';
        } else {
            return 'квартир';
        }
    }
 
}