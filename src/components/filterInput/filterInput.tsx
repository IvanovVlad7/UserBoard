import React from 'react';

interface FilterInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} // TODO: move to interface

export const FilterInput: React.FC<FilterInputProps> = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="filter-input"
  />
);