import fetchData from './App.js';

it('should be an function', () => {
  expect(typeof fetchData).toBe('function');
});

it('should throw Error when invoked with wrong argument types', () => {
  expect(() => fetchData()).toThrow(Error);
});