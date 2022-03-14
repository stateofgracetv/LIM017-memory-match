const App = () => {
  const el = document.createElement('div');
  el.className = 'App';
  el.textContent = 'Hola mundo!';

  return el;
};

function fetchData() {
  fetch('./data/pokemon/pokemon.json')
    .then(response => {
      if (response.ok === false) {
        throw Error('Ha ocurrido un error');
      }
      return response.json();
    })
    .then(pokemon => {
      const cards = pokemon.items
        .map(cards => {
          return `
        <div class="card" style="height:100px">
        <div class="face hide" id="flip-face_${cards.id}-1" pokemon-back-id="flip-back_${cards.id}-1"><img src="${cards.image}" height="100" alt="${cards.id}" /></div>
        <div class="back show" id="flip-back_${cards.id}-1" pokemon-face-id="flip-face_${cards.id}-1"><img src="img/card-back.png" height="100" /></div>
        </div>
        <br>
        `;
        })   //HE CREADO 2 ID PARA TENER UN ID QUE MOSTRAR CARTA Y OTRO QUE OCULTAR
        .join('');
      document.querySelector("#allCards").insertAdjacentHTML("afterbegin", cards);
     
     
      function flip_back_face() { //GIRAR SELLO CARA

        document.getElementById(this.getAttribute("id")).classList.add("hide"); //agrega una clase
        document.getElementById(this.getAttribute("id")).classList.remove("show"); //elimina una clase
        
        document.getElementById(this.getAttribute("pokemon-face-id")).classList.add("show"); //agrega una clase
        document.getElementById(this.getAttribute("pokemon-face-id")).classList.remove("hide"); //elimina una clase
        

        
      }

      function flip_face_back() { //GIRAR CARA SELLO
        
        document.getElementById(this.getAttribute("pokemon-back-id")).classList.add("show"); //agrega una clase
        document.getElementById(this.getAttribute("pokemon-back-id")).classList.remove("hide"); //elimina una clase

        document.getElementById(this.getAttribute("id")).classList.add("hide"); //agrega una clase
        document.getElementById(this.getAttribute("id")).classList.remove("show"); //elimina una clase
        
        

      }

     // AL DAR CLICK LLAMO CON CLASE
      var backClass = document.getElementsByClassName("back");
      for (let i = 0; i < backClass.length; i++) {
        backClass[i].addEventListener("click", flip_back_face);
      }

      var faceClass = document.getElementsByClassName("face");
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
