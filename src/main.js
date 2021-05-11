import {createFilterTemplate} from './view/filter.js';
import {createSortTemplate} from './view/sort';
import {createFilmCardTemplate} from './view/film-card.js';
import {createHeaderProfileTemplate} from './view/header-profile';
import {createFilmsTemplate} from './view/films';
import {createShowMoreButtonTemplate} from './view/show-more';
import {createFilmsListTemplate} from './view/films-list';
import {createFooterTemplate} from './view/footer';
import {generateFilm} from './mock/film';
import {createNoFilmsListTemplate} from './view/no-films-list';
import {
  countFavorites,
  countHistory,
  countMoviesInside,
  countViewedFilms,
  countWatchlist
} from './mock/other';

const FILMS_COUNT = 6;
const INIT_FILMS_COUNT = 5;
const SHOW_MORE_COUNT = 5;

const films = new Array(FILMS_COUNT).fill().map((item, i) => generateFilm(i)); // Генерация массива фильмов

const render = (container, template, place) => { // Функция render
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(siteHeaderElement, createHeaderProfileTemplate(countViewedFilms), 'beforeend'); // Создание названия пользователя в шапке
render(siteMainElement, createFilterTemplate(countWatchlist, countHistory, countFavorites), 'afterbegin');
render(siteMainElement, createSortTemplate(FILMS_COUNT), 'beforeend');
render(siteMainElement, createFilmsTemplate(), 'beforeend'); // Создание блока с фильмами

const filmsMainElement = document.querySelector('.films');

if (FILMS_COUNT > 0) {
  render(filmsMainElement, createFilmsListTemplate('All movies. Upcoming', true), 'beforeend');
  const filmsListElement = filmsMainElement.querySelector('.films-list');
  if (FILMS_COUNT > 5) {
    render(filmsListElement, createShowMoreButtonTemplate(), 'beforeend'); // Создание кнопки показать далее
  }
} else {
  render(filmsMainElement, createNoFilmsListTemplate(), 'beforeend');
}

const filmsListContainer = filmsMainElement.querySelectorAll('.films-list__container')[0];

let indexFilm = 0;
if (filmsListContainer) {
  for (let i = indexFilm; i < INIT_FILMS_COUNT; i++) { // Наполнение блока фильмами
    render(filmsListContainer, createFilmCardTemplate(films[i]), 'beforeend');
    indexFilm = i;
  }
}

render(siteMainElement, createFooterTemplate(countMoviesInside), 'afterend');

const showMoreButton = filmsMainElement.querySelector('.films-list__show-more');

showMoreButton.addEventListener('click', () => { // Клик по кнопке Показать далее
  for (let i = 0, j = indexFilm + 1; i < SHOW_MORE_COUNT; i++, j++) {
    if (j === FILMS_COUNT) {
      const buttonShowMore = filmsMainElement.querySelector('.films-list__show-more');
      buttonShowMore.remove();
      break;
    }
    render(filmsListContainer, createFilmCardTemplate(films[j]), 'beforeend');
    indexFilm = j;
  }
});
