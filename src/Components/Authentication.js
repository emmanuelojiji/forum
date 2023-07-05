import "./Authentication.scss";
import { useState } from "react";

const Authentication = () => {
  const [isReferred, setIsReferred] = useState(false);

  return (
    <div className="Authentication">
      {!isReferred && (
        <div className="referral-container">
          <h1>referral code</h1>
          <input></input>
        </div>
      )}

      {isReferred && (
        <div className="sign">
          <h1>Sign up</h1>
        </div>
      )}
    </div>
  );
};

export default Authentication;
