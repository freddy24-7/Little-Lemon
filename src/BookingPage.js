import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <div>
            <h1 className="center-container">Book Your Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </div>
    );
}

export default BookingPage;
