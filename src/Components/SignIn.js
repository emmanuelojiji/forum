import "./Sign.scss";
import { useState } from "react";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = ({ setUserSignedIn, setView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserSignedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="sign-in">
      <h1 className="authentication-title">Sign In</h1>
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
          console.log(email);
        }}
      />
      <FormButton text="Sign In" onClick={() => handleSignIn()} />

      <p class="alternative" onClick={() => setView("referral")}>
        Or sign up
      </p>
    </div>
  );
};

export default SignIn;
