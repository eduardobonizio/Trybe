//Retorna a posição do menor valor no array
function menorNoArray(array){
  let menor;
  for(let i=0; i<array.length; i+=1){
    if(array[i] < array[menor] || menor == undefined){
      menor = i;
    }
  }
  return menor;
}

let valores = [-5,-4,-3,-2,-1,-10];

console.log(menorNoArray(valores));