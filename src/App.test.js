import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Simple test that checks if the App component renders without crashing
test('renders App component without crashing', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  
  // Check if the footer is present (since it's always rendered)
  // Use getAllByText since there are multiple elements with this text
  const footerElements = screen.getAllByText(/All rights reserved/i);
  expect(footerElements.length).toBeGreaterThan(0);
});

// Test that checks if the homepage route works
test('renders homepage when navigating to /', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  
  // Check for text that should be on the homepage
  const welcomeElement = screen.getByText(/Welcome to Monito Pet Shop/i);
  expect(welcomeElement).toBeInTheDocument();
});