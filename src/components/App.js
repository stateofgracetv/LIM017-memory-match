// const App = () => {
//   const el = document.createElement('div');
//   el.className = 'App';
//   el.textContent = 'Hola mundo!';

//   return el;
// };

const shuffledArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const fetchData = () => {
  const result = fetch('./data/pokemon/pokemon.json')
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

      let turno = 0, pokemon1, pokemon2, moves = 0, matches = 0, faceA, backA, faceB, backB;
      
      function play() {
        if (turno < 2) {
          turno++;
          document.getElementById(this.getAttribute("id")).classList.add("hide");
          document.getElementById(this.getAttribute("id")).classList.remove("show");
      
          document.getElementById(this.getAttribute("pokemon-face-id")).classList.add("show");
          document.getElementById(this.getAttribute("pokemon-face-id")).classList.remove("hide");
          if (turno == 1) {
            pokemon1 = this.getAttribute("name");
            faceA = this.getAttribute("pokemon-face-id");
            backA = this.getAttribute("id");
          }
          if (turno == 2) {
            moves ++;
            pokemon2 = this.getAttribute("name");
            faceB = this.getAttribute("pokemon-face-id");
            backB = this.getAttribute("id");

            setTimeout(function isMatch() {
              if (pokemon1 == pokemon2) {
                matches ++;
              } else {
                flip_back(faceA, backA);
                flip_back(faceB, backB);
              }
              turno = 0;
              if (matches == 9) {
                document.getElementById('game').style.display = 'none';
                document.getElementById('game-over').style.display = 'flex';
              } else {
                return;
              }
            }, 1000);
            document.getElementById('moves').innerText = `Movimientos: ${moves}`;
          }
        }
      }
      
      function flip_back(idFace, idBack) {
        document.getElementById(idBack).classList.add("show");
        document.getElementById(idBack).classList.remove("hide");
      
        document.getElementById(idFace).classList.add("hide");
        document.getElementById(idFace).classList.remove("show");
      }
      
      const backClass = document.getElementsByClassName("back");
      for (let i = 0; i < backClass.length; i++) {
        backClass[i].addEventListener("click", play);
      }
      
    })
    .catch(error => {
      throw Error(error);
    })

    const resultHTML = document.createElement("div");
    resultHTML.innerHTML = result;
    return resultHTML;
}

//fetchData();
export default fetchData;
