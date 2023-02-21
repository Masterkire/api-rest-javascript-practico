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
    } else if (location.hash.startsWith('#series=')){
        seriesPage()
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

function seriesPage() {
    console.log('Series!!');
}

function categoryPage() {
    console.log('Categories!!');

    contentCategorias.classList.add('d-flex');
    contentCategorias.classList.remove('inactive');
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
    artRow1.classList.add('content-h1');

    getCategoriesPreview();
}

function homePage() {
    console.log('Home!!');

    contentCategorias.classList.remove('d-flex');
    contentCategorias.classList.add('inactive');
    bannerSlider.classList.remove('inactive');
    row2.classList.remove('inactive');
    row3.classList.remove('inactive');
    row4.classList.remove('inactive');
    leftButton.classList.remove('inactive');
    leftButton.classList.add('carusel-prev');
    rightButton.classList.remove('inactive');
    rightButton.classList.add('carusel-next');
    slider.classList.remove('inactive');
    slider.classList.add('contenedor-slider');
    h2ArtRow1.classList.remove('h1');
    h2ArtRow1.firstChild.textContent = "Populares en MasterCinema";
    artRow1.classList.remove('content-h1');


    getTrendingMoviesPreview();
    getMoviesAccion();
    getMoviesAventura();
    getMoviesEstrenos();
    
}