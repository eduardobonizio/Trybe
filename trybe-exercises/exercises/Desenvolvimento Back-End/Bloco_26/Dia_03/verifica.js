module.exports = {
  verificaNumero: (numero) => {
    if(!numero) return;
    if(numero > 0) return 'positivo';
    if(numero < 0) return 'negativo';
    if(numero === 0) return 'neutro';
  }
}
