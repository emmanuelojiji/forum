import "./ChooseUsername.scss";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";

const ChooseUsername = ({onClick}) => {
  return (
    <div className="choose-username">
      <h1 className="authentication-title">Choose username</h1>
      <FormInput placeholder="Username" />
      <FormButton text="Next" onClick={onClick} />
    </div>
  );
};

export default ChooseUsername;
