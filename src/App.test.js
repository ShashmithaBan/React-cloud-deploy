import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock child components to avoid complex rendering issues
jest.mock('./components/homepage/Homepage', () => () => <div data-testid="homepage">Homepage Mock</div>);
jest.mock('./components/footer/Footer', () => () => <div data-testid="footer">Footer Mock</div>);
jest.mock('./components/smalldog/SmallDog', () => () => <div data-testid="small-dog">SmallDog Mock</div>);
jest.mock('./components/dogdetails/DogDetails', () => () => <div data-testid="dog-details">DogDetails Mock</div>);

test('renders App component without crashing', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  
  // Check if the footer is rendered
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
});

test('renders homepage when navigating to /', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  
  // Check for homepage content
  const homepageElement = screen.getByTestId('homepage');
  expect(homepageElement).toBeInTheDocument();
});