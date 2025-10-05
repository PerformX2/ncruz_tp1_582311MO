document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('toggle-dark');
  if (!btn) return;

  const saved = localStorage.getItem('site-theme');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    btn.textContent = 'LIGHT';
  } else {
    document.body.classList.remove('dark-mode');
    btn.textContent = 'DARK';
  }

  btn.addEventListener('click', function () {
    const isDark = document.body.classList.toggle('dark-mode');

    if (isDark) {
      btn.textContent = 'LIGHT';
      document.setItem('site-theme', 'dark');
    } else {
      btn.textContent = 'DARK';
      document.setItem('site-theme', 'light');
    }
  });
});
