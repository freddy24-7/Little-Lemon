import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';
import Footer from './Footer';
import Specials from './Specials';
import Display from "./Display";
import ConfirmedBooking from './ConfirmedBooking';
import ErrorPage from './ErrorPage';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Banner />
                        <Specials />
                        <Display />
                    </>
                } />
                <Route path="/book-table" element={<Main />} />
                <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
