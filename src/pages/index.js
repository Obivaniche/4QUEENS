const searchButton = document.querySelector('.header__button_search');
if (searchButton) {
    const searchInput = document.querySelector('.header__label');
    const inputHeader = document.querySelector('.header__input');
    const content = document.querySelector('.content');
    const body = document.querySelector('.body')
    searchButton.addEventListener('click', function (e) {
        searchInput.classList.toggle('header__label_active');
        content.classList.toggle('content_lock');
        body.classList.toggle('body_lock');
        inputHeader.classList.toggle('header__input_active');
    });
};

const closePromo = document.querySelector('.header__promo-close-button');
if (closePromo) {
    const headerPromo = document.querySelector('.header__promo');
    closePromo.addEventListener('click', function (e) {
        headerPromo.classList.add('header__promo_hide');
    });
};

const buttonLike = document.querySelector('.product__button-like')
buttonLike.addEventListener('click', function (e) {
    buttonLike.classList.toggle('product__button-like_active');
});

const openTextElements = document.querySelectorAll('.information__arrow');
if (openTextElements.length > 0) {
    openTextElements.forEach(function (openText) {
        const articleText = openText.closest('.information__article').querySelector('.information__article-text');
        openText.addEventListener('click', function (e) {
            openText.classList.toggle('information__arrow_active');
            articleText.classList.toggle('information__article-text_active');
        });
    });
}