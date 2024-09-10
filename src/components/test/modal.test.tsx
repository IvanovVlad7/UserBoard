import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Modal } from '../modal/modal';

describe('Modal Component', () => {
  const handleModal = jest.fn();

  test('renders Modal component with children and title', () => {
    render(
      <Modal handleModal={handleModal}>
        <p>Modal content</p>
      </Modal>
    );

    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  test('calls handleModal when close button is clicked', () => {
    render(
      <Modal handleModal={handleModal}>
        <p>Modal content</p>
      </Modal>
    );

    const closeButton = screen.getByRole('button', { name: /×/ });
    
    fireEvent.click(closeButton);
    
    expect(handleModal).toHaveBeenCalledTimes(1);
  });

  test('calls handleModal when overlay is clicked', () => {
    render(
      <Modal handleModal={handleModal}>
        <p>Modal content</p>
      </Modal>
    );

    const overlay = screen.getByTestId('modal-overlay');
    
    fireEvent.click(overlay);
    
    expect(handleModal).toHaveBeenCalledTimes(1);
  });

  test('does not call handleModal when modal content is clicked', () => {
    render(
      <Modal handleModal={handleModal}>
        <p>Modal content</p>
      </Modal>
    );

    const modalContent = screen.getByText('Modal content');

    fireEvent.click(modalContent);

    expect(handleModal).not.toHaveBeenCalled();
  });
});
