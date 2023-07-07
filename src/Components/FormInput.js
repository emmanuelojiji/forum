import { useState } from "react";
import "./FormInput.scss";

const FormInput = ({ type, placeholder, onChange, opacity }) => {
  return (
    <input
      type={type}
      className="form-input"
      style={{ opacity: opacity }}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};

export default FormInput;
