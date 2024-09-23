function toggleMode() {
    const body = document.body;
    const icon = document.getElementById('mode-icon');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('bx-sun');
      icon.classList.add('bx-moon');
    } else {
      icon.classList.remove('bx-moon');
      icon.classList.add('bx-sun');
    }
  }