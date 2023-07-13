import Avatar from "./Avatar";
import "./Card.scss";

const Card = () => {
  return (
    <div className="Card">
      <div className="username-avatar-wrap">
        <Avatar size="30px"/>
        <h5>Emmanuel</h5>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        feugiat ultricies efficitur. Aenean scelerisque lorem id enim finibus,
        et molestie orci pellentesque. Integer vel faucibus elit.
      </p>
    </div>
  );
};

export default Card;
