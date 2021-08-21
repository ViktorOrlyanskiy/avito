const headerBurger = document.querySelector('.main-menu__burger')
headerBurger.onclick = function () {
    headerBurger.classList.toggle('active');
    document.querySelector('.main-menu__block').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
}