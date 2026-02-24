const navButtons = document.querySelectorAll('.tab-btn[data-nav]');

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.nav;
    if (!target) return;
    window.location.href = target;
  });
});
