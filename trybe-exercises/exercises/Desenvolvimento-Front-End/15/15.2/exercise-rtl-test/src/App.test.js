import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

const digimon = [{
  "name":"Patamon",
  "img":"https://digimon.shadowsmith.com/img/patamon.jpg",
  "level":"Rookie"
}]
describe('O caminho feliz', () => {

  global.fetch = jest.fn().mockResolvedValue({
    json: async () => {
      return digimon
    }
  })
  
  // (()=>
  // Promise.resolve({
  //   json: ()=> Promise.resolve(digimon)
  // }));

  it('Verifica se o texto de pesquista está na tela', async () => {
    const {getByText } = render(<App />);
    const linkElement = getByText("Faça uma pesquisa");
    expect(linkElement).toBeInTheDocument();
  });

  it('Verifica o valor do campo de input', async () => {
    const { getByTestId } = render(<App />);
    const inputDigimonName = getByTestId("input");
    expect(inputDigimonName).toBeInTheDocument();
    expect(inputDigimonName).toHaveValue('');
    fireEvent.change(inputDigimonName, { target: { value: 'Patamon' } });
    expect(inputDigimonName).toHaveValue('Patamon');
  });

  it('Verifica se o click no botão de pesquisa retorna o digimon', async () => {
    const { getByTestId, findByText } = render(<App />);
    const leftClick = { button: 1 }
    const inputDigimonName = getByTestId("input");
    fireEvent.change(inputDigimonName, { target: { value: 'Patamon' } });
    const buttonSearchDigimon = getByTestId("buttonSearch");
    expect(buttonSearchDigimon).toBeInTheDocument();
    expect(inputDigimonName).toHaveValue('Patamon');
    fireEvent.click(buttonSearchDigimon, leftClick);
    
    expect(global.fetch).toBeCalledTimes(1);
    await findByText(digimon[0].name);
  });

});