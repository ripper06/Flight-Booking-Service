const express = require('express');

const {BookingController} = require('../../controllers')
const {BookingMiddlewares} = require('../../middlewares')

const router = express.Router();

router.post('/',
        BookingController.createBooking
)

router.post(
        '/payments',
        BookingMiddlewares.validatePayments,
        BookingController.makePayment
)

module.exports = router;