const router = require('express').Router();
const userCtrl = require('../controllers/userControllers');
const bookingCtrl = require('../controllers/bookingControllers');

router.route('/')
  .post(userCtrl.authMiddleware, bookingCtrl.createBooking)


module.exports = router;