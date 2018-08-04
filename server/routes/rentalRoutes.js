const router = require('express').Router();
const rentalCtrl = require('../controllers/rentalControllers');

router.route('/')
  .get(rentalCtrl.getRentals)

router.route('/:id')
  .get(rentalCtrl.getRentalById)

module.exports = router;