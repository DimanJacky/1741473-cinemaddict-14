// подробная информация про фильм
import dayjs from 'dayjs';

const getComment = (comment) => {
  return (
    `<li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-smile">
            </span>
            <div>
              <p class="film-details__comment-text">${comment.comment}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${comment.author}</span>
                <span class="film-details__comment-day">${dayjs(comment.date).format('YYYY/MM/DD HH:mm')}</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>`
  );
};

const emotions = [
  'smile',
  'sleeping',
  'puke',
  'angry',
];

const getEmotion = (emotion) => {
  return (
    `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emotion}" value="${emotion}">
            <label class="film-details__emoji-label" for="emoji-${emotion}">
              <img src="./images/emoji/${emotion}.png" width="30" height="30" alt="emoji">
            </label>`
  );
};

export const createPopupTemplate = (film) => {
  const {
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
    ? dayjs(film_info.release.date).format('DD MMMM YYYY')
    : '';
  const watchlistClass = user_details.watchlist ? ' film-details__control-input:checked' : '';
  const alreadyWatchedClass = user_details.already_watched ? ' film-details__control-input:checked' : '';
  const favoriteClass = user_details.favorite ? ' film-details__control-input:checked' : '';

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./${film_info.poster}" alt="">

          <p class="film-details__age">${film_info.age_rating}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${film_info.title}</h3>
              <p class="film-details__title-original">Original: ${film_info.alternative_title}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${film_info.total_rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${film_info.director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${film_info.writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${film_info.actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${releaseDate}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${film_info.runtime}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${film_info.release_country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${film_info.genre.length > 1 ? 'Genres' : 'Genre'}</td>
              <td class="film-details__cell">
                ${film_info.genre.map((item) => ('<span class="film-details__genre">' + item + '</span>')).join('')}
            </tr>
          </table>

          <p class="film-details__film-description">${film_info.description}</p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist${watchlistClass}">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
        <label for="watched" class="film-details__control-label film-details__control-label--watched${alreadyWatchedClass}">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite${favoriteClass}">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list">
        ${comments.map((item) => getComment(item)).join('')}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            ${emotions.map((emotion) => getEmotion(emotion)).join('')}
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};
