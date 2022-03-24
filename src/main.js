import fetchData from "./components/App.js";
import pokemon from "./data/pokemon/pokemon.js";

function buildCards() {
  const resultCards = fetchData(pokemon); // retorna un arreglo
  let HTML_Cards = "";
  resultCards.forEach((value) => {
    HTML_Cards +=
      '<div class="card">' +
      '<div class="face hide" id="face_' + value.card_id + "-" + value.card_index + '" pokemon-back-id="back_' + value.card_id + "-" + value.card_index + '" style="border: ' + value.card_bgColor + ' solid 3px;background-color: white"><img src="' + value.card_image + '"  alt="'+ value.card_id +'" class="image-card"/></div>' +
      '<div class="back show" id="back_' + value.card_id + "-" + value.card_index + '" pokemon-face-id="face_' + value.card_id + "-" + value.card_index + '" name="'+ value.card_id +'" ><img src="img/card-back.png" class="image-card" /></div>' +
      "</div>";
      
  });
  document.querySelector("#allCards").insertAdjacentHTML("afterbegin", HTML_Cards);
  const backClass = document.getElementsByClassName("back");
  for (let i = 0; i < backClass.length; i++) {
    backClass[i].addEventListener("click", play);
  }
}



//Transición de botón
const goToMenu = document.getElementById("play-button");
goToMenu.addEventListener("click", () => {
  document.getElementById("user-log").style.display = "none";
  document.getElementById("navbar").style.display = "none";
  document.getElementById("game-bar").style.display = "grid";
  document.getElementById("menu").style.display = "grid";
});

//Traer input de user nickname y mostrarlo
const username = document.getElementById("username");
const player = document.getElementById("player");
username.addEventListener("keyup", () => {
  player.innerText = `Hola, ${username.value}`;
});

//Funciones de la ventana modal/pop up
const openPopUpButton = document.getElementById("openPU");
const closePopUpButton = document.getElementById("closePU");
const overlay = document.getElementById("overlay");
const popUp = document.getElementById("popUp");

openPopUpButton.addEventListener("click", () => {
  popUp.classList.add("active");
  overlay.classList.add("active");
  popUp.classList.remove("inactive");
  overlay.classList.remove("inactive");
});

closePopUpButton.addEventListener("click", () => {
  popUp.classList.add("inactive");
  overlay.classList.add("inactive");
  popUp.classList.remove("active");
  overlay.classList.remove("active");
});

//Transición de botón
const goToGame = document.getElementById("repartir");
goToGame.addEventListener("click", () => {
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "grid";
  if (username.value == "") {
    player.innerHTML = `Player: desconocidx`;
  } else {
    player.innerText = `Player: ${username.value}`;
    document.getElementById("finalMessage") = `¡Felicidades ${player}, has ganado este PokeMatch!`;
  }
  document.getElementById("moves").style.display = "grid";
});

function flip_face(idFace, idBack) {
  document.getElementById(idFace).classList.add("show");
  document.getElementById(idFace).classList.remove("hide");

  document.getElementById(idBack).classList.add("hide");
  document.getElementById(idBack).classList.remove("show");
}

function flip_back(idFace, idBack) {
  document.getElementById(idBack).classList.add("show");
  document.getElementById(idBack).classList.remove("hide");

  document.getElementById(idFace).classList.add("hide");
  document.getElementById(idFace).classList.remove("show");
}

function win() {
  document.getElementById("game").style.display = "none";
  document.getElementById("game-over").style.display = "flex";
}

let turn = 0, pokemon1, pokemon2, moves = 0, matches = 0, faceA, backA, faceB, backB;
function play() {
  if (turn < 2) {
    turn++;
    if (turn == 1) {
      pokemon1 = this.getAttribute("name");
      faceA = this.getAttribute("pokemon-face-id");
      backA = this.getAttribute("id");
      flip_face(faceA, backA);
    }
    if (turn == 2) {
      moves++;
      pokemon2 = this.getAttribute("name");
      faceB = this.getAttribute("pokemon-face-id");
      backB = this.getAttribute("id");
      flip_face(faceB, backB);
      setTimeout(() => {
        if (pokemon1 == pokemon2) {
          matches++;
        } else {
          flip_back(faceA, backA);
          flip_back(faceB, backB);
        }
        turn = 0;
        if (matches == 9) {
          win();
        } else {
          return;
        }
      }, 1000);
      document.getElementById("moves").innerText = `Movimientos: ${moves}`;
    }
  }
}

buildCards();