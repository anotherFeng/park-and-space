const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  startAt: { type: Date, required: 'Starting date is required'},
  endAt: { type: Date, required: 'Ending date is required'},
  totalPrice: Number,
  days: Number,
  guests: Number,
  createdAt: { type: Date, defaut: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  rental: { type: Schema.Types.ObjectId, ref: 'Rental'},
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports.Booking = Booking;

exports.saveBooking = (requestBody, user, rental) => {
  return new Promise((resolve, reject) => {
    const { startAt, endAt, totalPrice, guests, days } = requestBody;
    const booking = new Booking({startAt, endAt, totalPrice, guests, days, user, rental})
    booking.save()
      .then((savedBooking) => {
        resolve(savedBooking);
      })
      .catch((err) => {
        reject(err);
      })
  })
 }