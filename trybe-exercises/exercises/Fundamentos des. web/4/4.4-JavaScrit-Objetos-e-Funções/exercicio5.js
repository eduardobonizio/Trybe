//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function maisRepetidos(array) {
  let maisRepetido;
  for (let i = 0; i < array.length; i += 1) {
    let quant = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] == array[j]) {
        quant += 1;
      }
    }
    if (maisRepetido == undefined || quant > maisRepetido) {
      maisRepetido = array[i];
    }
  }
  return maisRepetido;
}

let numeros = [2, 3, 2, 5, 8, 2, 3, 6, 6, 6, 6, -1, -1, -1, -1, -1, -1, -1, -1];

console.log(maisRepetidos(numeros));