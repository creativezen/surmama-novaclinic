import $ from 'jquery'

export const tabs = ({ item, content, active }) => {

    let speed = 300

    const content_array = document.querySelectorAll(`.${content}`)



    if (content_array.length !== 0) {

        // Скрываем элементы не активных табов при рендеринге DOM
        // ======================================================
        hideTabs(content_array)

        document.addEventListener('click', event => {

            if (event.target.closest(`.${item}`)) {

                // Получаем текущий таб
                // ====================
                let tab = event.target.closest(`.${item}`)

                // Получае значение атрибута data-name
                // ===================================
                let data_name = tab.dataset.name

                // Получаем значение атрибута data-tab
                // ===================================
                let data_tab = tab.dataset.tab

                // Находим все блоки с соответствующим содержимым
                // ==============================================
                let target_name = document.querySelectorAll((`.${content}[data-name="${data_name}"]`))

                // Среди найденых блоков находим соответствующий нажатому табу
                // ===========================================================
                let target_tab = document.querySelector((`.${content}[data-tab="${data_tab}"]`))

                // Переключаем класс состояния таба (кнопки)
                // =========================================
                switchClass(tab)

                // Переключаем состояния блоков в соответствии с тукущим табом
                // ===========================================================
                switchTab(target_name, target_tab)
            }
        })
    }

    function hideTabs(tabs) {

        tabs.forEach(item => {
            if (item.dataset.state !== 'open') {
                $(item).hide()
            }
        })
    }

    function switchTab(name, tab) {
        $(name).data('state', 'close').hide()
        $(tab).data('state', 'open').fadeIn(speed)
    }

    function switchClass(tab) {
        $(tab).siblings().removeClass(active)
        $(tab).addClass(active)
    }
}