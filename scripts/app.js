const mapButt = document.querySelector('.but__map');

const mapButtFunction = () => {

    const map = document.querySelector('.info__conteiner');
    map.classList.toggle('map_down');
}

mapButt.addEventListener("click", mapButtFunction);