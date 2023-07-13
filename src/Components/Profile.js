import "./Profile.scss";
import { auth, db } from "../firebaseConfig";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Avatar from "./Avatar";
import ProfileTag from "./ProfileTag";

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

  const [view, setView] = useState("posts");

  return (
    <div className="Profile">
      <div className="profile-header">
        <Avatar />
        <h1 className="username"> {user.displayName}</h1>
        <p className="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          feugiat ultricies efficitur👨‍💻
        </p>
        <div className="profile-tag-container">
          <ProfileTag />
          <ProfileTag />
          <ProfileTag />
        </div>
        {/*userVerified && <h1>VERIFIED</h1>*/}
      </div>

      <div className="profile-nav">
        <div
          className="nav-slide"
          style={{
            transform: view === "posts" ? "translateX(0%)" : "translateX(100%)",
          }}
        ></div>
        <span className="nav-button" onClick={() => setView("posts")}>
          Posts
        </span>
        <span className="nav-button" onClick={() => setView("likes")}>
          Likes
        </span>
      </div>

      <div className="profile-posts">
        <div
          className="profile-posts-carousel"
          style={{
            transform:
              view === "posts" ? "translateX(0%)" : "translateX(-100%)",
          }}
        >
          <div className="view-1 view">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="view-2 view">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
