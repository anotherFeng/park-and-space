const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    min: [4, 'too short'],
    max: [32, 'too long'],
    unique: true,
    required: 'email is required',
  },
  email: {
    type: String,
    min: [4, 'too short'],
    max: [32, 'too long'],
    unique: true,
    lowercase: true,
    required: 'email is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password: {
    type: String,
    min: [4, 'too short'],
    max: [32, 'too long'],
    required: 'password is required',
  },
  rentals: [{type: Schema.Types.ObjectId, ref: 'Rental'}]
})

userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10)
    .then((salt) => {
      return bcrypt.hash(user.password, salt)
    })
    .then((hashed) => {
      user.password = hashed;
      next();
    })
})

const User = mongoose.model('User', userSchema);
module.exports.User = User;

exports.checkEmail = (email) => {
  return new Promise((resolve, reject) => {
    User.findOne({email})
    .then((found) => {
      resolve(found);
    })
    .catch((error) => {
      reject(error);
    })
  })
}

exports.createNewUser = (user) => {
  return new Promise((resolve, reject) => {
    const newUser = new User(user);
    newUser.save()
      .then((saved) => {
        resolve(saved);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
