const { expect } = require('chai');
const { verificaNumero } = require('../verifica.js')

describe("Verifica se um número é positivo, negativo ou neutro", () => {
  const RESPOSTAS = {
    positivo: 'positivo', 
    negativo: 'negativo',
    neutro: 'neutro'
  }

  it('O número é positivo e a resposta é uma string', () => {
    const numeroPositivo = verificaNumero(10);
    expect(numeroPositivo).to.be.a('string')
    expect(numeroPositivo).to.be.equal(RESPOSTAS.positivo)
  })

  it('O número é negativo e a resposta é uma string', () => {
    const numeroNegativo = verificaNumero(-5);
    expect(numeroNegativo).to.be.a('string')
    expect(numeroNegativo).to.be.equal(RESPOSTAS.negativo)
  })

  it('O número é neutro e a resposta é uma string', () => {
    const numeroNeutro = verificaNumero(0);
    expect(numeroNeutro).to.be.a('string')
    expect(numeroNeutro).to.be.equal(RESPOSTAS.neutro)
  })
})
