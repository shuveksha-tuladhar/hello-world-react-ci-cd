import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World', () => {
  render(<App />);
  const helloWorldText = screen.getByText("Hello World");
  expect(helloWorldText).toBeInTheDocument();
});
