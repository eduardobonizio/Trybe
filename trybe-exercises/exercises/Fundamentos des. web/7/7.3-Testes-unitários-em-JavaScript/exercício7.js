// Escreva a função addAllnumbers para passar nos testes já implementados.

const assert = require('assert');
// escreva a função addAllnumbers aqui

const addAllnumbers = (array) => {
  let total = 0;
  array.forEach(element => {
    total += element;
  });

  return total;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);