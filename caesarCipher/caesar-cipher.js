const cipherRules = {
  minAsciiUpperCase: "A".charCodeAt(),
  maxAsciiUpperCase: "Z".charCodeAt(),
  minAsciiLowerCase: "a".charCodeAt(),
  maxAsciiLowerCase: "z".charCodeAt()
}

function isLowerCaseASCII(character) {
  return character >= cipherRules.minAsciiLowerCase && character <= cipherRules.maxAsciiLowerCase;
}

function isUpperCaseASCII(character) {
  return character >= cipherRules.minAsciiUpperCase && character <= cipherRules.maxAsciiUpperCase;
}

function isSpecialCharacterASCII(character) {
  return (!(isLowerCaseASCII(character) || isUpperCaseASCII(character)));
}

export default function caesarCipher(plaintext, shift = 1) {
  if (typeof(plaintext) !== 'string') throw new 'Invalid input';
  if (Number.isNaN(+shift) || +shift <= -26 || +shift >= 26) throw new 'Invalid input';

  const vector = plaintext.split('');

  vector.forEach((e, idx, array) => {
    const code = e.charCodeAt();
    let shiftCode;

    if (isSpecialCharacterASCII(code)) return;

    shiftCode = code;
    if (isUpperCaseASCII(code)) {
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