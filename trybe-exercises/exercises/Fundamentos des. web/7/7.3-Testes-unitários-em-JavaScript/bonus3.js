// Escreva a função removeMiddle para passar nos testes já implementados.

const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (array) => {
  if((array.length % 2) !== 0){
    const middle = ((array.length - 1) / 2);
    array = array.splice(middle, 1);
    return array;
  }
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);