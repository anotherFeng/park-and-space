const express = require('express');
const rentalRoutes = require('./routes/rentalRoutes');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Rental = require('../database/models/rental');
const FakeDb = require('../database/fake-db');

const MONGO_URI = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PW}@ds111562.mlab.com:11562/ng-bnb`;
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seeDb();
  });

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api/v1/rentals', rentalRoutes);

app.listen((PORT), () => {
  console.log("listning to port 3001");
})