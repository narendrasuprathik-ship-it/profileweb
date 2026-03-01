const pills = Array.from(document.querySelectorAll('.landing-v2-pill'));

window.addEventListener('load', () => {
  document.body.classList.add('landing-ready');
  pills.forEach((pill, index) => {
    pill.style.setProperty('--delay', `${index * 70}ms`);
    pill.classList.add('show');
  });
});
