const App = () => {
  const el = document.createElement('div');
  el.className = 'App';
  el.textContent = 'Hola mundo!';

  return el;
};

const shuffledArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}



let turno = 0, carta1, carta2, idcarta1Cara, idcarta1Sello, idcarta2Cara, idcarta2Sello;

function fetchData() {
  fetch('./data/pokemon/pokemon.json')
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
        <div class="face hide" id="flip-face_${card.id}-${index}" pokemon-back-id="flip-back_${card.id}-${index}" style="border: ${card.bgColor} solid 3px;background-color: white"><img src="${card.image}"  alt="${card.id}" class="image-card"/></div>
        <div class="back show" id="flip-back_${card.id}-${index}" name="${card.id}" pokemon-face-id="flip-face_${card.id}-${index}" ><img src="img/card-back.png" class="image-card" /></div>
        </div>
        `;
      })   //HE CREADO 2 ID PARA TENER UN ID QUE MOSTRAR CARTA Y OTRO QUE OCULTAR
        .join('');
      document.querySelector("#allCards").insertAdjacentHTML("afterbegin", allCards);


      function flip_back_face() { //GIRAR SELLO CARA
        if (turno < 2) {
          turno++; // turno = turno + 1;
          document.getElementById(this.getAttribute("id")).classList.add("hide"); //agrega una clase
          document.getElementById(this.getAttribute("id")).classList.remove("show"); //elimina una clase

          document.getElementById(this.getAttribute("pokemon-face-id")).classList.add("show"); //agrega una clase
          document.getElementById(this.getAttribute("pokemon-face-id")).classList.remove("hide"); //elimina una clase
          if (turno == 1) {
            carta1 = this.getAttribute("name");
            idcarta1Cara = this.getAttribute("pokemon-face-id");
            idcarta1Sello = this.getAttribute("id");
          }
          if (turno == 2) {
            carta2 = this.getAttribute("name");
            idcarta2Cara = this.getAttribute("pokemon-face-id");
            idcarta2Sello = this.getAttribute("id");
            //comparamos cartas

            setTimeout(() => {
              if (carta1 == carta2) {
                alert("IGUALES :p");
                //puntaje ++;
                //if puntaje == 9 si: alert("ganaste");
                document.getElementById(idcarta1Cara).removeEventListener("click", flip_face_back);
                document.getElementById(idcarta2Cara).removeEventListener("click", flip_face_back);
              } else {
                alert("No son iguales :(");
                flip_back_face_demo(idcarta1Cara, idcarta1Sello, idcarta2Cara, idcarta2Sello);
              }
              turno = 0;
            }, 1000);

          }

        }


      }

      function flip_face_back() { //GIRAR CARA SELLO

        document.getElementById(this.getAttribute("pokemon-back-id")).classList.add("show"); //agrega una clase
        document.getElementById(this.getAttribute("pokemon-back-id")).classList.remove("hide"); //elimina una clase

        document.getElementById(this.getAttribute("id")).classList.add("hide"); //agrega una clase
        document.getElementById(this.getAttribute("id")).classList.remove("show"); //elimina una clase



      }

      function flip_back_face_demo(idfacecard_1, idbackcard_1, idfacecard_2, idbackcard_2) {
        document.getElementById(idbackcard_1).classList.add("show");
        document.getElementById(idbackcard_1).classList.remove("hide");
        document.getElementById(idbackcard_2).classList.add("show");
        document.getElementById(idbackcard_2).classList.remove("hide");

        document.getElementById(idfacecard_1).classList.add("hide");
        document.getElementById(idfacecard_1).classList.remove("show");
        document.getElementById(idfacecard_2).classList.add("hide");
        document.getElementById(idfacecard_2).classList.remove("show");
      }

      // AL DAR CLICK LLAMO CON CLASE
      const backClass = document.getElementsByClassName("back");
      for (let i = 0; i < backClass.length; i++) {
        backClass[i].addEventListener("click", flip_back_face);
      }

      const faceClass = document.getElementsByClassName("face");
      for (let i = 0; i < faceClass.length; i++) {
        faceClass[i].addEventListener("click", flip_face_back);
      }

    })
    .catch(error => {
      console.log(error);
    })
}

fetchData();
export default App;
