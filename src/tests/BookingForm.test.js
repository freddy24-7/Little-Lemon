import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './../BookingForm';
import * as apiModule from './../api/api';

// Mock the API module
jest.mock('./../api/api', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn()
}));


describe('BookingForm', () => {
    const mockProps = {
        availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
        dispatch: jest.fn(),
        submitForm: jest.fn()
    };

    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();
    });

    it('renders the date label correctly', () => {
        render(<BookingForm {...mockProps} />);
        expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    });

    it('renders the guests label correctly', () => {
        render(<BookingForm {...mockProps} />);
        expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    });

    it('can be submitted by the user', async () => {
        apiModule.fetchAPI.mockResolvedValue(['18:00', '19:00', '20:00']);
        apiModule.submitAPI.mockResolvedValue(true);

        render(<BookingForm {...mockProps} />);

        fireEvent.change(screen.getByLabelText('Choose date'), {
            target: { value: '2023-12-12' }
        });
        fireEvent.change(screen.getByLabelText('Choose time'), {
            target: { value: '18:00' }
        });
        fireEvent.change(screen.getByLabelText('Number of guests'), {
            target: { value: 4 } // Use a number here
        });
        fireEvent.change(screen.getByLabelText('Occasion'), {
            target: { value: 'Birthday' }
        });

        fireEvent.click(screen.getByText(/Make Your Reservation/i));

        await waitFor(() => {
            expect(mockProps.submitForm).toHaveBeenCalledWith({
                date: '2023-12-12',
                time: '18:00',
                guests: 4,
                occasion: 'Birthday'
            });
        });
    });
});
