import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import Button from './Button';
import restauranfood from './assets/restauranfood.jpg';

function Banner() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/booking-form'); // Update this path if your BookingForm route is different
    };

    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1 className="banner-title">Little Lemon</h1>
                <h3 className="banner-subtitle">Chicago</h3>
                <p className="banner-text">
                    We are a family-owned Mediterranean restaurant
                    focused on traditional recipes with a modern twist.
                </p>
                <Button className="banner-button" label="Reserve a Table" onClick={handleButtonClick} />
            </div>
            <img
                src={restauranfood}
                alt="Banner Image"
                className="banner-image"
            />
        </div>
    );
}

export default Banner;
