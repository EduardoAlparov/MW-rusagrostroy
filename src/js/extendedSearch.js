export default function extendedSearch() {
    const btns = Array.from(document.querySelectorAll('.filter__extended-search'));

    btns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();

            const form = btn.closest('form');
            if (!form) return;

            form.classList.toggle('extended-search-open');
        })
    })
}