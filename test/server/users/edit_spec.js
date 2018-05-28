/* global api, describe, it, expect beforeEach */

const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../../config/environment');

const userData = {
  name: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

let token;
let userId;

describe('edit /users/:id', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id}, secret, { expiresIn: '6h'});
      })
      .then(() => done());
  });

  it('should return a 201 response with a token', done => {
    api
      .put(`/api/users/${userId}`)
      .set({
        'Authorization': `Bearer ${token}`
      })
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });
});
