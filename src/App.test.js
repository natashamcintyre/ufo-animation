import { render } from '@testing-library/react';
import App from './App';

test('renders canvas', () => {
  render(<App />);
  const canvasElement = document.getElementsByTagName('canvas')[0];
  expect(canvasElement).toBeInTheDocument();
});
