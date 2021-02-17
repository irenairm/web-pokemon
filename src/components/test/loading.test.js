import React from 'react';
import Loading from '../loading';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
 
describe('Loading', () => {
  test('renders loading component', () => {
    render(<Router><Loading /></Router>);
 
    screen.debug();
  });
});