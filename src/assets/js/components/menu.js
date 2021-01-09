import $ from 'jquery'
import { getScrollBarWidth } from './scrollBarWidth'

export const menu = ({ container, button, overlay, button_active, overlay_active }) => {

    let state = false
    let speed = 300

    document.addEventListener('click', event => {

        if (event.target.closest(`.${button}`)) {
            !state ? open() : close()
        }
        if (event.target.closest(`.${overlay}`)) {
            close()
        }
    })


    function open() {

        $(`.${button}`).addClass(button_active)
        $(`.${container}`).stop().animate({ 'left': '0px' }, speed)
        state = true

        $(`.${overlay}`).addClass(overlay_active)

        // Компенсировали правый отступ при отключении скролл бара
        // =======================================================
        document.body.style.paggingRight = `${getScrollBarWidth()}px`
        document.body.style.overflow = 'hidden'
    }

    function close() {

        $(`.${button}`).removeClass(button_active)
        $(`.${container}`).stop().animate({ 'left': '-100%' }, speed)
        state = false

        $(`.${overlay}`).removeClass(overlay_active)

        // Вернули скролл бар на место
        // ===========================
        document.body.style.overflow = 'auto'
    }
}