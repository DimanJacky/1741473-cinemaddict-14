export const createFooterTemplate = (statistics) => {
  return `<footer class="footer">
  <section class="footer__logo logo logo--smaller">Cinemaddict</section>
  <section class="footer__statistics">
    <p>${statistics.toLocaleString()} movies inside</p>
  </section>
</footer>`;
};
