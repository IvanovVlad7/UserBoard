import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
// use scss
const Loader: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <ClipLoader color="#007bff" size={60} />
  </div>
);

export default Loader;
