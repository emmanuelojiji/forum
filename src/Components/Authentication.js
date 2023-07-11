import "./Authentication.scss";
import { useEffect, useState } from "react";
import SignUp from "../Components/SignUp";
import { db, auth } from "../firebaseConfig";
import SignIn from "./SignIn";
import Referral from "./Referral";
import ChooseUsername from "./ChooseUsername";
import { addDoc, setDoc, doc, Timestamp } from "firebase/firestore";

const Authentication = ({ setUserSignedIn }) => {
  const [view, setView] = useState("sign-in");


  return (
    <div className="Authentication">
      <div className="authentication-content">
        {view === "sign-in" && (
          <SignIn setView={setView} setUserSignedIn={setUserSignedIn} />
        )}

        {view === "referral" && <Referral setView={setView} />}

        {view === "sign-up" && <SignUp setView={setView} />}

        {view === "choose-username" && <ChooseUsername />}
      </div>
    </div>
  );
};

export default Authentication;
