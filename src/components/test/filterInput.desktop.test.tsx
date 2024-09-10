import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FilterInput } from '../filterInput/desktop/filterInput.desktop';

test('renders FilterInput component with placeholder', () => {
  const placeholderText = 'Search...';
  
  render(<FilterInput placeholder={placeholderText} onChange={() => {}} />);
  
  expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
});

test('calls onChange with correct value when input is changed', () => {
  const handleChange = jest.fn();

  render(<FilterInput placeholder="Search..." onChange={handleChange} />);
  
  const input = screen.getByPlaceholderText('Search...');
  
  fireEvent.change(input, { target: { value: 'test' } });
  
  expect(handleChange).toHaveBeenCalledWith('test');
});

test('clears input when isShouldBeCleared prop is true', () => {
  const { rerender } = render(<FilterInput placeholder="Search..." onChange={() => {}} isShouldBeCleared={false} />);
  
  const input = screen.getByPlaceholderText('Search...');
  
  fireEvent.change(input, { target: { value: 'test' } });
  
  expect(input).toHaveValue('test');
  
  rerender(<FilterInput placeholder="Search..." onChange={() => {}} isShouldBeCleared={true} />);
  
  expect(input).toHaveValue('');
});
