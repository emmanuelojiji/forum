import "./Card.scss";

const Card = () => {
  return (
    <div className="Card">
      <div className="username-avatar-wrap">
        <div className="avatar"></div>
        <h5>Username</h5>
      </div>
      <h2>Post Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        feugiat ultricies efficitur. Aenean scelerisque lorem id enim finibus,
        et molestie orci pellentesque. Integer vel faucibus elit.
      </p>
    </div>
  );
};

export default Card;
