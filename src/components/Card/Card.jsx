// Card.jsx
import React from 'react';
import './Card.scss';

const Card = ({ title, description, image }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card__image" />
            <div className="card__content">
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{description}</p>
            </div>
        </div>
    );
};

export default Card;
