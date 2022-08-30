import React from "react";
import "./Input.css";
function Input({ type, placeholder, size }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input ${size}`}
      />
    </div>
  );
}
export default Input;
