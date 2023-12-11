import React from 'react';
import './Card.css';

function Card({ title, content, image, price }) {


    return (
        <div className="card">
            <div className="card-image-container">
                {image && <img src={image} alt={title} className="card-image" />}
            </div>
            <div className="card-content">
                <div className="card-title">
                    <span className="menu-item">{title}</span>
                    <span className="price">{price}</span>
                </div>
                <p className="card-paragraph">{content}</p>
            </div>
        </div>
    );
}


export default Card;
