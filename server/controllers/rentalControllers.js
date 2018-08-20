const { Rental } = require('../../database/models/rentalModel');

exports.getRentals = (req, res) => {
  const city = req.query.city;
  if(city) {
    Rental.find({city: city.toLowerCase()})
      .select('-bookings')
      .exec()
      .then((found) => {
        if(found.length === 0) {
          res.status(422).send(`No rental found in city of ${city.toLowerCase()}`)
        }
        res.json(found);
      })
      .catch((err) => {
        console.log(err)
        res.status(404).send(err)
      })
  } else {
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