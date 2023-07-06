import "./Authentication.scss";
import { useEffect, useState } from "react";

const Authentication = ({ setUserSignedIn }) => {
  const code = "123456";

  const [view, setView] = useState("sign-in");

  return (
    <div className="Authentication">
      {view === "sign-in" && (
        <div className="sign-in">
          <h1>Sign In</h1>
          <input></input>
          <input></input>
          <button onClick={() => setUserSignedIn(true)}>Next</button>
          <h2 onClick={() => setView("referral")}>or sign up</h2>
        </div>
      )}

      {view === "referral" && (
        <div className="referral-container">
          <h1>referral code</h1>
          <input
            onChange={(e) => {
              if (e.target.value === code) {
                setView("sign-up");
              }
            }}
          ></input>
        </div>
      )}

      {view === "sign-up" && (
        <div className="sign-up">
          <h1>Sign up</h1>
          <input></input>
          <input></input>
          <button>Next</button>
          <h2 onClick={() => setView("sign-in")}>sign in</h2>
        </div>
      )}
    </div>
  );
};

export default Authentication;
