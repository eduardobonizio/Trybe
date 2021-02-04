let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for(let i=0; i<numbers.length; i+=1){
    if(i == numbers.length-1){
        let valor = numbers[i] * 2;
        novoArray.push(valor)
    }else{
        let valor = numbers[i] * numbers[i+1];
        novoArray.push(valor) 
    }
}

console.log(novoArray);