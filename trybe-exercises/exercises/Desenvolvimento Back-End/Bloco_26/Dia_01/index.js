const readline = require('readline-sync');
const {mostraImc} = require('./imc');
const {mostraVelocidadeMedia} = require('./velocidade');
const {sorteia} = require('./sorteio');

const start = () => {
  console.log('entrei');
  const programaEscolhido = readline.questionInt(`
  Digite o número da opção que deseja executar:
  1 - Calculo IMC
  2 - Velocidade media
  3 - Adivinha o numero
  0 - Sair
  `)

  switch(programaEscolhido){
    case 1:
      mostraImc();
      break;
    case 2:
      mostraVelocidadeMedia();
      break;
    case 3:
      sorteia();
      break;
    default:
      break;
  }
}

start();

module.exports = {
  start
}
