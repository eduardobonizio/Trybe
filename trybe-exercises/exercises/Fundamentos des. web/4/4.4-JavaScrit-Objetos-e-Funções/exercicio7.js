//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
let n = 10;

function comparaString(string, fim) {
  //Define a posição onde irá começar na string
  let i = string.length - fim.length;

  //Usado para definir a posção da primeira letra na palavra fim
  let controladorParaFim = 0;

  for (i; i < string.length; i += 1) {
    if (string[i] == fim[controladorParaFim]) {
      //Continua testando
    } else {
      //Encerra se as letras não forem iguais
      return false;
    }
    controladorParaFim += 1;
  }

  //Retorna true se todas as letras forem iguais
  return true;

}

console.log(comparaString("eduardo", "do"));