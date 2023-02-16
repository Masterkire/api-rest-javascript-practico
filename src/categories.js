async function getCategoriesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+API_KEY);
    const data = await res.json();

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