import "./Referral.scss";
import FormInput from "../Components/FormInput";

const Referral = ({ codes, setView }) => {
  return (
    <div className="referral-container">
      <h1 className="authentication-title">
        Enter your referral
        <br /> code
      </h1>
      <FormInput
        placeholder="Code"
        onChange={(e) => {
          const matchingCode = codes.find((code) => code === e.target.value);
          if (matchingCode) {
            setView("sign-up");
          }
        }}
      />
    </div>
  );
};

export default Referral;
