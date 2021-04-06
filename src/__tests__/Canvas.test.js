import React, { render, fireEvent } from '@testing-library/react';
import Canvas from '../Canvas';

test('renders canvas', () => {
  render(<Canvas />);
  const canvasElement = document.getElementsByTagName('canvas')[0];
  expect(canvasElement).toBeInTheDocument()
});

test('renders button', () => {
  render(<Canvas />)
  const pauseButton = document.getElementById('pause-button')
  expect(pauseButton).toBeInTheDocument()
})

test('pause button toggles text', async () => {
  const { getByText } = render(<Canvas />)
  const button = getByText('Play')
  await fireEvent.click(button)
  expect(button).toHaveTextContent('Pause')
})
