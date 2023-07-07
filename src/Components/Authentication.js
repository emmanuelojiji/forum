import "./Authentication.scss";
import { useEffect, useState } from "react";
import SignUp from "../Components/SignUp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../firebaseConfig";
import SignIn from "./SignIn";
import Referral from "./Referral";
import ChooseUsername from "./ChooseUsername";
import { addDoc, setDoc, doc, Timestamp } from "firebase/firestore";

const Authentication = ({ setUserSignedIn }) => {
  const [view, setView] = useState("sign-up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setView("choose-username");

      const newDoc = await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: "",
        username: "",
        country: "",
        job_role: "",
        time_created: Timestamp.now(),
      });
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <div className="Authentication">
      <div className="authentication-content">
        {view === "sign-in" && (
          <SignIn setView={setView} setUserSignedIn={setUserSignedIn} />
        )}

        {view === "referral" && <Referral setView={setView} />}

        {view === "sign-up" && (
          <SignUp
            onClick={handleSignUp}
            setEmail={setEmail}
            email={email}
            password={password}
            setPassword={setPassword}
            setView={setView}
          />
        )}

        {view === "choose-username" && <ChooseUsername />}
      </div>
    </div>
  );
};

export default Authentication;
