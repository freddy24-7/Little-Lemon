import React from 'react';
import './Header.css';
import logo from './assets/Logo.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Company Logo" className="logo" /> {/* Use the logo image */}
            <nav className="nav">
                <ul className="nav-links">
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link">Menu</a></li>
                    <li><a href="#" className="nav-link">Reservation</a></li>
                    <li><a href="#" className="nav-link">Order Online</a></li>
                    <li><a href="#" className="nav-link">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
