const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = require('bluebird');
const moment = require('moment');

const messageSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.ObjectId, ref: 'User' },
  to: { type: mongoose.Schema.ObjectId, ref: 'User' },
  content: { type: String }
},{
  timestamps: true
});

messageSchema.virtual('sentAtRelative')
  .get(function() {
    return moment(this.createdAt).fromNow();
  });

messageSchema.virtual('sentAtRaw')
  .get(function() {
    return moment.unix(this.createdAt);
  });

messageSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.createdAt;
    delete json.updatedAt;
    return json;
  }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: 'This field is required.' },
  email: { type: String, required: 'This field is required.', unique: true },
  age: { type: Number },
  password: { type: String, required: 'This field is required.' },
  gender: { type: String, enum: ['Male', 'Female', 'Non-binary', 'Transgender', 'Other', 'Prefer not to say']},
  seeking: { type: String, enum: ['Men', 'Women', 'Both'] },
  bio: { type: String },
  address: { type: String },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  image: { type: String },
  Interests: [{ type: String }],
  messages: [ messageSchema ],
  pendingMatchRequests: [ { type: mongoose.Schema.ObjectId, ref: 'User' } ],
  acceptedMatchRequests: [ { type: mongoose.Schema.ObjectId, ref: 'User' } ],
  sentMatchRequests: [ { type: mongoose.Schema.ObjectId, ref: 'User' } ]
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
