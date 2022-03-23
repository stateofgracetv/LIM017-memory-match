import fetchData from './App.js';
import shuffledArray from './ShuffledArray.js';
const testArray = [{ "id": "bulbasaur", "image": "https://www.serebii.net/pokemongo/pokemon/001.png", "bgColor": "#339933" }, { "id": "ivysaur", "image": "https://www.serebii.net/pokemongo/pokemon/002.png", "bgColor": "#339933" }, {"id": "venusaur", "image": "https://www.serebii.net/pokemongo/pokemon/003.png", "bgColor": "#339933"}];

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

describe('isMatch', () => {
  it('should return a number', () => {
    expect(typeof fetchData.play.isMatch()).toBe('number');
  })
  it('should return a number greater than zero', () => {
    expect(fetchData.play.isMatch()).toBeGreaterThan(0);
  })
})

describe('shuffledArray', () => {
  it('should be a function', () => {
    expect(typeof shuffledArray).toBe('function');
  });

  it('should be something', () => {
    expect(shuffledArray(testArray)).toEqual(expect.anything());
  });

  it('should be an array', () => {
    expect(typeof shuffledArray(testArray)).toBe('array');
  });

  it('should return a shuffled version of the array', () => {
    expect(shuffledArray(testArray)).not.toEqual('testArray')
  })
});
