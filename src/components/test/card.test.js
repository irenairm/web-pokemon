import React from 'react';
import Card from '../card';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
 
describe('Card', () => {
  test('renders card component', () => {
    render(<Router><Card /></Router>);
 
    screen.debug();
  });
});