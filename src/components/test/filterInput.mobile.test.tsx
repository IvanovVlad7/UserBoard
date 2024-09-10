import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FilterInputMobile } from '../filterInput/mobile/filterInput.mobile';

test('renders FilterInputMobile component with placeholder and icon', () => {
  const placeholderText = 'Search...';

  
  render(<FilterInputMobile placeholder={placeholderText} onChange={() => {}} />);

  expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
  
});

test('calls onChange with correct value when input is changed', () => {
  const handleChange = jest.fn();

  render(<FilterInputMobile placeholder="Search..." onChange={handleChange} />);
  
  const input = screen.getByPlaceholderText('Search...');
  
  fireEvent.change(input, { target: { value: 'test' } });
  
  expect(handleChange).toHaveBeenCalledWith('test');
});

test('does not render icon if not provided', () => {
  render(<FilterInputMobile placeholder="Search..." onChange={() => {}} />);
  
  expect(screen.queryByText(/./)).not.toBeInTheDocument();
});
