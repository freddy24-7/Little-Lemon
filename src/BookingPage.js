import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

function BookingPage({ availableTimes, dispatch }) {
    return (
        <div>
            <h1 className="center-container">Book Your Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}

export default BookingPage;
