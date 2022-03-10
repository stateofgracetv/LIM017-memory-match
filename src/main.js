import App from './components/App.js';

document.getElementById('root').appendChild(App());

const goToMenu = document.getElementById('play-button');
goToMenu.addEventListener('click', () => {
  document.getElementById('user-log').style.display = 'none';
  document.getElementById('navbar').style.display = 'none';
  document.getElementById('menu').style.display = 'grid';
})

function voltear_cara_sello() {
  document.getElementById("voltearCara").style.transform = "rotateY(-180deg)";
  document.getElementById("voltearSello").style.transform = "rotateX(0deg) rotateY(0deg)";

  
}

document.getElementById("voltearCara").addEventListener("click", voltear_cara_sello);

function voltear_sello_cara() {
 
  document.getElementById("voltearCara").style.transform = "rotateX(0deg) rotateY(0deg)";
  document.getElementById("voltearSello").style.transform = "rotateY(180deg)";

}

document.getElementById("voltearSello").addEventListener("click", voltear_sello_cara);