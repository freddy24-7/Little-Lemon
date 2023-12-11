import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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
        jest.clearAllMocks();
        apiModule.fetchAPI.mockResolvedValue(['18:00', '19:00', '20:00']);
    });

    it('renders correctly', () => {
        render(
            <MemoryRouter>
                <BookingForm {...mockProps} />
            </MemoryRouter>
        );
    });

    it('submits valid form data correctly', async () => {
        render(
            <MemoryRouter>
                <BookingForm {...mockProps} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2023-12-12' } });
        fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
        fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: 4 } });
        fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

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

    it('renders the date label correctly', () => {
        render(
            <MemoryRouter>
                <BookingForm {...mockProps} />
            </MemoryRouter>
        );
        expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    });

    it('renders the guests label correctly', () => {
        render(
            <MemoryRouter>
                <BookingForm {...mockProps} />
            </MemoryRouter>
        );
        expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    });

    it('can be submitted by the user', async () => {
        render(
            <MemoryRouter>
                <BookingForm {...mockProps} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2023-12-12' } });
        fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
        fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: 4 } });
        fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

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

    it('should have correct HTML attributes', () => {
        render(
            <MemoryRouter>
                <BookingForm {...mockProps} />
            </MemoryRouter>
        );
        const dateInput = screen.getByLabelText('Choose date');
        expect(dateInput).toHaveAttribute('type', 'date');

        const guestsInput = screen.getByLabelText('Number of guests');
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    });

    it('updates time options based on selected date', async () => {
        apiModule.fetchAPI.mockResolvedValue(['17:00', '18:00']);

        render(
            <MemoryRouter>
                <BookingForm {...mockProps} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2023-12-12' } });

        await waitFor(() => {
            expect(apiModule.fetchAPI).toHaveBeenCalledWith('2023-12-12');
            // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(screen.getByLabelText('Time')).toHaveTextContent('17:00');
            // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(screen.getByLabelText('Time')).toHaveTextContent('18:00');
        });
    });


    it('handles API errors when fetching times', async () => {
        apiModule.fetchAPI.mockRejectedValue(new Error('Network Error'));

        render(
            <MemoryRouter>
                <BookingForm {...mockProps} />
            </MemoryRouter>
        );
        fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2023-12-12' } });
    });
});
