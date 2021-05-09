// карточка фильма
import dayjs from 'dayjs';
import {shortDescription} from '../mock/film';

export const createFilmCardTemplate = (film) => {
  const {
    id = 0,
    comments = [],
    film_info = {
      actors: [],
      age_rating: 0,
      alternative_title: '',
      description: '',
      director: '',
      genre: [],
      poster: '',
      release: {
        date: '',
        release_country: '',
      },
      runtime: '',
      title: '',
      total_rating: '',
      writers: [],
    },
    user_details = {
      already_watched: false,
      favorite: false,
      watching_date: '',
      watchlist: false,
    },
  } = film;

  const releaseDate = film_info.release.date
    ? dayjs(film_info.release.date).format('YYYY')
    : '';
  const watchlistClass = user_details.watchlist ? ' film-card__controls-item--active' : '';
  const alreadyWatchedClass = user_details.already_watched ? ' film-card__controls-item--active' : '';
  const favoriteClass = user_details.favorite ? ' film-card__controls-item--active' : '';

  return `<article class="film-card">
          <h3 class="film-card__title" data-value="${id}">${film_info.title}</h3>
          <p class="film-card__rating">${film_info.total_rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${releaseDate}</span>
            <span class="film-card__duration">${film_info.runtime}</span>
            <span class="film-card__genre">${film_info.genre.join(', ')}</span>
          </p>
          <img src="./${film_info.poster}" alt="" class="film-card__poster" data-value="${id}">
          <p class="film-card__description">${shortDescription(film_info.description)}</p>
          <a class="film-card__comments">${comments.length} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist${watchlistClass}" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched${alreadyWatchedClass}" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite${favoriteClass}" type="button">Mark as favorite</button>
          </div>
        </article>`;
};
