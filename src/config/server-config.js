const dotenv = require('dotenv');//calls an object

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    FLIGHT_SERVICE : process.env.FLIGHT_SERVICE
}
