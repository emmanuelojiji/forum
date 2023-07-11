import "./Sign.scss";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../firebaseConfig";
import { addDoc, setDoc, doc, Timestamp } from "firebase/firestore";

const SignUp = ({ setView }) => {
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
      <FormButton text="Sign up" onClick={() => handleSignUp()} />
      <p class="alternative" onClick={() => setView("sign-in")}>
        Or sign In
      </p>
    </div>
  );
};

export default SignUp;
