import { useState } from "react";
import "./FormInput.scss";

const FormInput = ({ type, placeholder, onChange }) => {
  return (
    <input
    type={type}
      className="form-input"
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};

export default FormInput;
