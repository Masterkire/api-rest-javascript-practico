const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-type': 'aplication/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

async function getCategoriesPreview() {
    const {data} = await api('genre/movie/list');

    const categories = data.genres;
    console.log(categories);
    categories.forEach(category => {
        const contCategories = document.querySelector('.content-categorias');
        
        const contentCategory = document.createElement('div');
        contentCategory.classList.add('content-category');
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        contentCategory.appendChild(categoryTitle);
        contCategories.appendChild(contentCategory);

    });
}

getCategoriesPreview();