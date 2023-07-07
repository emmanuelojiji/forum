import "./Referral.scss";
import FormInput from "../Components/FormInput";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Referral = ({ setView }) => {
  const codes = ["123456", "abcde", "test-code", "c0de"];

  const printList = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data().time_created);
    });
  };

  return (
    <div className="referral-container">
      <h1 className="authentication-title">
        Enter your referral
        <br /> code
      </h1>
      <FormInput
        placeholder="Code"
        onChange={(e) => {
          const matchingCode = codes.find((code) => code === e.target.value);
          if (matchingCode) {
            setView("sign-up");
          }
        }}
      />
      <button onClick={() => printList()}>Get docs</button>
    </div>
  );
};

export default Referral;
