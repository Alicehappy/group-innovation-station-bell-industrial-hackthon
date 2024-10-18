import React, { useRef } from 'react';
import './Carousel.scss';

const Carousel = ({ children }) => {
    const carouselRef = useRef(null);

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += carouselRef.current.clientWidth;
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= carouselRef.current.clientWidth;
        }
    };

    return (
        <div className="carousel-container">
            <button className="carousel-control carousel-control--left" onClick={handlePrev}>
                &#8249;
            </button>
            <div className="carousel" ref={carouselRef}>
                {children}
            </div>
            <button className="carousel-control carousel-control--right" onClick={handleNext}>
                &#8250;
            </button>
        </div>
    );
};

export default Carousel;
