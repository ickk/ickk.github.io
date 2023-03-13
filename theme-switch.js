'use strict';
const html = document.querySelector('html');

window.addEventListener('DOMContentLoaded', function() {
  // Add the theme-switch element.
  document.body.insertAdjacentHTML('afterbegin',
    '<theme-switch>' +
      '<label for=theme-light>light-theme</label>' +
      '<input type=radio id=theme-light name=theme value=light>' +
      '<label for=theme-dark>dark-theme</label>' +
      '<input type=radio id=theme-dark name=theme value=dark>' +
    '</theme-switch>'
  );
  // Look for theme setting in local storage or fallback to OS theme.
  if (localStorage.getItem('theme'))
    html.dataset.theme = localStorage.getItem('theme');
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    html.dataset.theme = 'dark'
  // Select corresponding radio input.
  if (html.dataset.theme === 'dark')
    document.querySelector('theme-switch input[value=dark]').checked = true;
  else
    document.querySelector('theme-switch input[value=light]').checked = true;
  // Bind event listeners for explicit theme selection.
  document.querySelectorAll('theme-switch input[type=radio]').forEach(
    input => input.addEventListener('change', (event) => {
      html.dataset.theme = event.target.value;
      localStorage.setItem('theme', html.dataset.theme);
    }, true)
  );
});
