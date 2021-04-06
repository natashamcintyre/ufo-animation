import React, { render } from '@testing-library/react';
import App from '../App';

test('renders canvas', () => {
  render(<App />);
  const canvasElement = document.getElementsByTagName('canvas')[0];
  expect(canvasElement).toBeInTheDocument()
});

test('renders button', () => {
  render(<App />)
  const pauseButton = document.getElementById('pause-button')
  expect(pauseButton).toBeInTheDocument()
})
