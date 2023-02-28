const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-type': 'aplication/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

// Utils

function creatMovies(movies, container) {
    container.innerHTML = "";

    movies.forEach(movie => {

        /* Populares */
        const span = document.createElement('span');
        const imgAccion = document.createElement('img');

        span.classList.add('content-img');
        imgAccion.setAttribute('src', 'https://www.themoviedb.org/t/p/original/' + movie.poster_path);

        span.appendChild(imgAccion);
        container.appendChild(span);
        
    });
}

// Llamados a la API

async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    let count = 0;

    const movies = data.results;
    console.log(movies);

    carouselIndicators.innerHTML = "";
    const button1 = document.createElement('button');
    button1.setAttribute('type', 'button');
    button1.setAttribute('data-bs-target', '#carouselExampleIndicators');
    button1.setAttribute('data-bs-slide-to', 20);
    button1.classList.add('active');
    button1.setAttribute('aria-current', 'true');
    button1.setAttribute('area-label', 'slide ' + (21));
    carouselIndicators.appendChild(button1);
    carouselInner.innerHTML = "";
    const carouselItem1 = document.createElement('div');
    const picture1 = document.createElement('picture');
    const source1 = document.createElement('source');
    const img1 = document.createElement('img');

    carouselItem1.classList.add('carousel-item', 'active');
    source1.setAttribute('media', '(max-width: 768px)');
    source1.setAttribute('srcset', 'https://www.themoviedb.org/t/p/original/' + movies[0].poster_path);
    img1.setAttribute('src', 'https://www.themoviedb.org/t/p/original/' + movies[0].backdrop_path);
    img1.setAttribute('alt', movies[0].title);
    img1.classList.add('d-block', 'w-100');

    picture1.appendChild(source1);
    picture1.appendChild(img1);
    carouselItem1.appendChild(picture1);
    carouselInner.appendChild(carouselItem1);


    movies.forEach(movie => {
        const carouselItem = document.createElement('div');
        const picture = document.createElement('picture');
        const source = document.createElement('source');
        const img = document.createElement('img');
        const button = document.createElement('button');

        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-target', '#carouselExampleIndicators');
        button.setAttribute('data-bs-slide-to', count);
        button.setAttribute('area-label', 'slide ' + (count + 1));

        carouselItem.classList.add('carousel-item');
        source.setAttribute('media', '(max-width: 768px)');
        source.setAttribute('srcset', 'https://www.themoviedb.org/t/p/original/' + movie.poster_path);
        img.setAttribute('src', 'https://www.themoviedb.org/t/p/original/' + movie.backdrop_path);
        img.setAttribute('alt', movie.title);
        img.classList.add('d-block', 'w-100');

        carouselIndicators.appendChild(button);
        picture.appendChild(source);
        picture.appendChild(img);
        carouselItem.appendChild(picture);
        carouselInner.appendChild(carouselItem);

        carouselIndicators.firstElementChild.setAttribute('area-current', 'true');
        carouselIndicators.firstElementChild.classList.add('active');
        carouselItem.firstElementChild.classList.add('active');
        count++;

        /* Populares */
        
        /* const span = document.createElement('span');
        const imgPopulares = document.createElement('img');

        span.classList.add('content-img');
        imgPopulares.setAttribute('src', 'https://www.themoviedb.org/t/p/original/' + movie.poster_path);

        span.appendChild(imgPopulares);
        populares.appendChild(span); */

    });

    creatMovies(movies, populares);
}

async function getMoviesAccion() {
    const {data} = await api('discover/movie', {
        params: {
            with_genres: '28',
        },
    });
    let count = 0;

    const movies = data.results;

    creatMovies(movies, accion);
}

async function getMoviesAventura() {
    const {data} = await api('discover/movie', {
        params: {
            with_genres: '12',
        },
    });

    const movies = data.results;

    creatMovies(movies, aventura);

}

async function getMoviesEstrenos() {
    const {data} = await api('discover/tv');

    const movies = data.results;

    creatMovies(movies, estrenos);

}

async function getCategoriesPreview() {
    const {data} = await api('genre/movie/list');

    const categories = data.genres;
    /* console.log(categories); */

    contentCategorias.innerHTML = "";

    categories.forEach(category => {
        
        const contentCategory = document.createElement('div');
        const categoryTitle = document.createElement('h3');
        const categoryTitleText = document.createTextNode(category.name);
        
        contentCategory.classList.add('content-category');
        contentCategory.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`;
        });
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', category.id);

        categoryTitle.appendChild(categoryTitleText);
        contentCategory.appendChild(categoryTitle);
        contentCategorias.appendChild(contentCategory);
    });
}

async function getMoviesCategory(id, name) {
    const {data} = await api('discover/movie', {
        params: {
            with_genres: id,
        },
    });
    const movies = data.results;
    h2artRowCat.innerHTML = decodeURI(name);

    creatMovies(movies, categoryMovie);
    
}

async function getMoviesBySearch(query) {
    const {data} = await api('search/multi', {
        params: {
            query,
        },
    });
    const movies = data.results;
    h2artRowCat.innerHTML = decodeURI(query);

    creatMovies(movies, categoryMovie);
}

async function getTrendingMovies() {
    const {data} = await api('trending/movie/day');
    let count = 0;

    const movies = data.results;

    creatMovies(movies, categoryMovie);
}

// crear botones personalizados

leftButton.addEventListener('click', () => {
    slider.scrollLeft -= 248;
});

rightButton.addEventListener('click', () => {
    slider.scrollLeft += 248;
});

leftButtonAccion.addEventListener('click', () => {
    sliderAccion.scrollLeft -= 248;
});

rightButtonAccion.addEventListener('click', () => {
    sliderAccion.scrollLeft += 248;
});

leftButtonAventura.addEventListener('click', () => {
    sliderAventura.scrollLeft -= 248;
});

rightButtonAventura.addEventListener('click', () => {
    sliderAventura.scrollLeft += 248;
});

leftButtonEstreno.addEventListener('click', () => {
    sliderEstrenos.scrollLeft -= 216;
});

rightButtonEstreno.addEventListener('click', () => {
    sliderEstrenos.scrollLeft += 216;
});
