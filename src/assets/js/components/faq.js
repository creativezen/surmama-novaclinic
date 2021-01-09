import $ from 'jquery'

export const faq = ({ container, item, text, active }) => {

    const faq_parent = document.querySelector(`.${container}`)
    const faq_childs = document.querySelectorAll(`.${text}`)

    if (faq_parent) {

        document.addEventListener('click', event => {
            if (event.target.closest(`.${item}`)) {
                let current_item = event.target.closest(`.${item}`)
                toggleFaq(current_item)
            }
        })
    }

    function toggleFaq(current_item) {

        !$(current_item).hasClass(active) ? showCurrent() : switchCurrent()

        // Show
        // ====
        function showCurrent() {
            if (!$(current_item).hasClass(active)) {
                $(faq_childs).stop().slideUp(300)
                $(`.${item}`).removeClass(active)
                $(current_item).addClass(active).find(`.${text}`).stop().slideDown(300)
            }
        }

        // Switch
        // ======
        function switchCurrent() {
            $(current_item).removeClass(active).find(`.${text}`).stop().slideUp(300)
        }
    }
}