import "./Footer.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const Footer = () => {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/profile">Link</Link>
      <Link to="/profile">
        <Avatar size="30px"></Avatar>
      </Link>
    </footer>
  );
};

export default Footer;
