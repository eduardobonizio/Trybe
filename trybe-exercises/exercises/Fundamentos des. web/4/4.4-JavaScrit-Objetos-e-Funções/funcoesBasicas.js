let a = 1;
let b = 1;

function adicao(a , b){
    let soma = a + b;
    return soma;
}

function subtracao(a, b){
    let subtrai = a - b;
    return subtrai;
}

function multiplicacao(a , b){
    let multiplica = a * b;
    return multiplica;
}

function divisao(a , b){
    let divide = a / b;
    return divide;
}

function modulo(a, b){
    let modula = a % b;
    return modula;
}

console.log('A variável "a" é: ' + a + ' e a variável "b" é: ' + b);
console.log('--------------------------');
console.log('Adição: ' + adicao(a,b));
console.log('--------------------------');
console.log('Subtração: ' + subtracao(a,b));
console.log('--------------------------');
console.log('Multiplicação: ' + multiplicacao(a,b));
console.log('--------------------------');
console.log('Divisão: ' + divisao(a,b));
console.log('--------------------------');
console.log('Módulo: ' + modulo(a,b));
