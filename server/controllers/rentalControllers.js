const { Rental } = require('../../database/models/rentalModel');
const { User } = require('../../database/models/userModel');

exports.getRentals = (req, res) => {
  const city = req.query.city;
  const query = city ? {city: city.toLowerCase()} : {};

  Rental.find(query)
    .select('-bookings')
    .exec()
    .then((found) => {
      if(found.length === 0) {
        res.status(422).send(`No rentals found in city of ${city.toLowerCase()}`)
      }
      res.json(found);
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send(err)
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

exports.createRental = (req, res) => {
  const { title, city, street, category, image, shared, bedrooms, description, dailyRate } = req.body;
  const user = res.locals.user;

  const rental = new Rental({user, title, city, street, category, image, shared, bedrooms, description, dailyRate});
  Rental.create(rental)
    .then((createdRental) => {
      User.update({_id: user.id}, { $push: {rentals: createdRental}}, function(){})
      res.json(createdRental)
    })
    .catch((err) => {
      res.status(422).send(err)
    })
}