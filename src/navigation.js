window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location});

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')){
        searchPage();
    } else if (location.hash.startsWith('#movie=')){
        moviePage();
    } else if (location.hash.startsWith('#category=')){
        categoryPage();
    } else {
        homePage();
    }
}

function trendsPage() {
    console.log('TRENDS!!');
}

function searchPage() {
    console.log('Search!!');
}

function moviePage() {
    console.log('Movie!!');
}

function categoryPage() {
    console.log('Categories!!');

    bannerSlider.classList.add('inactive');
    row2.classList.add('inactive');
    row3.classList.add('inactive');
    row4.classList.add('inactive');
    leftButton.classList.add('inactive');
    leftButton.classList.remove('carusel-prev');
    rightButton.classList.add('inactive');
    rightButton.classList.remove('carusel-next');
    slider.classList.add('inactive');
    slider.classList.remove('contenedor-slider');
    h2ArtRow1.classList.add('h1');
    h2ArtRow1.firstChild.textContent = "Categorias";

    getCategoriesPreview();
}

function homePage() {
    console.log('Home!!');
    getTrendingMoviesPreview();
    getMoviesAccion();
    getMoviesAventura();
    getMoviesEstrenos();
    
}