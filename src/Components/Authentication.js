import "./Authentication.scss";
import { useEffect, useState } from "react";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Authentication = ({ setUserSignedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("yay");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("awww no!");
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const code = "123456";

  const [view, setView] = useState("sign-in");

  return (
    <div className="Authentication">
      <div className="authentication-content">
        {view === "sign-in" && (
          <div className="sign-in">
            <h1 className="authentication-title">Sign In</h1>
            <FormInput placeholder="Email" />
            <FormInput placeholder="Password" />
            <FormButton text="Sign In" onClick={() => setUserSignedIn(true)} />

            <h2 onClick={() => setView("referral")}>or sign up</h2>
          </div>
        )}

        {view === "referral" && (
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
        )}

        {view === "sign-up" && (
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
            <FormButton text="Sign up" onClick={() => handleSignUp()} />
            <h2>Sign Up</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Authentication;
