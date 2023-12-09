import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

function BookingPage() {
    return (
        <div>
            <h1 className="center-container">Book Your Table</h1>
            <BookingForm />
        </div>
    );
}

export default BookingPage;
