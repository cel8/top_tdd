export default class Calculator {
  add(a, b) {
    if (Number.isNaN(+a) || Number.isNaN(+b)) throw new 'Invalid input';
    return +a + +b;
  }

  sub(a, b) {
    if (Number.isNaN(+a) || Number.isNaN(+b)) throw new 'Invalid input';
    return +a - +b;
  }

  mul(a, b) {
    if (Number.isNaN(+a) || Number.isNaN(+b)) throw new 'Invalid input';
    return +a * +b;
  }

  div(a, b) {
    if (Number.isNaN(+a) || Number.isNaN(+b) || (0 === +b)) throw new 'Invalid input';
    return +a / +b;
  }
}