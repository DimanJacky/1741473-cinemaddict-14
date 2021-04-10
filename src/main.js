import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createHeaderProfileTemplate} from './view/header-profile';
import {createShowMoreButtonTemplate} from './view/show-more';
import {createPopupTemplate} from './view/popup';

const FILMS_COUNT = 5;
const EXTRA_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');

render(siteMainElement, createSiteMenuTemplate(), 'afterbegin');

const siteHeaderElement = document.querySelector('.header');

render(siteHeaderElement, createHeaderProfileTemplate(), 'beforeend');

const filmsListElement = document.querySelector('.films-list');

const filmsListContainer = filmsListElement.querySelector('.films-list__container');

for (let i = 0; i < FILMS_COUNT; i++) {
  render(filmsListContainer, createFilmCardTemplate(), 'beforeend');
}

render(filmsListElement, createShowMoreButtonTemplate(), 'beforeend');

const topRatedContainer = document.querySelectorAll('.films-list--extra .films-list__container')[0];

for (let i = 0; i < EXTRA_COUNT; i++) {
  render(topRatedContainer, createFilmCardTemplate(), 'beforeend');
}

const mostCommentedContainer = document.querySelectorAll('.films-list--extra .films-list__container')[1];

for (let i = 0; i < EXTRA_COUNT; i++) {
  render(mostCommentedContainer, createFilmCardTemplate(), 'beforeend');
}

const footerElement = document.querySelector('.footer');

// render(footerElement, createPopupTemplate(), 'afterend');
