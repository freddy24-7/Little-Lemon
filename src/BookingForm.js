import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Box
} from '@chakra-ui/react';
import './BookingForm.css';

function BookingForm() {
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: '',
            occasion: ''
        },
        onSubmit: values => {
            console.log('Form Data', values);
            // Handle form submission here
        },
    });
    console.log(formik.values);

    return (
        <Box className="form-container" style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel htmlFor="date">Choose date</FormLabel>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.date}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="time">Choose time</FormLabel>
                    <Select
                        id="time"
                        name="time"
                        onChange={formik.handleChange}
                        value={formik.values.time}
                    >
                        {availableTimes.map(time => (
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
                    />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select
                        id="occasion"
                        name="occasion"
                        onChange={formik.handleChange}
                        value={formik.values.occasion}
                    >
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </Select>
                </FormControl>

                <Button colorScheme="yellow" type="submit">Make Your Reservation</Button>
            </form>
        </Box>
    );
}

export default BookingForm;
