/* Script To toggle Menu  */
const selectElement = (element) => document.querySelector(element)
selectElement('.menu-icons.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active')
})

selectElement('.menu-icons.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active')
})