//Fatorial em uma linha
const fatorial = (number) => number < 0 ? 'Número menor que zero' : number === 0 || number === 1 ? 1 : number * fatorial(number - 1);

console.log(fatorial(10));

//Crie uma função que receba uma frase e retorne qual a maior palavra.
const maiorPalavra = (frase) => {
  let array = frase.split(' ');
  let maior = '';
  for(let i = 0; i < array.length; i += 1){
    if(array[i].length > maior.length){maior = array[i]};
  }
  console.log(maior);
}
maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu');