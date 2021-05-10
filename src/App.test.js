import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Related Articles heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Related Articles/i);
  expect(headingElement).toBeInTheDocument();
});

test.todo('Renders 3 cards by default');

test.todo('Renders 6 cards when read more is clicked');
