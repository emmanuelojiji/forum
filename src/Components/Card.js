import Avatar from "./Avatar";
import "./Card.scss";

const Card = ({username, content}) => {
  return (
    <div className="Card">
      <div className="username-avatar-wrap">
        <Avatar size="30px"/>
        <h5>{username}</h5>
      </div>
      <p>
        {content}
      </p>
    </div>
  );
};

export default Card;
