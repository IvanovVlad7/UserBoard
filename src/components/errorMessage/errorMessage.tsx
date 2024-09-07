import React from 'react';
import { ErrorMessageProps } from './errorMessageInteface';
import './errorMessageInteface'

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className='error-message'>
      <p>{message}</p>
    </div>
  );
};
