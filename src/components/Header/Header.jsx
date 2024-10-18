import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import bellTalk from "../../assets/icons/bell-talk.svg";
import bellHero from "../../assets/images/BellICon.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={bellTalk} alt="logo"></img>
        </Link>
      </div>
      <div className="header__nav">
        <Link to="/" className="header__nav-home">
          Home
        </Link>
        <Link to="/events" className="header__nav-resources">
          Events
        </Link>
        <Link to="/therapy" className="header__nav-support">
          Support
        </Link>
      </div>
    </header>
  );
};

export default Header;
