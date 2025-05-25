const dotenv = require('dotenv');//calls an object

dotenv.config();

module.exports = {
    PORT : process.env.PORT
}
