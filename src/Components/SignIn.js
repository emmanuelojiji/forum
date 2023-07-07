import "./Sign.scss";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";

const SignIn = ({setUserSignedIn, setView}) => {
  return (
    <div className="sign-in">
      <h1 className="authentication-title">Sign In</h1>
      <FormInput placeholder="Email" />
      <FormInput type="password" placeholder="Password" />
      <FormButton text="Sign In" onClick={() => setUserSignedIn(true)} />

      <p class="alternative" onClick={() => setView("referral")}>Or sign up</p>
    </div>
  );
};

export default SignIn;
