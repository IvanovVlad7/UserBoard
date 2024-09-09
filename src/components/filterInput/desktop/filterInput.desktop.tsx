import React, { useEffect, useState } from 'react';
import { FilterInputDesktopProps } from './filterInput.desktop.interfaces';

export const FilterInput: React.FC<FilterInputDesktopProps> = ({ placeholder, onChange, isShouldBeCleared = false }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
    onChange(value);
  };

  useEffect(() => {
    if (isShouldBeCleared) {
      setInputValue('');
      onChange('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShouldBeCleared])
  
  return (
    <input
      type="text"
      value={inputValue}
      placeholder={placeholder}
      onChange={(e) => handleInputChange(e.target.value)}
      className="filter-input"
    />
)}