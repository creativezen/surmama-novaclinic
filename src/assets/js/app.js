import { faq } from './components/faq'
import { tabs } from './components/tabs'
import { menu } from './components/menu'
import { gallery } from './components/gallery'
import { modal } from './components/modal'
import { scroll } from './components/scroll'


document.addEventListener('DOMContentLoaded', () => {

    const ELEMENT = {

        MENU: {
            container: 'js-menu-mobile',
            button: 'js-menu-button',
            overlay: 'js-overlay',
            button_active: 'header__menu-button--active',
            overlay_active: 'overlay--active'
        },

        MODAL: {
            window: 'js-modal',
            container: 'js-modal-container',
            active: 'modal--active',
            open: 'js-modal-open',
            close: 'js-modal-close'
        },

        GALLERY: {
            items: 'js-gallery'
        },

        TABS: {
            item: 'js-tabs__item',
            content: 'js-tabs-content',
            active: 'tabs__item--active'
        },

        FAQ: {
            container: 'js-faq',
            item: 'js-faq-item',
            text: 'js-faq-item__text',
            active: 'faq__item--active'
        },

        SCROLL: {
            link: 'js-scroll'
        }
    }

    menu(ELEMENT.MENU)
    modal(ELEMENT.MODAL)
    faq(ELEMENT.FAQ)
    tabs(ELEMENT.TABS)
    gallery(ELEMENT.GALLERY)
    scroll(ELEMENT.SCROLL)

})