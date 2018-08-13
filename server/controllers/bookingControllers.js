const Booking = require('../../database/models/bookingModel');
const Rental = require('../../database/models/rentalModel');

exports.createBooking = (req, res) => {
  const { rental } = req.body;
  const user = res.locals.user;
  Booking.saveBooking(req.body);
  Rental.findRentalById(rental._id)
    .then((foundRental) => {
      if(foundRental.user.id === user.id) {
        res.status(422).send("Cannot create booking on your own rental");
      } else {
        res.json({foundRental})
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    })
}