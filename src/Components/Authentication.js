import "./Authentication.scss";
import { useEffect, useState } from "react";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";

const Authentication = ({ setUserSignedIn }) => {
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
            <FormButton onClick={() => setUserSignedIn(true)} />

            <h2 onClick={() => setView("referral")}>or sign up</h2>
          </div>
        )}

        {view === "referral" && (
          <div className="referral-container">
            <h1 className="authentication-title">Enter your referral<br/> code</h1>
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
            <FormInput placeholder="Email" />
            <FormInput placeholder="Password" />
            <FormButton />
            <h2 onClick={() => setView("sign-in")}>sign in</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Authentication;
