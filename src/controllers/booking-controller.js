const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { BookingService } = require('../services');
const { v4: uuidv4 } = require('uuid');

const inMemDb = {}; // In-memory store for idempotency

async function createBooking(req, res) {
    try {
        const response = await BookingService.createBooking({
            flightId: req.body.flightId,
            userId: req.body.userId,
            noofSeats: req.body.noofSeats
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function makePayment(req, res) {
    try {
        // Use provided key or generate a new one
        const idempotencyKey = req.headers['x-idempotency-key'] || uuidv4();

        // Prevent re-processing if already handled
        if (inMemDb[idempotencyKey]) {
            return res.status(StatusCodes.CONFLICT).json({
                message: 'Duplicate payment: This idempotency key has already been used.',
                idempotencyKey,
                data: inMemDb[idempotencyKey]
            });
        }

        const response = await BookingService.makePayment({
            totalCost: req.body.totalCost,
            userId: req.body.userId,
            bookingId: req.body.bookingId
        });

        // Store the response under the key
        inMemDb[idempotencyKey] = response;

        SuccessResponse.data = { ...response, idempotencyKey };
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createBooking,
    makePayment,
};
