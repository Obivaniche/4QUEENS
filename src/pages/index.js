import '../pages/index.css';

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

const closePromo = document.querySelector('.header__promo-close-button');
if (closePromo) {
    const headerPromo = document.querySelector('.header__promo');
    closePromo.addEventListener('click', function(e) {
        headerPromo.classList.add('header__promo_hide');
    });
};