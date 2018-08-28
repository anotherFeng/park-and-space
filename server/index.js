const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const rentalRoutes = require('./routes/rentalRoutes');
const userRouters = require('./routes/userRoutes');
const bookingRouters = require('./routes/bookingRoutes');
require('../database/index');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRouters);
app.use('/api/v1/bookings', bookingRouters);

app.listen((PORT), () => {
  console.log("listning to port 3001");
})
