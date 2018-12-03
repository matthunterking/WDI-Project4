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
      lat: 51.517580,
      lng: -0.088600
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
      lat: 51.534969,
      lng: -0.103750
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
      lat: 51.508690,
      lng: -0.274190
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
      lat: 51.383190,
      lng: -0.107630
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
      lat: 51.622580,
      lng: -0.079130
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
      lat: 51.438240,
      lng: -0.156670
    },
    bio: 'I have been in the London area for a few years now and always looking to meet new people.',
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
      lat: 51.598549,
      lng: -0.075230
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
      lat: 51.558430,
      lng: -0.006930
    },
    bio: 'Fun loving, affectionate and who knows what it takes to make a relationship work.',
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
      lat: 51.552290,
      lng: -0.232820
    },
    bio: 'I love intimacy and getting swept up in a new relationship, that whirlwind when you meet someone and fall for them instantly.',
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
      lat: 51.487470,
      lng: -0.168680
    },
    bio: 'When I’m not rescuing kittens from trees and singing show tunes to old ladies (what can I say, I’m a selfless guy), I’m catching up with friends, going to the symphony (yes, I promise), and pretending to be Jamie Oliver.',
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
      lat: 51.487469,
      lng: -0.112110
    },
    bio: 'I’m definitely looking for someone who is in love with life and open to exploring all its possibilities.',
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
      lat: 51.481541,
      lng: -0.026530
    },
    bio: 'Sarcastic, sophisticated, witty, dorky, sensitive and free-spirited. Also a fan of adjectives.',
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
      lat: 51.513241,
      lng: -0.035233
    },
    bio: 'I may not be a supermodel, but at least I smell nice... well, that\'s what my grandma tells me!',
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
      lat: 51.545792,
      lng: -0.055420
    },
    bio: 'A wizard in the kitchen. Gordon Ramsey once told me that I was his idol... Ok, maybe not, but I\'m sure he\'d love the flavor of my home-made gnocci.',
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
      lat: 51.527729,
      lng: -0.080880
    },
    bio: 'Nomadic Adventurer. I\'ve set foot on 5 continents and have a thirst for exploring more. I hope to one day go vacationing on Mars as I\'ve heard the mountains are glorious. ',
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
      lat: 51.479270,
      lng: -0.119800
    },
    bio: 'Full of random (and oftentimes useless) information. I will kick your butt at Trivial Pursuit.',
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
      lat: 51.587971,
      lng: -0.228940
    },
    bio: 'I\'m attracted to people who set big goals and put all their effort into pursuing them. Even if your life\'s dream is to become the world\'s greatest thumb-wrestler, I totally dig it.',
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
      lat: 51.607160,
      lng: -0.167790
    },
    bio: 'During the day, I can be found sitting in an office cubicle, feverishing tapping my phone with hopes of getting a new high score on Candy Crush.',
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
      lat: 51.447948,
      lng: -0.138180
    },
    bio: 'You should message me if you are Smart, Sexy, Sophisticated, Sassy and Spontaneous. (Bonus points if you have over eight years of experience as a forklift operator.)',
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
      lat: 51.419850,
      lng: -0.078530
    },
    bio: 'Travelling is also a major passion of mine, and I spend a lot of my free-time planning out future adventures.',
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
      lat: 51.460930,
      lng: -0.116020
    },
    bio: 'I have an 18 month old german shepherd named Ringo - he unfortunately lost one of his legs in a car accident, but he\'s still the cutest thing on the planet! I love animals and hope to meet someone who shares this passion.',
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
      lat: 51.571790,
      lng: -0.195480
    },
    bio: 'I thought it would be fun to try out this online dating thing, as many of my friends have recommended it.',
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
      lat: 51.568050,
      lng: -0.135990
    },
    bio: 'My biggest passion in life is music. I LOVE Bon Jovi, Journey and Van Halen (and pretty much every other hair band from the 80\'s!).',
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
      lat: 51.591210,
      lng: -0.228310
    },
    bio: 'Family is very important to me, and I make it a point to have dinner with my folks at least twice a week. It has always been a dream of mine to have a large family of my own one day - the more kids the merrier.',
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
      lat: 51.629230,
      lng: -0.168430
    },
    bio: 'Halloween is my favorite holiday. Each year I make my outfit from scratch, and I usually do really well in costume competitions.',
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
      lat: 51.587250,
      lng: -0.076710
    },
    bio: 'It has always been a dream of mine to do a road trip across the United States in an old Volkswagon.',
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
      lat: 51.583431,
      lng: 0.010060
    },
    bio: 'I taught myself how to balance a bottle on my nose while standing on one foot. It\'s a completely useless skill, but occasionally wins me free drinks at the pub!',
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
      lat: 51.546711,
      lng: 0.028350
    },
    bio: 'On a typical Friday night I am probably attending yoga class, or biking down one of the many gorgeous trails in our city. I\'m the type of person who will do things on a whim, and I\'m looking for a partner with the same mentality.',
    interests: { animals: 'cats', evening: 'out', holiday: 'city', food: 'takeaway', film: 'romantic'},
    image: 'https://www.picmonkey.com/blog/wp-content/uploads/2016/11/1-intro-photo-final.jpg'
  }])
    .then(users => console.log(`${users.length} created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
