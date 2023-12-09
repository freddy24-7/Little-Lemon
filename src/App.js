import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';
import Footer from './Footer';
import Specials from './Specials';
import BookingPage from './BookingPage';

function App() {
    return (
        <Router>
            <>
                <Header />
                <Banner />
                <Routes>
                    <Route path="/booking-form" element={<BookingPage />} />
                    <Route path="/" element={
                        <>
                            <Specials />
                            <Main />
                        </>
                    } />
                </Routes>
                <Footer />
            </>
        </Router>
    );
}

export default App;
