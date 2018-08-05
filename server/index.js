const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const rentalRoutes = require('./routes/rentalRoutes');
const userRouters = require('./routes/userRoutes');
require('../database/index');

// const MONGO_URI = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PW}@ds111562.mlab.com:11562/ng-bnb`;
// mongoose.Promise = global.Promise;
// mongoose.connect(MONGO_URI, { useNewUrlParser: true })

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRouters);

app.listen((PORT), () => {
  console.log("listning to port 3001");
})