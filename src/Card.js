import React from 'react';
import './Card.css';

function Card({ title, content }) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-paragraph">{content}</p>
        </div>
    );
}

export default Card;
