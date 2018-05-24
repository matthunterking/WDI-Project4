const mongoose = require('mongoose');

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


//virtual for password confirmation
// userSchema
//   .virtual('passwordConfirmation')
//   .set(function setPasswordConfirmation(passwordConfirmation){
//     this._passwordConfirmation = passwordConfirmation;
//   });

module.exports = mongoose.model('User', userSchema);
