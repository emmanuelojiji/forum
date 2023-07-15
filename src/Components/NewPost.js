import "./NewPost.scss";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { addDoc, doc, collection, Timestamp } from "firebase/firestore";

const NewPost = ({ createPostVisible, setCreatePostVisible }) => {
  const [userInput, setUserInput] = useState();

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  const handleSendPost = async () => {
    try {
      const postsRef = collection(db, "posts");
      await addDoc(postsRef, {
        uid: auth.currentUser.uid,
        username: auth.currentUser.displayName,
        content: userInput,
        time: Timestamp.now(),
      });
      console.log("it worked");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="NewPost"
      style={{
        transform: createPostVisible ? "translateY(0%)" : "translateY(100%)",
      }}
    >
      <button
        className="close"
        onClick={() => {
          setCreatePostVisible(false);
        }}
      >
        Close
      </button>

      <button
        className="close"
        onClick={() => {
          handleSendPost();
          setCreatePostVisible(false);
        }}
      >
        Send
      </button>

      <textarea
        placeholder="Start typing.."
        onChange={(e) => setUserInput(e.target.value)}
      ></textarea>
    </div>
  );
};

export default NewPost;
