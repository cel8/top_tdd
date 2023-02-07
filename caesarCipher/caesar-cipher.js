export default function caesarCipher(plaintext, shift = 1) {
  if (typeof(plaintext) !== 'string') throw new 'Invalid input';
  if (Number.isNaN(+shift) || +shift <= -26 || +shift >= 26) throw new 'Invalid input';

  const vector = plaintext.split('');
  const cipherRules = {
    minAsciiUpperCase: "A".charCodeAt(),
    maxAsciiUpperCase: "Z".charCodeAt(),
    minAsciiLowerCase: "a".charCodeAt(),
    maxAsciiLowerCase: "z".charCodeAt()
  }
  vector.forEach((e, idx, array) => {
    const code = e.charCodeAt();
    let shiftCode;

    if (!((code >= cipherRules.minAsciiUpperCase && code <= cipherRules.maxAsciiUpperCase) ||
      (code >= cipherRules.minAsciiLowerCase && code <= cipherRules.maxAsciiLowerCase))) return;

    shiftCode = code;
    if (code >= cipherRules.minAsciiUpperCase && code <= cipherRules.maxAsciiUpperCase) {
      const upperBound = (code + +shift) - cipherRules.maxAsciiUpperCase;
      shiftCode = upperBound <= 0 ? code + +shift : cipherRules.minAsciiUpperCase + upperBound - 1;
    } else {
      const upperBound = (code + +shift) - cipherRules.maxAsciiLowerCase;
      shiftCode = upperBound <= 0 ? code + +shift : cipherRules.minAsciiLowerCase + upperBound - 1;
    }

    array[idx] = String.fromCharCode(shiftCode);
  });
  return vector.join('');
}