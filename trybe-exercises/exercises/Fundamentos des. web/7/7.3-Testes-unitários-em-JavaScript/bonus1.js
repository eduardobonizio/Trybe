// Imagine que você vai construir uma máquina de venda automática (como essas que vendem refrigerante). A máquina aceita moedas e calcula a diferença do valor total que deve ser pago e o valor recebido da pessoa que compra. Essa máquina possui um conjunto de moedas. Você deve implementar a seguinte lógica: dado o valor do troco, a máquina retorna uma lista com as moedas que ela devolverá para a pessoa.
const assert = require('assert');

const getChange = (total, paid) => {
  if(paid < total){
    throw new Error('paid value is not enough')
  }

  const coins = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.10, 0.05]

  let change = [];
  let changeMissing = (paid - total);
  let tries = 0;
  while(changeMissing > 0){
    for(let index in coins){
      if(coins[index] <= changeMissing){
        change.push(coins[index]);
        changeMissing =  changeMissing - coins[index];
        break;
      }
    }
    if(changeMissing >= 0 && changeMissing < 0.05){changeMissing = 0};
  }
  return change;
}

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);