document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const languageToggle = document.querySelector('.language-toggle');
languageToggle?.addEventListener('click', () => {
  const chinese = document.documentElement.classList.toggle('chinese');
  document.documentElement.lang = chinese ? 'zh-CN' : 'en';
  languageToggle.innerHTML = chinese ? '<span class="active-label">中</span> / <span>EN</span>' : '<span>中</span> / <span class="active-label">EN</span>';
});
