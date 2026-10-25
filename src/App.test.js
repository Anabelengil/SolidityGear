// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityGear title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityGear/i);
    expect(titleElement).toBeInTheDocument();
});
