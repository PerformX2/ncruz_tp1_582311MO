document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('toggle-dark');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('site-theme') || 'light';
  html.setAttribute('data-bs-theme', savedTheme);
  updateButton(savedTheme);

  btn.addEventListener('click', function () {
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('site-theme', newTheme);
    updateButton(newTheme);
  });

  function updateButton(theme) {
    if (theme === 'dark') {
      btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      btn.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
  }
});
