import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './loader.scss';

export const Loader: React.FC = () => (
  <div className='loader-container' role="status">
    <ClipLoader />
  </div>
);