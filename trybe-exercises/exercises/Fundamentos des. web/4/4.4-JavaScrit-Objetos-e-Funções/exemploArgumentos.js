//Utilização de quantidade de argumentos variáveis: https://www.w3schools.com/js/js_function_parameters.asp
x = sumAll(123, 500, 115, 44, 88);

function sumAll() {
  var i;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(x);