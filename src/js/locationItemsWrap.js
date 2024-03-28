export default () => {
    const locItems = document.querySelectorAll('.location-section__nav-link[data-location-button]');
    const expandBtn = document.querySelector('.location-section__nav-link[data-location-button="expand"]');

    if(locItems.length < 1) return;

    const itemsArr = Array.from(locItems);
    
    if(itemsArr.length > 6) {
        expandBtn.querySelector('span').textContent = (itemsArr.length - 6);
    } else {
        expandBtn.parentElement.remove();
    }

    if(expandBtn) {
        expandBtn.addEventListener('click', () => {
            expandBtn.closest('.location-section__nav').classList.remove('location-section__nav--collapsed');
            expandBtn.parentElement.remove();
        })
    }
}