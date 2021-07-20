const mapButt = document.querySelector('.but__map');

const mapButtFunction = () => {

    const map = document.querySelector('.info__conteiner');
    map.classList.toggle('map_down');
}

mapButt.addEventListener("click", mapButtFunction);



document.addEventListener('scroll', () => {
    const logo = document.querySelector('.logo');
    const lista = document.querySelector('.menu__list');
    const nav = document.querySelector('.menu');
    const item = document.querySelector('.menu__list--item');
    let x = window.scrollY;
    console.log(x)
    if (x >= 20) {
        nav.classList.add('nav__trasform');
        lista.classList.add('menu__list--transform');
        logo.classList.add('menu__logo--transform');
        item.classList.add('menu__item--transform');
    }
    else {
        nav.classList.remove('nav__trasform');
        lista.classList.remove('menu__item--transform');
        logo.classList.remove('menu__logo--transform');
        item.classList.remove('menu__item--transform');
    }
});