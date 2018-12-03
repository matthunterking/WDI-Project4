const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const User = require('../models/user');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    name: 'Trisha',
    email: 'trisha@destinationlove.com',
    age: 24,
    password: 't',
    passwordConfirmation: 't',
    gender: 'Female',
    seeking: 'Women',
    location: {
      lat: 51.5212,
      lng: -0.0718
    },
    bio: 'I like long walks in the woods and cocktails',
    interests: { animals: 'cats', evening: 'in', holiday: 'beach', food: 'takeaway', film: 'romantic'},
    image: 'https://orig00.deviantart.net/b893/f/2011/227/f/6/profile_picture_by_aehireiel_stock-d46o5ls.jpg'
  },{
    name: 'Ned',
    age: 27,
    email: 'ned@destinationlove.com',
    password: 'n',
    passwordConfirmation: 'n',
    gender: 'Male',
    seeking: 'Men',
    location: {
      lat: 51.4993,
      lng: -0.1273
    },
    bio: 'I enjoy writing and I am currently learning to code html',
    interests: { animals: 'dogs', evening: 'out', holiday: 'beach', food: 'takeaway', film: 'romantic'},
    image: 'https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/production/user_74/picture_17112016100959.jpg'
  },{
    name: 'Sandy',
    age: 21,
    email: 'sandy@destinationlove.com',
    password: 's',
    passwordConfirmation: 's',
    gender: 'Female',
    seeking: 'Men',
    location: {
      lat: 52.5342,
      lng: -0.0492
    },
    bio: 'I enjoy listening to music and I am currently learning to make baskets',
    interests: { animals: 'cats', evening: 'out', holiday: 'city', food: 'resturant', film: 'horror'},
    image: 'http://bestprofilepix.com/wp-content/uploads/2014/03/beautiful-indian-girl-profile-photo.jpg'
  },{
    name: 'Luke',
    age: 34,
    email: 'luke@destinationlove.com',
    password: 'l',
    passwordConfirmation: 'l',
    gender: 'Male',
    seeking: 'Women',
    location: {
      lat: 52.5349,
      lng: -0.1599
    },
    bio: 'I enjoy comic books and I am currently learning to cook japanese food',
    interests: { animals: 'cats', evening: 'out', holiday: 'beach', food: 'takeaway', film: 'romantic'},
    image: 'https://s3.eu-central-1.amazonaws.com/artistarea.gallereplay.com/production/user_9/picture_2405201614728.jpg'
  },{
    name: 'Amanda',
    age: 37,
    email: 'amanda@destinationlove.com',
    password: 'a',
    passwordConfirmation: 'a',
    gender: 'Female',
    seeking: 'Men',
    location: {
      lat: 51.5346,
      lng: -0.0691
    },
    bio: 'I enjoy cooking and I am currently learning MMA',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&h=350'
  },{
    name: 'Siobhan',
    age: 36,
    email: 'siobhan@destinationlove.com',
    password: 's',
    passwordConfirmation: 's',
    gender: 'Female',
    seeking: 'Men',
    location: {
      lat: 52.5342,
      lng: -0.7093
    },
    bio: 'Once I met a unicorn',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'
  },{
    name: 'Emily',
    age: 21,
    email: 'emily@destinationlove.com',
    password: 'e',
    passwordConfirmation: 'e',
    gender: 'Female',
    seeking: 'Women',
    location: {
      lat: 51.5344,
      lng: -0.1000
    },
    bio: 'Once I met a unicorn',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://i2.wp.com/tricksmaze.com/wp-content/uploads/2017/04/Stylish-Girls-Profile-Pictures-42.jpg?resize=629%2C629&ssl=1'
  },{
    name: 'James',
    age: 34,
    email: 'james@destinationlove.com',
    password: 'j',
    passwordConfirmation: 'j',
    gender: 'Male',
    seeking: 'Men',
    location: {
      lat: 53.5346,
      lng: -0.0787
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://www.thelocal.it/userdata/images/1368649381_fotoluca.jpg'
  },{
    name: 'Susan',
    age: 22,
    email: 'susan@destinationlove.com',
    password: 's',
    passwordConfirmation: 's',
    gender: 'Female',
    seeking: 'Men',
    location: {
      lat: 56.5348,
      lng: 0.2069
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://sites.google.com/site/australianwomendatingsites/_/rsrc/1459242937255/home/15.jpg'
  },{
    name: 'Nick',
    age: 18,
    email: 'nick@destinationlove.com',
    password: 'n',
    passwordConfirmation: 'n',
    gender: 'Male',
    seeking: 'Women',
    location: {
      lat: 49.5349,
      lng: -0.6567
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://www.thersa.org/globalassets/profile-images/staff/jake-thorold-312.jpg'
  },{
    name: 'Javi',
    age: 31,
    email: 'javi@destinationlove.com',
    password: 'j',
    passwordConfirmation: 'j',
    gender: 'Male',
    seeking: 'Women',
    location: {
      lat: 52.5340,
      lng: -0.0976
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'http://gardendeckingideas.co.uk/wp-content/uploads/2016/05/profile-picture-299x300.jpg'
  },{
    name: 'Cat',
    age: 22,
    email: 'cat@destinationlove.com',
    password: 'c',
    passwordConfirmation: 'c',
    gender: 'Female',
    seeking: 'Men',
    location: {
      lat: 50.5341,
      lng: -0.0765
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://news.virginia.edu/sites/default/files/styles/uva_basic_article/public/article_image/margaret_anderson_header_3-2.jpg?itok=SDEIIeo-'
  },{
    name: 'Josh',
    age: 34,
    email: 'josh@destinationlove.com',
    password: 'j',
    passwordConfirmation: 'j',
    gender: 'Male',
    seeking: 'Women',
    location: {
      lat: 52.7344,
      lng: -0.0487
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAOHdrm1PZVqoDmsRSxiDOxG2yhW826uB4qoSr_9ls6n0sNsf0Q'
  },{
    name: 'Pete',
    age: 26,
    email: 'pete@destinationlove.com',
    password: 'p',
    passwordConfirmation: 'p',
    gender: 'Male',
    seeking: 'Women',
    location: {
      lat: 51.8350,
      lng: -0.0999
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://pbs.twimg.com/profile_images/756273543462080513/6P-Q3boV_400x400.jpg'
  },{
    name: 'Sally',
    age: 23,
    email: 'sally@destinationlove.com',
    password: 's',
    passwordConfirmation: 's',
    gender: 'Female',
    seeking: 'Both',
    location: {
      lat: 50.5742,
      lng: -0.0000
    },
    bio: '',
    interests: { animals: 'cats', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?width=700&crop=2:1'
  },{
    name: 'Kate',
    age: 19,
    email: 'kate@destinationlove.com',
    password: 'k',
    passwordConfirmation: 'k',
    gender: 'Female',
    seeking: 'Men',
    location: {
      lat: 49.5343,
      lng: -0.0012
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://secure.i.telegraph.co.uk/multimedia/archive/02952/coffey_final_2952712b.jpg'
  },{
    name: 'Lisa',
    age: 19,
    email: 'lisa@destinationlove.com',
    password: 'l',
    passwordConfirmation: 'l',
    gender: 'Female',
    seeking: 'Both',
    location: {
      lat: 49.5340,
      lng: -0.0213
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'beach', food: 'takeaway', film: 'romantic'},
    image: 'http://celebritiesgallery.in/wp-content/uploads/2016/06/Shrenu-Parikh-Profile-435x580.jpg'
  },{
    name: 'Scotty',
    age: 25,
    email: 'scotty@destinationlove.com',
    password: 's',
    passwordConfirmation: 's',
    gender: 'Male',
    seeking: 'Women',
    location: {
      lat: 52.7642,
      lng: -0.0742
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7SaDPAtWvfCccDd5IeDR8ZBKmO0rlEomzTGWUJYwzMUN0XCFz'
  },{
    name: 'Jake',
    age: 31,
    email: 'jake@destinationlove.com',
    password: 'j',
    passwordConfirmation: 'j',
    gender: 'Male',
    seeking: 'Women',
    location: {
      lat: 49.995,
      lng: -0.1000
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://pbs.twimg.com/profile_images/779974739754450945/C2baBgZj_400x400.jpg'
  },{
    name: 'Paul',
    age: 22,
    email: 'paul@destinationlove.com',
    password: 'p',
    passwordConfirmation: 'p',
    gender: 'Male',
    seeking: 'Women',
    location: {
      lat: 51.5344,
      lng: -0.8654
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'http://i.dailymail.co.uk/i/pix/2016/11/04/08/3A0DBA5E00000578-3904282-image-m-20_1478246913359.jpg'
  },{
    name: 'Scott',
    age: 19,
    email: 'scott@destinationlove.com',
    password: 's',
    passwordConfirmation: 's',
    gender: 'Male',
    seeking: 'Women',
    location: {
      lat: 51.9045,
      lng: -0.1009
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://yt3.ggpht.com/a-/ACSszfFHFDajgRlDdSbzFLQNG13ZfIILkMGZS83a4w=s900-mo-c-c0xffffffff-rj-k-no'
  },{
    name: 'Rhiannon',
    age: 33,
    email: 'rhiannon@destinationlove.com',
    password: 'r',
    passwordConfirmation: 'r',
    gender: 'Female',
    seeking: 'Men',
    location: {
      lat: 50.5340,
      lng: -0.2384
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://www.buckinghamfacialplastics.com/wp-content/uploads/2014/01/Belotero.jpg'
  },{
    name: 'Alexandra',
    age: 24,
    email: 'alexandra@destinationlove.com',
    password: 'a',
    passwordConfirmation: 'a',
    gender: 'Female',
    seeking: 'Men',
    location: {
      lat: 51.0343,
      lng: -1.0692
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://yoga-arch.co.uk/wp-content/uploads/2017/11/thumbnail_katrin-profile.jpg'
  },{
    name: 'Sam',
    age: 31,
    email: 'sam@destinationlove.com',
    password: 's',
    passwordConfirmation: 's',
    gender: 'Male',
    seeking: 'Women',
    location: {
      lat: 51.7940,
      lng: -1.0699
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'http://3okfln4bscr41n53f71ti5n1.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/jason-pullman.jpg'
  },{
    name: 'Grace',
    age: 33,
    email: 'grace@destinationlove.com',
    password: 'g',
    passwordConfirmation: 'g',
    gender: 'Female',
    seeking: 'Men',
    location: {
      lat: 50.51247,
      lng: -1.9996
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'http://3.bp.blogspot.com/-PkTMkv7EA0s/UGzFnQdG0OI/AAAAAAAABDk/wX_QemUjL_o/s1600/profile_picture_for_Culture_Cabin,_2012.jpg'
  },{
    name: 'Ruby',
    age: 21,
    email: 'ruby@destinationlove.com',
    password: 'r',
    passwordConfirmation: 'r',
    gender: 'Female',
    seeking: 'Men',
    location: {
      lat: 51.0045,
      lng: -0.7594
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'http://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg'
  },{
    name: 'Sarah',
    age: 28,
    email: 'sarah@destinationlove.com',
    password: 's',
    passwordConfirmation: 's',
    gender: 'Female',
    seeking: 'Men',
    location: {
      lat: 51.0040,
      lng: -0.7592
    },
    bio: '',
    interests: { animals: 'dogs', evening: 'in', holiday: 'beach', food: 'takeaway', film: 'romantic'},
    image: 'http://i.dailymail.co.uk/i/pix/2016/05/23/22/348B850600000578-3605456-image-m-32_1464040491071.jpg'
  },{
    name: 'Brian',
    age: 34,
    email: 'brian@destinationlove.com',
    password: 'b',
    passwordConfirmation: 'b',
    gender: 'Male',
    seeking: 'Men',
    location: {
      lat: 51.0049,
      lng: -0.7597
    },
    bio: '',
    interests: { animals: 'cats', evening: 'out', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://www.picmonkey.com/blog/wp-content/uploads/2016/11/1-intro-photo-final.jpg'
  }])
    .then(users => console.log(`${users.length} created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
