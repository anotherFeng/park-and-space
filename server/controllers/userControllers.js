const User = require('../../database/models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = (req, res) => {
  const { email, password } = req.body;

  if(!password || !email) {
    return res.status(422).send('Data missing!')
  };

  User.findUser(email)
    .then((foundUser) => {
      if(foundUser.hasSamePassword(password)) {
        const token = jwt.sign({
          userId: foundUser.id,
          username: foundUser.username
        }, process.env.JWT_SECRET, {expiresIn: '1h'});
        
        return res.json(token);
      } else {
        res.status(422).send("Wrong email or password");
      }
    })
    .catch((err) => {
      res.status(422).send(err);
    })
}

exports.register = async (req, res) => {
  const { username, email, password, passwordConfirmation } = req.body;
  if(!password || !email) {
    return res.status(422).send("Provide email and password!");
  };
  if(password !== passwordConfirmation) {
    return res.status(422).send("password didn't match");
  };

  User.checkEmail(email)
    .then((foundEmail) => {
      if(foundEmail) {
        return res.status(422).send("email already exist");
      } else {
        const user = { username, email, password };
        return User.createNewUser(user);
      }
    })
    .then(() => {
      return res.status(201).send("register completed");
    })
    .catch((error) => {
      return res.status(422).send("save failed")
    })
}