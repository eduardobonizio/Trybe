const readline = require('readline-sync');

const mostraImc = () => {
  const peso = readline.questionFloat('Qual o seu peso? ');

  const altura = readline.questionFloat('Qual a sua altura? ');

  const imc = calculaIMC(peso, altura)

  const situação = situacao(imc)

  console.log("IMC: %s, situação: %s", imc, situação)
};

const calculaIMC = (peso, altura) => peso / Math.pow(altura, 2);

const situacao = (imc) => {
  if(imc < 18.5) return "Abaixo do peso (magreza)";
  if(imc >= 40) return "Obesidade graus III e IV";
  if(imc >= 18.5 && imc < 25) return "Peso normal";
  if(imc >= 25 && imc < 30) return "Acima do peso (sobrepeso)";
  if(imc >= 30 && imc < 35) return "Obesidade grau I";
  if(imc >= 35 && imc < 40) return "Obesidade grau II";
}

module.exports = {
  mostraImc
};
