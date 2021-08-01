const mapButt = document.querySelector('.but__map');

const mapButtFunction = () => {

    const map = document.querySelector('.info__conteiner');
    map.classList.toggle('map_down');
}

mapButt.addEventListener("click", mapButtFunction);


const mobileMenu = document.querySelector('.mobile--i');

const mobileMenuOn = () =>{
    const menu = document.querySelector('.mobile__menu');
    menu.classList.toggle('mobileOn');
}

mobileMenu.addEventListener("click", mobileMenuOn);

document.addEventListener('scroll', () => {
    const logo = document.querySelector('.logo');
    const lista = document.querySelector('.menu__list');
    const nav = document.querySelector('.menu');
    const item = document.querySelector('.menu__list--item');
    const toUp = document.querySelector('.to__up');
    let x = window.scrollY;
    console.log(x)
    if (x >= 20) {
        nav.classList.add('nav__trasform');
        lista.classList.add('menu__list--transform');
        logo.classList.add('menu__logo--transform');
        let all = document.getElementsByClassName('menu__list--item');
        for (let i = 0; i < all.length; i++) {
            all[i].classList.add('menu__item--transform');
        }

    }
    else {
        nav.classList.remove('nav__trasform');
        lista.classList.remove('menu__item--transform');
        logo.classList.remove('menu__logo--transform');
        item.classList.remove('menu__item--transform');
        let all = document.getElementsByClassName('menu__list--item');
        for (let i = 0; i < all.length; i++) {
            all[i].classList.remove('menu__item--transform');
        }
    }
    if (x >= 7510) {
        toUp.classList.add('to__up--animation');
    }
    else {
        toUp.classList.remove('to__up--animation');
    }
});