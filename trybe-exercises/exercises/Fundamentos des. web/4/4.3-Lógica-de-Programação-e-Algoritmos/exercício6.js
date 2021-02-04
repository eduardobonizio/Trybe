let numero = 1585;

let tentativas = 0;

for(let i=0; i<=numero;i++){
    let testaPrimo = numero % i;
    if(testaPrimo == 0){
        tentativas +=1;
        console.log(`${numero} Divido por ${i} = resto zero`);
    }
}

if(tentativas > 2){
    console.log("---------------------------------");
    console.log(`${numero} Não é primo`);
    console.log("---------------------------------");
}else{
    console.log("---------------------------------");
    console.log(`${numero} É primo`);
    console.log("---------------------------------");
}