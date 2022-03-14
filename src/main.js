import App from './components/App.js';

document.getElementById('root').appendChild(App());

const goToMenu = document.getElementById('play-button');
goToMenu.addEventListener('click', () => {
  document.getElementById('user-log').style.display = 'none';
  document.getElementById('navbar').style.display = 'none';
  document.getElementById('game-bar').style.display = 'grid';
  document.getElementById('menu').style.display = 'grid';
});



