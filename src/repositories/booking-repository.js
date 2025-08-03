const {StatusCodes} = require('http-status-codes');
const {Booking} = require('../models');
const CrudRepository = require('./crud-repository');

class BookingRepository extends CrudRepository{
    constructor(){
        super(Booking);
    }

    async createBooking(data, transaction) {
        const response = await Booking.create(data, {transaction: transaction});
        return response;
    }
    
    async get(data,transaction){
       
        const response = await this.model.findByPk(data, {transaction: transaction});
            if(!response){
                throw new AppError('The amount of the payment does not match', StatusCodes.NOT_FOUND);
            }
        return response;
       
    }

    async update(id, data, transaction) { // data -> {col: value, ....}
        const response = await Booking.update(data, {
            where: {
                id: id
            }
        }, {transaction: transaction});
        return response;
    }

}

module.exports = BookingRepository;