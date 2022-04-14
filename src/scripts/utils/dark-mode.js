const content = document.getElementsByTagName('body');
const darkMode = document.getElementById('dark-change');

darkMode.addEventListener('click', () => {
  darkMode.classList.toggle('active');
  content.classList.toggle('night');
});

export default darkMode;
