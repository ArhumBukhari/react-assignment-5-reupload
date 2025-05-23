
import React from 'react';


function Input({ label, type, value, onChange, placeholder }) {
  return (
    <div className="input-group">
      {}
      <label>{label}</label>
      {}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}


export default Input;
