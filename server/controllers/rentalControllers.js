const { Rental } = require('../../database/models/rentalModel');

exports.getRentals = (req, res) => {
  Rental.find({})
    .select('-bookings')
    .exec()
    .then((found) => {
      res.json(found);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
}

exports.getRentalById = (req, res) => {
  const rentalId = req.params.id;
  Rental.findById(rentalId)
    .populate('user', 'username -_id')
    .populate('bookings', 'startAt endAt -_id')
    .exec()
    .then((found) => {
      res.json(found);
    })
    .catch((err) => {
      res.status(422).send(err)
    })
}