import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import bellTalk from "../../assets/icons/bell-talk.svg";
import bellHero from "../../assets/images/BellICon.webp";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={bellTalk} alt="logo"></img>
      </div>
      <div className="header__nav">
        <a className="header__nav-home">Home</a>
        <Link to="/events" className="header__nav-resources">Events</Link>
        <a className="header__nav-support">Support</a>
      </div>
    </header>
  );
};

export default Header;
