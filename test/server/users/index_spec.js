/* global api, describe, it, expect beforeEach */

const User = require('../../../models/user');

const userData = {
  name: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

describe('GET /users', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api
      .get('/api/users')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array as response body', done => {
    api
      .get('/api/users')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
