const shuffledArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const fetchData = (pokemonArray) => {
  if(pokemonArray == null || pokemonArray == {} || pokemonArray == 0 || pokemonArray == []){
    throw new TypeError("The argument is empty.");
  }
  const copyCards = [...pokemonArray.items, ...pokemonArray.items]; //spread operator
  const cards = shuffledArray(copyCards);
  let ObjectCard = {};
  let ArrayCard = [];
  cards.map((card, index) => {
    ObjectCard = {
      card_id: card.id,
      card_index: index,
      card_bgColor: card.bgColor,
      card_image: card.image,
    };
    ArrayCard.push(ObjectCard);
  })
  .join("");
  return ArrayCard;
};

export default fetchData;