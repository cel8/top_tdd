import caesarCipher from './caesar-cipher';

it('invalid input #plaintext not string', () => {
  expect(() => caesarCipher()).toThrow('Invalid input');
})

it('invalid input #shift not number', () => {
  expect(() => caesarCipher('a', 'a')).toThrow('Invalid input');
})

it('invalid input #shift not in range (-25, 25)', () => {
  expect(() => caesarCipher('a', -26)).toThrow('Invalid input');
})

it('valid output #defined', () => {
  expect(caesarCipher('a')).toBeDefined();
})

it('valid output #string', () => {
  expect(typeof(caesarCipher('a'))).toBe('string');
})

it('valid input #string', () => {
  expect(() => caesarCipher('a')).not.toThrow('Invalid input');
})

it('valid input #shift 1', () => {
  expect(() => caesarCipher('a', -1)).not.toThrow('Invalid input');
})

it('valid input #shift 2', () => {
  expect(() => caesarCipher('a', -25)).not.toThrow('Invalid input');
})

it('valid input #shift 3', () => {
  expect(() => caesarCipher('a', 25)).not.toThrow('Invalid input');
})

it('invalid input #shift 1', () => {
  expect(() => caesarCipher('a', -26)).toThrow('Invalid input');
})

it('invalid input #shift 2', () => {
  expect(() => caesarCipher('a', 26)).toThrow('Invalid input');
})

it('valid encipher #1', () => {
  expect(caesarCipher('a')).toBe('b');
})

it('valid encipher #2 (accept case)', () => {
  expect(caesarCipher('A')).toBe('B');
})

it('valid encipher #3 (accept special characters)', () => {
  expect(caesarCipher('A.')).toBe('B.');
})

it('valid encipher #4 (cross)', () => {
  expect(caesarCipher('z')).toBe('a');
})

it('valid encipher #5 (valid shift)', () => {
  expect(caesarCipher('z', 0)).toBe('z');
})

it('valid encipher #6 (valid cross shift 3)', () => {
  expect(caesarCipher('x', 3)).toBe('a');
})

it('valid encipher #7 (valid cross shift 3 case)', () => {
  expect(caesarCipher('X', 3)).toBe('A');
})

it('valid encipher #8', () => {
  expect(caesarCipher('hey, attack at dawn! now :).', 25)).toBe('gdx, zsszbj zs czvm! mnv :).');
})

it('valid encipher #9', () => {
  expect(caesarCipher('hey, attack at dawn! now :).')).toBe('ifz, buubdl bu ebxo! opx :).');
})