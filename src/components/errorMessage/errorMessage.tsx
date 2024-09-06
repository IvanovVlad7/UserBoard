import React from 'react';

interface ErrorMessageProps {
  message: string; // TODO: move to interface
}
// TODO: scss file
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
    }}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage; // TODO: not default
