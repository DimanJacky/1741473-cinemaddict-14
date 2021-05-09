// контейнер фильмов определенной части
export const createFilmsListTemplate = (title, filmsExtra, hiddenHeader) => {
  return `<section class="films-list${filmsExtra}">
      <h2 class="films-list__title${hiddenHeader}">${title}</h2>

      <div class="films-list__container">
      </div>

    </section>`;
};
