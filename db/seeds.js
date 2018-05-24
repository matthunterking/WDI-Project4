const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const User = require('../models/users');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    name: 'Matt',
    email: 'm@m.com',
    password: 'm',
    gender: 'Male',
    seeking: 'All Genders',
    bio: 'Even though he is married he is looking for a fling',
    dateRequests: 'none'
  },{
    name: 'Bridget',
    email: 'b@b.com',
    password: 'b',
    gender: 'Female',
    seeking: 'Men',
    bio: 'Do you like small australians? If you do come on down!',
    dateRequests: 'loads'
  }])
    .then(users => console.log(`${users.length} created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
