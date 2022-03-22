import fetchData from './App.js';
import shuffledArray from './ShuffledArray.js';
const testArray = [{ "id": "bulbasaur", "image": "https://www.serebii.net/pokemongo/pokemon/001.png", "bgColor": "#339933" }, { "id": "ivysaur", "image": "https://www.serebii.net/pokemongo/pokemon/002.png", "bgColor": "#339933" }];

describe('fetchData', () => {
  /* it('should render without crashing', () => {
    const el = fetchData();
    expect(el instanceof HTMLElement).toBe(true);
  }); */
  it('should be a function', () => {
    expect(typeof fetchData).toBe('function');
  });

  it('should throw Error when invoked with wrong argument types', () => {
    expect(() => fetchData(null)).toThrow(Error);
  });

  it('deberia retornar un elemento HTML', () => {
    const el = document.createElement("div");
    el.innerHTML = fetchData("../data/pokemon/pokemon.json");

    //const expectedElement = shuffledArray(testArray).document.getElementsByTagName("a[href='sampleHref']");
    expect(el.getElementsByTagName("div")).toBeTruthy();
  });

  

  

});

describe('shuffledArray', () => {
  it('should be a function', () => {
    expect(typeof shuffledArray).toBe('function');
  });

  it('should return a list', () => {
    expect(shuffledArray(testArray)).toBe(['something']);
  });

 
});
