const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
  title: { type: String, required: true, max: [128, `Too long, max is 128 chars`]},
  city: { type: String, required: true, lowercase: true},
  street: { type: String, required: true, min: [4, `Too short, min is 4 chars`]},
  category: {type: String, required: true, lowercase: true},
  image: {type: String, required: true},
  bedrooms: Number,
  shared: Boolean,
  description: { type: String, required: true },
  dailyRate: Number,
  createdAt: { type: Date, default: Date.now },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking'}]
});

const Rental = mongoose.model('Rental', rentalSchema);
module.exports.Rental = Rental;

exports.findRentalById = (rentalId) => {
  return new Promise((resolve, reject) => {
    Rental.findById(rentalId)
    .populate('bookings')
    .populate('user')
    .exec()
    .then((foundRental) => {
      console.log(foundRental)
      resolve(foundRental);
    })
    .catch((err) => {
      reject(err);
    })
  })
}