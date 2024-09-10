import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorMessage } from '../errorMessage/errorMessage';

test('renders ErrorMessage component correctly', () => {
  const testMessage = 'This is an error message';

  render(<ErrorMessage message={testMessage} />);

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});

test('does not render anything if no message is provided', () => {
  render(<ErrorMessage message="" />);

  expect(screen.queryByText(/./)).not.toBeInTheDocument();
});
