import React from 'react';
import Header from '../header';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
 
describe('Header', () => {
  test('renders header component', () => {
    render(<Router><Header /></Router>);
 
    screen.debug();
  });
});