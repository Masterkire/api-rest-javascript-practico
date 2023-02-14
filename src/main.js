async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key='+API_KEY);
    const data = await res.json();
    let count = 0;

    const movies = data.results;
    movies.forEach(movie => {
        const carouselItem = document.createElement('div');
        const picture = document.createElement('picture');
        const source = document.createElement('source');
        const img = document.createElement('img');
        const carouselInner = document.querySelector('.carousel-inner');
        const carouselIndicators = document.querySelector('.carousel-indicators');
        const button = document.createElement('button');
        const peli1 = movies[0];
        

        console.log(count);
        

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
    });
}

getTrendingMoviesPreview();