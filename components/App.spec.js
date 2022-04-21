import fetchData from "./App.js";
const testArrayPokemon = {
  name: 'Pokemon',
  items: [
    { id: 'bulbasaur', image: 'https://www.serebii.net/pokemongo/pokemon/001.png', bgColor: '#339933' },
    { id: 'ivysaur', image: 'https://www.serebii.net/pokemongo/pokemon/002.png', bgColor: '#339933' },
    { id: 'venusaur', image: 'https://www.serebii.net/pokemongo/pokemon/003.png', bgColor: '#339933' },
  ],
};

describe("fetchData", () => {
  it("should be a function", () => {
    expect(typeof fetchData(testArrayPokemon)).toBe("object");
  });

  it("should render without HTML elements", () => {
    const el = fetchData(testArrayPokemon);
    expect(el instanceof HTMLElement).toBe(false);
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => fetchData(0)).toThrow(TypeError);
    expect(() => fetchData(null)).toThrow(TypeError);
    expect(() => fetchData([])).toThrow(TypeError);
    expect(() => fetchData({})).toThrow(TypeError);
  });

});