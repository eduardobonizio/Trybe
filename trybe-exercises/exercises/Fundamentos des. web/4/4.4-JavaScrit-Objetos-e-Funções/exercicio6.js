//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
let n = 10;

function somatorio(numero) {
  let tamanho = numero - 1;
  let total = numero;
  while (tamanho > 0) {
    total = total + tamanho;
    tamanho -= 1;
  }
  return total;
}
console.log(somatorio(n));