import React, {useEffect, useReducer} from 'react';
import BookingPage from './BookingPage';
import {fetchAPI, submitAPI} from './api/api';
import {useNavigate} from 'react-router-dom';


const initializeTimes = async (date) => {
    try {
        return await fetchAPI(date);
    } catch (error) {
        console.error('Failed to fetch initial times:', error);
        return [];
    }
};


const updateTimes = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.times;
        default:
            return state;
    }
};


function Main() {
    const navigate = useNavigate();

    const [availableTimes, dispatch] = useReducer(updateTimes, []);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
        initializeTimes(today).then(times => {
            dispatch({ type: 'SET_TIMES', times });
        }).catch(error => {
            console.error('Error fetching times:', error);
        });
    }, []);

    const submitForm = async (formData) => {
        try {
            const isSubmitted = await submitAPI(formData);
            if (isSubmitted) {
                navigate('/confirmed-booking');
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };


    return (
        <>
            <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </>
    );
}

export default Main;
