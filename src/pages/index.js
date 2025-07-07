const searchButton = document.querySelector('.header__button_search');
if (searchButton) {
    const searchInput = document.querySelector('.header__label');
    const content = document.querySelector('.content');
    const body = document.querySelector('.body')
    searchButton.addEventListener('click', function (e) {
        searchInput.classList.toggle('header__label_active');
        content.classList.toggle('content_lock');
        body.classList.toggle('body_lock');
    });
};