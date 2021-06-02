const readline = require('readline-sync');

const sorteia = () => {
  const novoNumero = numeroAleatorio()

  const numeroEscolhido = readline.questionFloat('Qual foi o numero sorteado? ');

  if(numeroEscolhido === novoNumero){
    console.log("Parabéns, número correto!")
  }else{
    console.log("Opa, não foi dessa vez. O número era %s", novoNumero)
  }

  const jogarMaisUmaVez = readline.question("Deseja tentar outra vez? Y/N ");

  if(jogarMaisUmaVez.toLowerCase() === 'y') return sorteia();
};

const numeroAleatorio = () => Math.floor(Math.random() * 11);

module.exports = {
  sorteia
};
