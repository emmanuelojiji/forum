import "./Header.scss";
import { useState } from "react";

const Header = ({menuOpen, setMenuOpen}) => {
  

  return (
    <header>
      <div className="menu-logo-wrap">
        <p
          className="mobile-menu"
          onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(true))}
        >
          Mobile
        </p>
        <h1>Tech After Dark</h1>
      </div>
      <div className="avatar"></div>
    </header>
  );
};

export default Header;
