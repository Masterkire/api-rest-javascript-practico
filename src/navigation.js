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

    location.hash
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
}

function homePage() {
    console.log('Home!!');
    getTrendingMoviesPreview();
    getMoviesAccion();
    getMoviesAventura();
    getMoviesEstrenos();
}