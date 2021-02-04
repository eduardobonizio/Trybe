//Transforme o código abaixo em arrow function
// function testingScope(escopo) {
//  if (escopo === true) {
//   let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//   ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//   console.log(ifScope);
//  } else {
//   const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//   console.log(elseScope);
//  }
// }

// testingScope(true);

const testingScope = escopo => {
 if (escopo) {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
 }else{
  const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  console.log(elseScope);
 }
};

testingScope(false);

//Faça uma arrow function para imprimir o array ordenado
let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => array.sort((a,b) => a-b);

console.log(sortArray(oddsAndEvens));