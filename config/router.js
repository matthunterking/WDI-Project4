const router = require('express').Router();
// const users = require('../controllers/users');
const auth = require('../controllers/auth');

router.route('/users')
  // .get(users.index);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
