const router = require('express').Router();
const rentalCtrl = require('../controllers/rentalControllers');
const userCtrl = require('../controllers/userControllers');

router.route('/:id')
  .get(rentalCtrl.getRentalById)
router.route('/')
  .get(rentalCtrl.getRentals)
  .post(userCtrl.authMiddleware, rentalCtrl.createRental)

module.exports = router;