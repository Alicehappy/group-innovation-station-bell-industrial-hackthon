// Hero.jsx
import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <h1>Welcome to Bell</h1>
            <p>Find your events here.</p>
            <button className="hero__cta">Get Started</button>
        </section>
    );
};

export default Hero;
