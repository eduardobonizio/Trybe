//Retorna a posição do maior nome no array
function maiorNomeNoArray(array){
  let maior;
  for(let i=0; i<array.length; i+=1){
    if(maior == undefined || array[i].length > array[maior].length){
      maior = i;
    }
  }
  return array[maior];
}

let nomes =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorNomeNoArray(nomes));