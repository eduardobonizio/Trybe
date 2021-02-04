// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

const removeVowels = (word) => {
  let currentAdd = 1;
  let results = '';

  for (let i = 0; i < word.length; i += 1) {
    if (
      word[i] === 'a' ||
      word[i] === 'o' ||
      word[i] === 'i' ||
      word[i] === 'e' ||
      word[i] === 'u'
    ) {
      results = results + currentAdd;
      currentAdd += 1;
    } else {
      results = results + word[i];
    }
  }
  return results;
};

assert.strictEqual(typeof removeVowels, 'function');

const parameter = 'Dayane';
const result = 'D1y2n3';

const newWord = removeVowels(parameter);
assert.strictEqual(newWord, result);