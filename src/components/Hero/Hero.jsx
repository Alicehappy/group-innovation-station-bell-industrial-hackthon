// Hero.jsx
import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to Bell</h1>
      <p>Find your events here.</p>
      <Link to="/events">
        <button className="hero__cta">Get Started</button>
      </Link>
    </section>
  );
};

export default Hero;
