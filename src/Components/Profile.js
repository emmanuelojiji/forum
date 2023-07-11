import "./Profile.scss";
import { auth, db } from "../firebaseConfig";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = ({ userSignedIn, setUserSignedIn }) => {
  const user = auth.currentUser;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUserSignedIn(true);

      // ...
    } else {
      setUserSignedIn(false);
    }
  });

  const [userVerified, setUserVerified] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    checkVerficiation();
  });

  const checkVerficiation = async () => {
    const currentUserInfo = await getDoc(
      doc(db, "users", auth.currentUser.uid)
    );

    if (currentUserInfo.data().verified) {
      setUserVerified(true);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <>
      <h1>Profile</h1>
      <h1>User is: {user.displayName}</h1>
      {userVerified && <h1>VERIFIED</h1>}

      <h1 onClick={() => handleSignOut()}>LOG OUT</h1>
    </>
  );
};

export default Profile;
