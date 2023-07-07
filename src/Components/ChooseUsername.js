import "./ChooseUsername.scss";
import { useEffect, useState } from "react";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";
import { auth, db } from "../firebaseConfig";
import { updateProfile } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const ChooseUsername = () => {
  const [username, setUsername] = useState("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);

  useEffect(() => {
    checkAvailability(); // Trigger checkAvailability when username state changes
  }, [username]);

  const checkAvailability = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));

      let isAvailable = true;

      querySnapshot.forEach((doc) => {
        if (doc.data().username === username) {
          isAvailable = false;
          console.log("Match found!");
        }
      });

      setIsUsernameAvailable(isAvailable);
    } catch (error) {
      console.error("Error checking username availability:", error);
    }
  };

  const updateUsername = async () => {
    try {
      // Update the user profile

      if (isUsernameAvailable) {
        await updateProfile(auth.currentUser, {
          displayName: username,
        });

        // Update the username in Firestore
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userDocRef, {
          username: auth.currentUser.displayName,
        });

        console.log("Username updated successfully!");
      }
    } catch (error) {
      console.error("Error updating username:", error);
    }
  };

  return (
    <div className="choose-username">
      <h1 className="authentication-title">Choose username</h1>
      <FormInput
        placeholder="Username"
        // Use the value prop to ensure accurate input value
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormButton text="Next" onClick={updateUsername} opacity={!isUsernameAvailable && "0.5"} />

      {username.length > 0 && isUsernameAvailable ? (
        <h3>Username available</h3>
      ) : (
        username.length > 0 &&
        !isUsernameAvailable && <h3>Username unavailable</h3>
      )}
    </div>
  );
};

export default ChooseUsername;
