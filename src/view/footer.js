export const createFooterTemplate = (logo, statistics) => {
  return `<footer class="footer">
  <section class="footer__logo logo logo--smaller">${logo}</section>
  <section class="footer__statistics">
    <p>${statistics}</p>
  </section>
</footer>`;
};
