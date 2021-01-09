import $ from 'jquery'
require('jquery.scrollto')

export const scroll = ({ link }) => {

    document.addEventListener('click', event => {

        if (event.target.closest(`.${link}`)) {

            let currentLINK = event.target.closest(`.${link}`)
            let currentID = currentLINK.getAttribute('href')
            $(window).scrollTo(currentID, 500)
        }
    })
}