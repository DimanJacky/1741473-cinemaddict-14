import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createHeaderProfileTemplate} from './view/header-profile';
import {createShowMoreButtonTemplate} from './view/show-more';
import {createPopupTemplate} from './view/popup';
import {createFilmsListTemplate} from './view/films-list';
import {createFooterTemplate} from './view/footer';

const FILMS_COUNT = 5;
const EXTRA_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');

render(siteMainElement, createSiteMenuTemplate(), 'afterbegin');

const siteHeaderElement = document.querySelector('.header');

render(siteHeaderElement, createHeaderProfileTemplate(), 'beforeend');

render(siteMainElement, '<section class="films"></section>', 'beforeend');

const filmsMainElement = document.querySelector('.films');

render(filmsMainElement, createFilmsListTemplate('All movies. Upcoming', '', ' visually-hidden'), 'beforeend');

render(filmsMainElement, createFilmsListTemplate('Top rated', ' films-list--extra', ''), 'beforeend');

render(filmsMainElement, createFilmsListTemplate('Most commented', ' films-list--extra', ''), 'beforeend');

const filmsListElement = filmsMainElement.querySelector('.films-list');

render(filmsListElement, createShowMoreButtonTemplate(), 'beforeend');

const filmsListContainer = filmsMainElement.querySelectorAll('.films-list__container')[0];

for (let i = 0; i < FILMS_COUNT; i++) {
  render(filmsListContainer, createFilmCardTemplate(), 'beforeend');
}

const topRatedContainer = document.querySelectorAll('.films-list__container')[1];

for (let i = 0; i < EXTRA_COUNT; i++) {
  render(topRatedContainer, createFilmCardTemplate(), 'beforeend');
}

const mostCommentedContainer = document.querySelectorAll('.films-list__container')[2];

for (let i = 0; i < EXTRA_COUNT; i++) {
  render(mostCommentedContainer, createFilmCardTemplate(), 'beforeend');
}

render(siteMainElement, createFooterTemplate('Cinemaddict', '130 291 movies inside'), 'afterend');

// render(footerElement, createPopupTemplate(), 'afterend');
