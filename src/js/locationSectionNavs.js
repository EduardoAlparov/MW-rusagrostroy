export default () => {
    const navBtns = document.querySelectorAll('.location-section__nav-link:not(.location-section__nav-link--expand, .plan-layouts__link)');
    const mapWrapper = document.querySelector('.location-section__map');

    if(navBtns.length > 0) {
        Array.from(navBtns).forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                Array.from(navBtns).forEach((b) => {
                    b.classList.remove('location-section__nav-link--active');
                })

                btn.classList.add('location-section__nav-link--active');
                mapWrapper.dataset.class = btn.dataset.locationButton;
            })
        })
    }
}