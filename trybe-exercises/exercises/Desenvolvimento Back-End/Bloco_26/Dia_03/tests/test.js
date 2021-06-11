const { expect } = require('chai');
const { verificaNumero } = require('../verifica.js')
const { write } = require('../write.js')
const fs = require('fs/promises');
const sinon = require('sinon');

const RESPOSTAS = {
  positivo: 'positivo', 
  negativo: 'negativo',
  neutro: 'neutro',
  text: 'o valor deve ser um número'
}

describe("Tests para a função verificaNumero()", () => {
  describe("Verifica se ela retorna a resposta certa", () => {
    it("Quando o valor passado para a função não é um número", () => {
      const texto = verificaNumero("Não sou um número");
      expect(texto).to.be.a('string')
      expect(texto).to.be.equal(RESPOSTAS.text)
    })

    it('Quando o número é positivo e a resposta é uma string', () => {
      const numeroPositivo = verificaNumero(10);
      expect(numeroPositivo).to.be.a('string')
      expect(numeroPositivo).to.be.equal(RESPOSTAS.positivo)
    })

    it('Quando o número é negativo e a resposta é uma string', () => {
      const numeroNegativo = verificaNumero(-5);
      expect(numeroNegativo).to.be.a('string')
      expect(numeroNegativo).to.be.equal(RESPOSTAS.negativo)
    })

    it('Quando o número é neutro e a resposta é uma string', () => {
      const numeroNeutro = verificaNumero(0);
      expect(numeroNeutro).to.be.a('string')
      expect(numeroNeutro).to.be.equal(RESPOSTAS.neutro)
    })
  })
})

describe('Tests para a função writeFile()', () => {
  const MESSAGE = {
    error: 'write error',
    done: 'ok'
  }
  
  describe('Tests para a resposta', () => {
    it('A resposta é uma string', () => {
      const textoDoArquivo = write('../meuArquivo', 'Talvez de certo');
      expect(textoDoArquivo).to.be.a('string')
    })

    it('Retorna "ok" quando o arquivo é criado', () => {
    const textoDoArquivo = write('../meuArquivo', 'Vai dar certo')
    expect(textoDoArquivo).to.be.equal(MESSAGE.done)
    })
  })
})
