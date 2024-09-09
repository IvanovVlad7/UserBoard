import { MobileFilterInputProps } from "./filterInput.mobile.interfaces";

export const FilterInputMobile: React.FC<MobileFilterInputProps> = ({ placeholder, onChange, icon }) => {
  return (
    <div className="mobile-filter-input-container">
      <label className="filter-label">
        {icon && <span className="icon">{icon}</span>}
        <input 
          type="text"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="mobile-filter-input"
        />
      </label>
    </div>
  );
};