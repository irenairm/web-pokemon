import React from 'react';
import Footer from '../footer';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
 
describe('Footer', () => {
  test('renders Footer component', () => {
    render(<Router><Footer /></Router>)
 
    screen.debug();
  });
});