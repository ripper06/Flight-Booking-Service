const {StatusCodes} = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
 
function validatePayments(req, res, next){
    // console.log(req.body);

    if(!req.body.userId){
        ErrorResponse.message = 'Something went wrong while doing payments...';
        ErrorResponse.error = new AppError(['UserId is not in correct format...'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }

    if(!req.body.bookingId){
        ErrorResponse.message = 'Something went wrong while doing payments...';
        ErrorResponse.error = new AppError(['bookingId is not in correct format...'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }

    if(!req.body.totalCost){
        ErrorResponse.message = 'Something went wrong while doing payments...';
        ErrorResponse.error = new AppError(['totalCost is not in correct format...'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }

    next();
}

module.exports = {
   validatePayments,
}