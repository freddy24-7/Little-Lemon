import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';
import Footer from './Footer';
import Specials from './Specials';
import BookingPage from './BookingPage';
import './App.css';

// InitializeTimes and updateTimes functions here
const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
    // Logic to update times based on the action
    return state;
};

function App() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <Router>
            <Header />
            <Banner />
            <Routes>
                <Route path="/booking-form" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
                <Route path="/" element={
                    <>
                        <Specials />
                        <Main />
                    </>
                } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
