import React from 'react';
import Modal from '../modal';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
 
describe('Modal', () => {
  test('renders Modal component', () => {
    render(<Router><Modal /></Router>);
 
    screen.debug();
  });
});