import "./Feed.scss";
import Card from "./Card";
import Header from "./Header";
import NewPost from "./NewPost";
import { useEffect, useState } from "react";
import { db, auth } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Feed = ({ createPostVisible, setCreatePostVisible }) => {
  const [posts, setPosts] = useState([]);

  const retrievePosts = async () => {
    try {
      const postsRef = collection(db, "posts");
      const querySnapshot = await getDocs(postsRef);

      const results = querySnapshot.docs.map((doc) => doc.data());

      setPosts(results);
    } catch {
      console.log("couldn't get posts sorry :(");
    }
  };

  retrievePosts();

  return (
    <div className="Feed">
      <Header />
      {posts.map((post) => (
        <Card key={post.id} username={post.username} content={post.content} />
      ))}
    </div>
  );
};

export default Feed;
