import "./Sign.scss";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";

const SignUp = ({ email, setEmail, password, setPassword, onClick }) => {
  return (
    <div className="sign-up">
      <h1 className="authentication-title">Sign up</h1>
      <FormInput
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
      />
      <FormInput
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(password);
        }}
      />
      <FormButton text="Sign up" onClick={onClick} />
      <h2>Sign Up</h2>
    </div>
  );
};

export default SignUp;
