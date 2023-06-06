const uppercase = () =>
  [...Array(26)].map((n, i) => `${String.fromCharCode(i + "A".charCodeAt())}`);
const lowercase = () =>
  [...Array(26)].map((n, i) => `${String.fromCharCode(i + "a".charCodeAt())}`);

const mod = (a, b) => {
  const c = a % b;
  return c < 0 ? c + b : c;
};

const chiper = (array, shift) => {
  const cipher = {};
  array.forEach((value, index) => {
    cipher[value] = array[mod(index + shift, array.length)];
  });
  return cipher;
};

const caesarChipher = (shift) => {
  return {
    ...chiper(uppercase(), shift),
    ...chiper(lowercase(), shift),
  };
};

const processCharacter = (cipher, character) =>
  cipher.hasOwnProperty(character) ? cipher[character] : character;

const ceasarCipher = (text, shift) => {
  const caesar = caesarChipher(shift);
  return [...text].map((c) => processCharacter(caesar, c)).join("");
};

console.log(ceasarCipher('abcdefg', 2))