export const createSortTemplate = (filmsCount) => {
  const hidden = filmsCount > 0 ? '' : ' visually-hidden';

  return `<ul class="sort${hidden}">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;
};
