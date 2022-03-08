//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

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
        <p class="card"><img src="${cards.image}" alt="${cards.id}" /></p>
        `;
      })
      .join('');
    document.querySelector("#allCards").insertAdjacentHTML("afterbegin", cards);
  })
  .catch(error => {
    console.log(error);
  })
}

fetchData();
/* 	.then(function(data) {
		console.log(data);
    allCards = data.items;
    console.log(allCards);
    allCards.forEach(items => {
      Object.entries(items).forEach(([key, value]) => {
          console.log(`${key} ${value}`);
      });
    });
  }); */
  

export default App;
