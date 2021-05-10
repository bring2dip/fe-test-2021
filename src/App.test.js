import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Renders Related Articles heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Related Articles/i);
  expect(headingElement).toBeInTheDocument();
});

test('Renders 3 cards by default', () => {
  render(<App />);
  const cards = screen.queryAllByTestId('card');
  expect(cards).toHaveLength(3);
});

test('Renders 6 cards when read more is clicked', () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('loadMoreButton'));

  const cards = screen.queryAllByTestId('card');
  expect(cards).toHaveLength(6);
});

test('Renders back 3 cards when read less is clicked', () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('loadMoreButton'));
  fireEvent.click(screen.getByTestId('loadMoreButton'));
  const cards = screen.queryAllByTestId('card');
  expect(cards).toHaveLength(3);
});
