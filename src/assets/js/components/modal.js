import { getScrollBarWidth } from './scrollBarWidth'

export const modal = ({ window, container, active, open, close }) => {

    document.addEventListener('click', event => {

        // Open
        // ====
        if (event.target.closest(`.${open}`)) {

            event.preventDefault()

            let currentID, currentMODAL, currentCONTAINER, currentCONTENT, currentTARGET

            // Сохранили элемент на котором кликнули
            // =====================================
            currentTARGET = event.target.closest(`.${open}`)

            // Cодержимое вызываемого окна
            // ===========================
            currentCONTENT = currentTARGET.dataset.content

            // Забрали из нашего элемента значение атрибута href без #
            // =======================================================
            currentID = currentTARGET.getAttribute('href').replace('#', '')

            // Нашли в документе элемент с currentID
            // =====================================
            currentMODAL = document.getElementById(currentID)

            // Нашли в currentMODAL контейнер с содержимым
            // ===========================================
            currentCONTAINER = currentMODAL.querySelector(`.${container}`)

            switch (currentCONTENT) {

                // FORM
                // ====
                case 'form':
                    currentID = currentTARGET.getAttribute('href').replace('#', '')
                    currentMODAL = document.getElementById(currentID)
                    break;

                // VIDEO
                // =====
                case 'video':
                    // Получили url ролика
                    // ===================
                    let url = currentTARGET.dataset.url

                    // Создали iframe с текущим url
                    // ============================
                    let videoFrame = `<iframe src="${url}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

                    // Создали ребёнка с соответствующим классом и помести в него iframe
                    // =================================================================
                    let video = document.createElement('div')
                    video.classList.add('modal__video')
                    video.innerHTML = videoFrame

                    // Вставили готовый блок в родителя
                    // ================================
                    currentCONTAINER.appendChild(video)
                    break;

                // MAP
                // ===
                case 'map':

                    // Получили src карты
                    // ===================
                    let src = currentTARGET.dataset.src

                    // Создали iframe с текущим src
                    // ============================
                    let mapFrame = `<iframe src="${src}" frameborder="0"></iframe>`

                    // Создали ребёнка с соответствующим классом и поместили в него iframe
                    // ===================================================================
                    let map = document.createElement('div')
                    map.classList.add('modal__map')
                    map.innerHTML = mapFrame

                    // Вставили готовый блок в родителя
                    // ================================
                    currentCONTAINER.appendChild(map)
                    break;

                default:
                    break;
            }

            // Компенсировали правый отступ при отключении скролл бара
            // =======================================================
            document.body.style.paggingRight = `${getScrollBarWidth()}px`
            document.body.style.overflow = 'hidden'

            // Показали модальное окно
            // =======================
            currentMODAL.classList.add(active)

        }

        // Close
        // =====
        if (event.target.closest(`.${close}`) || event.target.classList.contains(`${container}`)) {

            // Если в окне видео, то удалили его при закрытии, чтобы не оставлять в DOM
            // ========================================================================
            let video = event.target.closest(`.${window}`).querySelector('.modal__video')
            if (video) { video.remove() }

            // Если в окне карта, то удалили её при закрытии, чтобы не оставлять в DOM
            // ========================================================================
            let map = event.target.closest(`.${window}`).querySelector('.modal__map')
            if (map) { map.remove() }

            // Если форма, то просто прячем окно
            // =================================
            event.target.closest(`.${window}`).classList.remove(active)

            // Вернули скролл бар на место
            // ===========================
            document.body.style.overflow = 'auto'
        }
    })
}