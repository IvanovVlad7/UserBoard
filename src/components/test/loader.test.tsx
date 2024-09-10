import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from '../loader/loader';
import '@testing-library/jest-dom';

test('renders Loader component correctly', () => {
  render(<Loader />);

  const loaderElement = screen.getByRole('status');
  expect(loaderElement).toBeInTheDocument();
});
