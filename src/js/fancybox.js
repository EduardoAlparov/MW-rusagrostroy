import { Fancybox } from '@fancyapps/ui';

export default function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        placeFocusBack: false
    });
    
    Fancybox.bind('[data-fancybox-gallery]', {
        placeFocusBack: false,
        dragToClose: false,
        touch: false
    });
}