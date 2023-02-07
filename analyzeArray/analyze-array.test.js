import analyzeArray from './analyze-array'

it('invalid input #undefined', () => {
  expect(() => analyzeArray()).toThrow('Invalid input');
})

it('invalid input #number', () => {
  expect(() => analyzeArray(1)).toThrow('Invalid input');
})

it('invalid input #string', () => {
  expect(() => analyzeArray('ciao')).toThrow('Invalid input');
})

it('invalid input #array of character', () => {
  expect(() => analyzeArray([ '1', 'ciao', '5' ])).toThrow('Invalid input');
})

it('valid input #array of character', () => {
  expect(() => analyzeArray([ '1', '2', '5' ])).not.toThrow('Invalid input');
})

it('valid input #array of character', () => {
  expect(() => analyzeArray([ '1', '2', '5' ])).not.toThrow('Invalid input');
})

it('valid input #empty array', () => {
  expect(() => analyzeArray([])).not.toThrow('Invalid input');
})

it('valid return value #defined', () => {
  const object = analyzeArray([]);
  expect(object).toBeDefined();
  expect(object.average).toBeDefined();
  expect(object.min).toBeDefined();
  expect(object.max).toBeDefined();
  expect(object.length).toBeDefined();
})

it('valid return value #empty array', () => {
  const object = analyzeArray([]);
  expect(object).toBeDefined();
  expect(object.average).toBe(0);
  expect(object.min).toBe(0);
  expect(object.max).toBe(0);
  expect(object.length).toBe(0);
})

it('valid return value #array', () => {
  const object = analyzeArray([1,'8',3,4,2,'6']);
  expect(object).toBeDefined();
  expect(object.average).toBe(4);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.length).toBe(6);
})