// контейнер фильмов определенной части
export const createFilmsListTemplate = (title, extra) => {
  const hiddenHeader = extra ? ' visually-hidden' : '';
  return `<section class="films-list">
      <h2 class="films-list__title${hiddenHeader}">${title}</h2>

      <div class="films-list__container">
      </div>

    </section>`;
};
