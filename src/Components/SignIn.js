import "./Sign.scss";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";

const SignIn = ({setUserSignedIn, setView}) => {
  return (
    <div className="sign-in">
      <h1 className="authentication-title">Sign In</h1>
      <FormInput placeholder="Email" />
      <FormInput placeholder="Password" />
      <FormButton text="Sign In" onClick={() => setUserSignedIn(true)} />

      <h2 onClick={() => setView("referral")}>or sign up</h2>
    </div>
  );
};

export default SignIn;
