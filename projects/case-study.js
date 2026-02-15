const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

function activateTab(key) {
  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.panel === key));
  panels.forEach((panel) => panel.classList.toggle('active', panel.dataset.panel === key));
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab.dataset.panel));
});

const values = document.querySelectorAll('.metric .value[data-target]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 900;
    const start = performance.now();

    function tick(ts) {
      const p = Math.min(1, (ts - start) / duration);
      const val = Math.round(target * p);
      el.textContent = `${prefix}${val}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
    observer.unobserve(el);
  });
}, { threshold: 0.35 });

values.forEach((el) => observer.observe(el));
activateTab('overview');
