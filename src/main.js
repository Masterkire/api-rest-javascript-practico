const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-type': 'aplication/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    let count = 0;

    const movies = data.results;
    console.log(movies);

    carouselIndicators.innerHTML = "";
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-target', '#carouselExampleIndicators');
    button.setAttribute('data-bs-slide-to', count);
    button.setAttribute('area-label', 'slide ' + (count + 1));
    carouselInner.innerHTML = "";
    const carouselItem = document.createElement('div');
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    const img = document.createElement('img');
    const button = document.createElement('button');


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
        const span = document.createElement('span');
        const imgPopulares = document.createElement('img');

        span.classList.add('popular');
        span.classList.add('content-img');
        imgPopulares.setAttribute('src', 'https://www.themoviedb.org/t/p/original/' + movie.poster_path);

        span.appendChild(imgPopulares);
        populares.appendChild(span);

    });
}

async function getMoviesAccion() {
    const {data} = await api('trending/movie/day');
    let count = 0;

    const movies = data.results;
    
    accion.innerHTML = "";

    movies.forEach(movie => {

        /* Populares */
        const span = document.createElement('span');
        const imgAccion = document.createElement('img');

        span.classList.add('content-img');
        imgAccion.setAttribute('src', 'https://www.themoviedb.org/t/p/original/' + movie.poster_path);

        span.appendChild(imgAccion);
        accion.appendChild(span);
        
    });
}

async function getMoviesAventura() {
    const {data} = await api('trending/movie/day');

    const movies = data.results;

    aventura.innerHTML = "";

    movies.forEach(movie => {

        /* Populares */
        const span = document.createElement('span');
        const imgAventura = document.createElement('img');

        span.classList.add('content-img');
        imgAventura.setAttribute('src', 'https://www.themoviedb.org/t/p/original/' + movie.poster_path);

        span.appendChild(imgAventura);
        aventura.appendChild(span);

    });
}

async function getMoviesEstrenos() {
    const {data} = await api('trending/movie/day');

    const movies = data.results;

    estrenos.innerHTML = "";

    movies.forEach(movie => {

        /* Populares */
        const span = document.createElement('span');
        const imgEstrenos = document.createElement('img');

        span.classList.add('content-img');
        imgEstrenos.setAttribute('src', 'https://www.themoviedb.org/t/p/original/' + movie.poster_path);

        span.appendChild(imgEstrenos);
        estrenos.appendChild(span);;
    
    });
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
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', category.id);
        

        categoryTitle.appendChild(categoryTitleText);
        contentCategory.appendChild(categoryTitle);
        contentCategorias.appendChild(contentCategory);
    });
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
