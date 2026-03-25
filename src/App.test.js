import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the site heading', () => {
  render(<App />);
  const heading = screen.getByText(/Discover The Beauty of Islam/i);
  expect(heading).toBeInTheDocument();
});
