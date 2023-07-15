import "./Footer.scss";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const Footer = ({ createPostVisible, setCreatePostVisible }) => {
  return (
    <footer>
      <Link to="/">Home</Link>
      <p
        onClick={() =>
          createPostVisible
            ? setCreatePostVisible(false)
            : setCreatePostVisible(true)
        }
        className="add"
      >
        New Post
      </p>
      <Link to="/profile">
        <Avatar size="30px"></Avatar>
      </Link>
    </footer>
  );
};

export default Footer;
