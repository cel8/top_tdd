import Calculator from './calculator'

it('create calculator', () => {
  const calculator = new Calculator();
  expect(calculator).not.toBeNull();
  expect(calculator).toBeDefined();
})

it('add #invalid input (no parameters)', () => {
  const calculator = new Calculator();
  expect(() => calculator.add()).toThrow('Invalid input');
})

it('add #invalid input (one parameter)', () => {
  const calculator = new Calculator();
  expect(() => calculator.add(1)).toThrow('Invalid input');
})

it('add #invalid input (strings)', () => {
  const calculator = new Calculator();
  expect(() => calculator.add('ciao', 'miao')).toThrow('Invalid input');
})

it('add #valid input (strings)', () => {
  const calculator = new Calculator();
  expect(() => calculator.add('1', '1')).not.toThrow('Invalid input');
})

it('sub #invalid input (no parameters)', () => {
  const calculator = new Calculator();
  expect(() => calculator.sub()).toThrow('Invalid input');
})

it('sub #invalid input (one parameter)', () => {
  const calculator = new Calculator();
  expect(() => calculator.sub(1)).toThrow('Invalid input');
})

it('sub #invalid input (strings)', () => {
  const calculator = new Calculator();
  expect(() => calculator.sub('ciao', 'miao')).toThrow('Invalid input');
})

it('sub #valid input (strings)', () => {
  const calculator = new Calculator();
  expect(() => calculator.sub('1', '1')).not.toThrow('Invalid input');
})

it('mul #invalid input (no parameters)', () => {
  const calculator = new Calculator();
  expect(() => calculator.mul()).toThrow('Invalid input');
})

it('mul #invalid input (one parameter)', () => {
  const calculator = new Calculator();
  expect(() => calculator.mul(1)).toThrow('Invalid input');
})

it('mul #invalid input (strings)', () => {
  const calculator = new Calculator();
  expect(() => calculator.mul('ciao', 'miao')).toThrow('Invalid input');
})

it('mul #valid input (strings)', () => {
  const calculator = new Calculator();
  expect(() => calculator.mul('1', '1')).not.toThrow('Invalid input');
})

it('div #invalid input (no parameters)', () => {
  const calculator = new Calculator();
  expect(() => calculator.div()).toThrow('Invalid input');
})

it('div #invalid input (one parameter)', () => {
  const calculator = new Calculator();
  expect(() => calculator.div(1)).toThrow('Invalid input');
})

it('div #invalid input (strings)', () => {
  const calculator = new Calculator();
  expect(() => calculator.div('ciao', 'miao')).toThrow('Invalid input');
})

it('div #invalid input (divide by zero)', () => {
  const calculator = new Calculator();
  expect(() => calculator.div(55, 0)).toThrow('Invalid input');
})

it('div #valid input (strings)', () => {
  const calculator = new Calculator();
  expect(() => calculator.div('1', '1')).not.toThrow('Invalid input');
})

it('add #valid return', () => {
  const calculator = new Calculator();
  expect(calculator.add(10, 1)).toBe(11);
})

it('add #valid return (input strings)', () => {
  const calculator = new Calculator();
  expect(calculator.add('15', '17')).toBe(32);
})

it('sub #valid return', () => {
  const calculator = new Calculator();
  expect(calculator.sub(10, 1)).toBe(9);
})

it('sub #valid return (negative)', () => {
  const calculator = new Calculator();
  expect(calculator.sub(10, 11)).toBe(-1);
})

it('sub #valid return (input strings)', () => {
  const calculator = new Calculator();
  expect(calculator.sub('15', '17')).toBe(-2);
})

it('mul #valid return', () => {
  const calculator = new Calculator();
  expect(calculator.mul(10, 10)).toBe(100);
})

it('mul #valid return (input strings)', () => {
  const calculator = new Calculator();
  expect(calculator.mul('5', '5')).toBe(25);
})

it('div #valid return', () => {
  const calculator = new Calculator();
  expect(calculator.div(10, 100)).toBe(0.1);
})

it('div #valid return (input strings)', () => {
  const calculator = new Calculator();
  expect(calculator.div('25', '5')).toBe(5);
})
