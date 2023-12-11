import React from 'react';
import './ErrorPage.css';

function ErrorPage() {
    return (
        <div className="error-container">
            <h1>Booking Error</h1>
            <p>We're sorry, but your booking could not be completed at this time. Please try again later.
            You may want to try booking for a different date or time.
            </p>
        </div>
    );
}

export default ErrorPage;
