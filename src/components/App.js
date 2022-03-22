import shuffledArray from './ShuffledArray.js';

function fetchData(data_pokemon) {
  const result = fetch(data_pokemon)
  .then(response => {
    if (response.ok === false) {
      throw Error('Ha ocurrido un error');
    }
    return response.json();
  })
  .then(pokemon => {
    const copyCards = [...pokemon.items, ...pokemon.items];
    const cards = shuffledArray(copyCards);
    const allCards = cards.map((card, index) => {
      return `
      <div class="card" style="height:100px">
        <div class="face hide" id="face_${card.id}-${index}" pokemon-back-id="back_${card.id}-${index}" style="border: ${card.bgColor} solid 3px;background-color: white"><img src="${card.image}"  alt="${card.id}" class="image-card"/></div>
        <div class="back show" id="back_${card.id}-${index}" pokemon-face-id="face_${card.id}-${index}" name="${card.id}" ><img src="img/card-back.png" class="image-card" /></div>
      </div>
      `;
    })
    .join('');
    document.querySelector("#allCards").insertAdjacentHTML("afterbegin", allCards);
    
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
          moves ++;
          pokemon2 = this.getAttribute("name");
          faceB = this.getAttribute("pokemon-face-id");
          backB = this.getAttribute("id");
          flip_face(faceB, backB);

          setTimeout(function isMatch() {
            if (pokemon1 == pokemon2) {
              matches ++;
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
          document.getElementById('moves').innerText = `Movimientos: ${moves}`;
        }
      }
    }

    function win() {
      document.getElementById('game').style.display = 'none';
      document.getElementById('game-over').style.display = 'flex';
    }

    const backClass = document.getElementsByClassName("back");
    for (let i = 0; i < backClass.length; i++) {
      backClass[i].addEventListener("click", play);
    }

  })
  
  return result;
}

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

export default fetchData;