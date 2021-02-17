import React from 'react';
import MyPokemonList from '../mypokemon';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
 
describe('MyPokemonList', () => {
  test('renders MyPokemonList page', () => {
    render(<Router><MyPokemonList /></Router>)
 
    screen.debug();
  });
});