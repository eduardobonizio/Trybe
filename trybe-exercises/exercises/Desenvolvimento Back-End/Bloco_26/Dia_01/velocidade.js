const readline = require('readline-sync');

const mostraVelocidadeMedia = () => {
  const distancia = readline.questionFloat('Qual a distância percorrida em metros? ');
  const tempo = readline.questionFloat('Quanto tempo levou em segundos? ');

  const velocidadeMedia = calculaVelocidadeMedia(distancia, tempo)

  console.log("Velocidade média: %s mt/s", velocidadeMedia)
};

const calculaVelocidadeMedia = (distancia, tempo) => distancia / tempo;

module.exports = {
  mostraVelocidadeMedia
};
