import "./Footer.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </footer>
  );
};

export default Footer;
