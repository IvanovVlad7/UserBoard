import React from 'react';
import { FilterInputProps } from './filterInterface';


export const FilterInput: React.FC<FilterInputProps> = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="filter-input"
  />
);