const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = require('bluebird');


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Non-binary', 'Transgender', 'Other', 'Prefer not to say']},
  seeking: { type: String, enum: ['Men', 'Women', 'All Genders'] },
  bio: { type: String },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  image: { type: String },
  dateRequests: { type: String }
});



userSchema.plugin(require('mongoose-unique-validator'));

// by resetting the format of the info sent we can remove the password which makes it more secure
userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password;
    return json;
  }
});

// comparing the password given with the (hashed) password stored
userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password);
};

// using a virtual field to temporarily store the password confirmation
// using underscores implies that it is a temporary variable
userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });


//Before (pre) any function 'saves' something, run this function to encrypt the password before it is stored:
userSchema.pre('validate', function checkPassword(next){
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

// checking if password has been modified because if not then it doesn't require hashing
// if it was hashed when it wasnt changed we would be hashing the hashed password
userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
//virtual for password confirmation
// userSchema
//   .virtual('passwordConfirmation')
//   .set(function setPasswordConfirmation(passwordConfirmation){
//     this._passwordConfirmation = passwordConfirmation;
//   });
