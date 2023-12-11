import React from 'react';
import { useFormik } from 'formik';
import { fetchAPI } from './api/api';
import { FormControl, FormLabel, Input, Select, Button, Box } from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: '',
            occasion: ''
        },
        onSubmit: values => {
            console.log('Form Data', values);
            submitForm(values);
        },
    });

    const handleDateChange = (e) => {

        const selectedDate = e.target.value;
        formik.handleChange(e);
        fetchAPI(selectedDate).then(times => {
            dispatch({ type: 'SET_TIMES', times });
        }).catch(error => {
            console.error('Failed to fetch times for selected date:', error);
            navigate('/error');
        });
    };

    return (
        <Box className="form-container" style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel htmlFor="date">Choose date</FormLabel>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                        onChange={handleDateChange}
                        value={formik.values.date}
                        aria-required="true"
                        aria-label="Date"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="time">Choose time</FormLabel>
                    <Select
                        id="time"
                        name="time"
                        onChange={formik.handleChange}
                        value={formik.values.time}
                        aria-required="true"
                        aria-label="Time"
                    >
                        {availableTimes && availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="guests">Number of guests</FormLabel>
                    <Input
                        id="guests"
                        name="guests"
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        onChange={formik.handleChange}
                        value={formik.values.guests}
                        aria-required="true"
                        aria-label="Number of guests"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select
                        id="occasion"
                        name="occasion"
                        onChange={formik.handleChange}
                        value={formik.values.occasion}
                        aria-label="Occasion"
                    >
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </Select>
                </FormControl>

                <Button colorScheme="yellow" type="submit" aria-label="Submit reservation">Make Your Reservation</Button>
            </form>
        </Box>
    );
}

export default BookingForm;