const User = require('../../database/models/userModel');

exports.login = (req, res) => {

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