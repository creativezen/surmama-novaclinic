import $ from 'jquery'
require('lightgallery.js')



export const gallery = function ({ items }) {

    const galleryes = document.querySelectorAll(`.${items}`)

    // Приведём формат данных Nodelist в формат массива
    // ================================================
    const galleryes_array = Array.prototype.slice.call(galleryes)

    // Итерируем массив с элементами галерей и вызываем для них плагин
    // ===============================================================
    galleryes_array.forEach(gallery => lightGallery(gallery))
}