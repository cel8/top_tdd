import capitalize from './capitalize'

it('invalid input', () => {
  expect(() => capitalize()).toThrow('Invalid input');
})

it('invalid input #array', () => {
  expect(() => capitalize([ 1, 2, 3 ])).toThrow('Invalid input');
})

it('invalid input #number', () => {
  expect(() => capitalize(1)).toThrow('Invalid input');
})

it('valid input #capitalize', () => {
  expect(capitalize('ciao')).toMatch('Ciao');
})

it('valid input #capitalize (one character)', () => {
  expect(capitalize('c')).toMatch('C');
})

it('valid input #capitalize (zero character)', () => {
  expect(capitalize('')).toMatch('');
})
