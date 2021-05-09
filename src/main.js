import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createHeaderProfileTemplate} from './view/header-profile';
import {createFilmsTemplate} from './view/films';
import {createShowMoreButtonTemplate} from './view/show-more';
import {createFilmsListTemplate} from './view/films-list';
import {createFooterTemplate} from './view/footer';
import {createPopupTemplate} from './view/popup';
import {createStatsTemplate} from './view/stats';
import {generateFilm} from './mock/film';
import {createNoFilmsListTemplate} from './view/no-films-list';

const FILMS_COUNT = 8;

const films = new Array(FILMS_COUNT).fill().map((item, i) => generateFilm(i)); // Генерация массива фильмов

const render = (container, template, place) => { // Функция render
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');

render(siteMainElement, createSiteMenuTemplate(), 'afterbegin'); // Создание меню

const siteHeaderElement = document.querySelector('.header');

render(siteHeaderElement, createHeaderProfileTemplate(), 'beforeend'); // Создание названия пользователя в шапке

render(siteMainElement, createFilmsTemplate(), 'beforeend'); // Создание блока с фильмами

const filmsMainElement = document.querySelector('.films');

if (FILMS_COUNT > 0) {
  render(filmsMainElement, createFilmsListTemplate('All movies. Upcoming', '', ' visually-hidden'), 'beforeend');
} else {
  render(filmsMainElement, createNoFilmsListTemplate(), 'beforeend');
}

const filmsListElement = filmsMainElement.querySelector('.films-list');

if (FILMS_COUNT > 0) {
  render(filmsListElement, createShowMoreButtonTemplate(), 'beforeend'); // Создание кнопки показать далее
}

const filmsListContainer = filmsMainElement.querySelectorAll('.films-list__container')[0];

for (let i = 0; i < FILMS_COUNT; i++) { // Наполнение блока фильмами
  render(filmsListContainer, createFilmCardTemplate(films[i]), 'beforeend');
}

render(siteMainElement, createFooterTemplate('Cinemaddict', '130 291 movies inside'), 'afterend');

// Открытие и закрытие дополнительной информации

const footerElement = document.querySelector('.footer');

filmsMainElement.addEventListener('click', (event) => {
  if (event.target.className === 'film-card__poster' || event.target.className === 'film-card__title') {

    const detailsElement = document.querySelector('.film-details');
    if (!detailsElement) {
      render(footerElement, createPopupTemplate(films[event.target.dataset.value - 1]), 'afterend');
    }
    const detailsFilmElement = document.querySelector('.film-details');
    if (detailsFilmElement) {
      const filmDetailsCloseBtn = document.querySelector('.film-details__close-btn');
      if (filmDetailsCloseBtn) {
        filmDetailsCloseBtn.addEventListener('click', () => {
          detailsFilmElement.remove();
        });
      }
    }
  }
});

// Открытие статистики

const mainNavigationAdditional = document.querySelector('.main-navigation__additional');

mainNavigationAdditional.addEventListener('click', () => {
  const filmsElement = document.querySelector('.films');
  const sortElement = document.querySelector('.sort');
  if (filmsElement && sortElement) {
    filmsElement.remove();
    sortElement.remove();
  }
  render(siteMainElement, createStatsTemplate(), 'beforeend');
});
