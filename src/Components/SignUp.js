import "./Sign.scss";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";

const SignUp = ({
  email,
  setEmail,
  password,
  setPassword,
  onClick,
  setView,
}) => {
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
      type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(password);
        }}
    />
      <FormButton text="Sign up" onClick={onClick} />
      <p class="alternative" onClick={() => setView("sign-in")}>Or sign up</p>
    </div>
  );
};

export default SignUp;
