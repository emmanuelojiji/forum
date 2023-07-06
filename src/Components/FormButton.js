import "./FormButton.scss";

const FormButton = ({text, onClick}) => {
  return (
    <button className="form-button" onClick={onClick}>{text}</button>
  );
};

export default FormButton;