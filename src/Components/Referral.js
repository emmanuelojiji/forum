import "./Referral.scss";
import FormInput from "../Components/FormInput";

const Referral = ({code, setView}) => {
  return (
    <div className="referral-container">
      <h1 className="authentication-title">
        Enter your referral
        <br /> code
      </h1>
      <FormInput
        placeholder="Code"
        onChange={(e) => {
          if (e.target.value === code) {
            setView("sign-up");
          }
        }}
      />
    </div>
  );
};

export default Referral;
