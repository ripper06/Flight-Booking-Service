const express = require('express');

const {ServerConfig} = require('./config');
const apiRoutes = require('./routes')


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoutes);
app.use('/bookingService/api', apiRoutes);


app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully server started on port : ${ServerConfig.PORT}`);
});