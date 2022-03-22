import fetchData from './components/App.js';

document.getElementById('root').appendChild(fetchData());

//Transición de botón
const goToMenu = document.getElementById('play-button');
goToMenu.addEventListener('click', () => {
  document.getElementById('user-log').style.display = 'none';
  document.getElementById('navbar').style.display = 'none';
  document.getElementById('game-bar').style.display = 'grid';
  document.getElementById('menu').style.display = 'grid';
});

//Traer input de user nickname y mostrarlo
const username = document.getElementById('username');
const player = document.getElementById('player');
username.addEventListener('keyup', () => {
  player.innerText = `Hola, ${username.value}`;
})

//Funciones de la ventana modal/pop up
const openPopUpButton = document.getElementById('openPU');
const closePopUpButton = document.getElementById('closePU');
const overlay = document.getElementById('overlay');
const popUp = document.getElementById('popUp');

openPopUpButton.addEventListener('click', () => {
  popUp.classList.add('active');
  overlay.classList.add('active');
  popUp.classList.remove('inactive');
  overlay.classList.remove('inactive');
})

closePopUpButton.addEventListener('click', () => {
  popUp.classList.add('inactive');
  overlay.classList.add('inactive');
  popUp.classList.remove('active');
  overlay.classList.remove('active');
})

//Transición de botón
const goToGame = document.getElementById('repartir');
goToGame.addEventListener('click', () => {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('game').style.display = 'grid';
  if (username.value == '') {
    player.innerHTML = `Player: desconocidx`;
  } else {
    player.innerText = `Player: ${username.value}`;
  }
  document.getElementById('moves').style.display = 'grid';
});