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
        <p class="card" style="background-color:${cards.bgColor}"><img src="${cards.image}" alt="${cards.id}" /></p>
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

export default App;
