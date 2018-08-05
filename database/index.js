const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const MONGO_URI = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PW}@ds111562.mlab.com:11562/ng-bnb`;
if(!MONGO_URI){
  throw new Error('Please provide a valid mLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true })

const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));

module.exports = db;