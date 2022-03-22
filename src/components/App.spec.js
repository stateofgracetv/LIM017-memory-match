import fetchData from './App.js';

describe('fetchData', () => {
  /* it('should render without crashing', () => {
    const el = fetchData();
    expect(el instanceof HTMLElement).toBe(true);
  }); */
  it('should be a function', () => {
    expect(typeof fetchData).toBe('function');
  });
});

describe('fetchData.play', () => {
  it('should be a function'), () => {
    expect(typeof fetchData.play).toBe('function');
  }
})

it('should throw Error when invoked with wrong argument types', () => {
  expect(() => fetchData()).toThrow(Error);
});
