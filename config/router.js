const router = require('express').Router();
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .delete(users.delete)
  .put(users.update);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/message').post(secureRoute, users.sendMessage);
router.route('/users/:id/message/:messageId').delete(secureRoute, users.deleteMessage);

router.route('/match').post(secureRoute, users.sendMatchRequest);

module.exports = router;
