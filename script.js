(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#nav-links');
  if (!toggle || !menu) return;
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '關閉導覽選單' : '開啟導覽選單');
    menu.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  const desktop = window.matchMedia('(min-width: 761px)');
  desktop.addEventListener('change', (event) => { if (event.matches) setMenu(false); });
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
