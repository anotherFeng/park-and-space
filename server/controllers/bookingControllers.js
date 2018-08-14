const Booking = require('../../database/models/bookingModel');
const Rental = require('../../database/models/rentalModel');
const moment = require('moment');

exports.createBooking = (req, res) => {
  const { startAt, endAt, rental } = req.body;
  const user = res.locals.user;
  Rental.findRentalById(rental._id)
    .then((foundRental) => {
      if(foundRental.user.id === user.id) {
        res.status(422).send("Cannot create booking on your own rental");
      } else {
        if(isValidBooking(foundRental, startAt, endAt)) {
          Booking.saveBooking(req.body)
            .then((savedBooking) => {
              foundRental.bookings.push(savedBooking);
              foundRental.save();
            })
          res.json({'created': true});
        } else {
          res.status(422).send("Selected dates are already taken.");
        }
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    })
}

const isValidBooking = (rental, start, end) => {
  let isValid = true;
  if(rental.bookings && rental.bookings.length > 0) {
    isValid = rental.bookings.every((booking) => {
      const proposedStart = moment(start);
      const proposedEnd = moment(end);
      const currentStart = moment(booking.startAt);
      const currentEnd = moment(booking.endAt);
      return ((currentStart < proposedStart && currentEnd < proposedStart) || (proposedEnd < currentEnd && proposedEnd < currentStart))
    });
  }
  return isValid
}