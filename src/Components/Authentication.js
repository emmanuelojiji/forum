import "./Authentication.scss";
import { useEffect, useState } from "react";
import SignUp from "../Components/SignUp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import SignIn from "./SignIn";
import Referral from "./Referral";
import ChooseUsername from "./ChooseUsername";

const Authentication = ({ setUserSignedIn }) => {
  const [view, setView] = useState("sign-up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const code = "123456";

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setView("choose-username")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="Authentication">
      <div className="authentication-content">
        {view === "sign-in" && (
          <SignIn setView={setView} setUserSignedIn={setUserSignedIn} />
        )}

        {view === "referral" && <Referral setView={setView} code={code} />}

        {view === "sign-up" && (
          <SignUp
            onClick={handleSignUp}
            setEmail={setEmail}
            email={email}
            password={password}
            setPassword={setPassword}
          />
        )}

        {view === "choose-username" && <ChooseUsername />}
      </div>
    </div>
  );
};

export default Authentication;
