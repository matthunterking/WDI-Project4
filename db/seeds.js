const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const User = require('../models/user');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    name: 'Matt',
    email: 'm@m.com',
    password: 'm',
    passwordConfirmation: 'm',
    gender: 'Male',
    seeking: 'Women',
    bio: 'Even though he is married he is looking for a fling',
    dateRequests: 'none',
    image: 'https://www.petmd.com/sites/default/files/guide-to-guinea-pigs.jpg' 
  },{
    name: 'Bridget',
    email: 'b@b.com',
    password: 'b',
    passwordConfirmation: 'b',
    gender: 'Female',
    seeking: 'Men',
    bio: 'Do you like small australians? If you do come on down!',
    dateRequests: 'loads',
    image: 'http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/monster_primary.png?itok=QWN7T3o-&resize=1100x619'
  }])
    .then(users => console.log(`${users.length} created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
