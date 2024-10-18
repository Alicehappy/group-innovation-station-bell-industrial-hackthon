// Hero.jsx
import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to Bell Connect</h1>
      <p className="hero__p">Explore the best events happening around you.</p>
      <Link to="/events">
        <button className="hero__cta">Get Started</button>
      </Link>
    </section>
  );
};

export default Hero;
