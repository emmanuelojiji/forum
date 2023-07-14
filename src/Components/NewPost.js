import "./NewPost.scss";

const NewPost = ({ createPostVisible, setCreatePostVisible }) => {
  return (
    <div
      className="NewPost"
      style={{
        transform: createPostVisible ? "translateY(0%)" : "translateY(100%)",
      }}
    >
 
      <button className="close"
        onClick={() => {
          setCreatePostVisible(false);
        }}
      >
        Close
      </button>

      <textarea placeholder="Start typing.."></textarea>
      </div>

  );
};

export default NewPost;
