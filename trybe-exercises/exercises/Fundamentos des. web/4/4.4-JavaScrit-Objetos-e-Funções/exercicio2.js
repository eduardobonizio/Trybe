//Retorna a posição do maior valor no array
function maiorNoArray(array){
  let maior;
  for(let i=0; i<array.length; i+=1){
    if(array[i] > array[maior] || maior == undefined){
      maior = i;
    }
  }
  return maior;
}

let valores = [-5,-4,-3,-2, -1];

console.log(maiorNoArray(valores));