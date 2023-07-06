import "./FormInput.scss";

const FormInput = ({ placeholder, onChange }) => {
  return (
    <input
      className="form-input"
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};

export default FormInput;
