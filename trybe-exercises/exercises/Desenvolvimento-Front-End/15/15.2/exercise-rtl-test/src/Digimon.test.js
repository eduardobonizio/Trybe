import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';
import App from './App';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText("Faça uma pesquisa");
    expect(linkElement).toBeInTheDocument();
  });
});