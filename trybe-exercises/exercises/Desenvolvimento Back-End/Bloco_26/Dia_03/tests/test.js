const { expect } = require('chai');
const { verificaNumero } = require('../verifica.js')

const RESPOSTAS = {
  positivo: 'positivo', 
  negativo: 'negativo',
  neutro: 'neutro',
  text: 'o valor deve ser um número'
}

describe("Testa a função verificaNumero()", () => {
  describe("Envia um texto para a função", () => {
    it("O valor passado para a função não é um número", () => {
      const texto = verificaNumero("Não sou um número");
      expect(texto).to.be.a('string')
      expect(texto).to.be.equal(RESPOSTAS.text)
    })
  })

  describe('Envia um número positivo para a função', () => {
    it('O número é positivo e a resposta é uma string', () => {
      const numeroPositivo = verificaNumero(10);
      expect(numeroPositivo).to.be.a('string')
      expect(numeroPositivo).to.be.equal(RESPOSTAS.positivo)
    })
  })

  describe('Envia um número negativo para a função', () => {
    it('O número é negativo e a resposta é uma string', () => {
      const numeroNegativo = verificaNumero(-5);
      expect(numeroNegativo).to.be.a('string')
      expect(numeroNegativo).to.be.equal(RESPOSTAS.negativo)
    })
  })

  describe('Envia um número neutro para a função', () => {
    it('O número é neutro e a resposta é uma string', () => {
      const numeroNeutro = verificaNumero(0);
      expect(numeroNeutro).to.be.a('string')
      expect(numeroNeutro).to.be.equal(RESPOSTAS.neutro)
    })
  })
})
