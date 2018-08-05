const router = require('express').Router();
const userCtrl = require('../controllers/userControllers');

router.route('/auth')
  .post(userCtrl.login);

router.route('/register')
  .post(userCtrl.register);

module.exports = router;