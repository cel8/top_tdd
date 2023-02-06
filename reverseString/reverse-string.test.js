import reverseString from './reverse-string'

it('invalid input', () => {
  expect(() => reverseString()).toThrow('Invalid input');
})

it('invalid input #array', () => {
  expect(() => reverseString([ 1, 2, 3 ])).toThrow('Invalid input');
})

it('invalid input #number', () => {
  expect(() => reverseString(1)).toThrow('Invalid input');
})

it('valid input #reverseString', () => {
  expect(reverseString('ciao')).toMatch('oaic');
})

it('valid input #reverseString (one character)', () => {
  expect(reverseString('c')).toMatch('c');
})

it('valid input #reverseString (zero character)', () => {
  expect(reverseString('')).toMatch('');
})

it('valid input #reverseString (multiple word)', () => {
  expect(reverseString('ciao miao bau')).toMatch('uab oaim oaic');
})
