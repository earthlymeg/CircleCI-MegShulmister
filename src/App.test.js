import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const data = [
  "Build Isolation", 
  "Developer-Driven Configuration",
  "Fast Builds",
  "Broad, Extensible Coverage",
  "GitHub Friendly",
  "Knowledgeable Support",
  "Great People"
];

test('button click renders a Random Text element', () => {
  render(<App />);
  const button = screen.getByTestId('circleci-button')
  
  fireEvent.click(button)
  
  expect(screen.getByTestId('random-text')).toBeInTheDocument()
  
 
})

test('button click renders a reason to love CircleCI', () => {
  render(<App />);
  const button = screen.getByTestId('circleci-button')
  
  fireEvent.click(button)

  expect(data).toContain(screen.getByTestId('random-text').textContent)
  
 
})