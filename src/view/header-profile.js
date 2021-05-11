// звание пользователя
export const createHeaderProfileTemplate = (viewedFilms) => {
  let rating = '';
  if (viewedFilms > 0 && viewedFilms <= 10) {
    rating = 'novice';
  } else if (viewedFilms >= 11 && viewedFilms < 21) {
    rating = 'fun';
  } else if (viewedFilms >= 21) {
    rating = 'movie buff';
  }
  return `<section class="header__profile profile">
    <p class="profile__rating">${rating}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};
