/* global api, describe, it, expect beforeEach */

const User = require('../../../models/user');


const userData = {
  name: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

let userId;

describe('GET /user/:id', () => {
  beforeEach(done => {
    User
      .remove({})
      .then(() => User.create(userData))
      .then(user => {
        userId = user._id;
      })
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api
      .get(`/api/users/${userId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return a valid user object', done => {
    api
      .get(`/api/users/${userId}`)
      .end((err, res) => {
        expect(res.body._id).to.be.a('string');
        done();
      });
  });

});
