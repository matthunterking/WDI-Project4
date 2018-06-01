const User = require('../models/user');
const Promise = require('bluebird');

function indexRoute(req, res, next){
  User
    .find()
    .populate('messages.from messages.to pendingMatchRequests acceptedMatchRequests sentMatchRequests')
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

function showRoute(req, res, next){
  User
    .findById(req.params.id)
    .populate('messages.from messages.to pendingMatchRequests pendingMatchRequests acceptedMatchRequests sentMatchRequests')
    .exec()
    .then(user => res.json(user))
    .catch(next);
}

function deleteRoute(req, res, next){
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      if(!user) return res.sendStatus(404);
      return user.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

function updateRoute(req, res, next){
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      if(!user) return res.sendStatus(404);
      return Object.assign(user, req.body);
    })
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

//add the loged in user's id to the request body under from
//then push the body of the request into the other users message array
//returns the whole of the to users record
function sendMessage(req, res, next) {
  User
    .findById(req.body.from)
    .exec()
    .then(user => {
      user.messages.push(req.body);
      return user.save();
    })
    .then(user => User.populate(user, { path: 'messages.from messages.to' }))
    .then(user => res.json(user))
    .catch(next);
}

//Find the record of the user and populate the from field
//Then find the message id of the selected message
//If the person the message was sent to does not equal the current logged in user then throw error
//If passed delete the message and save the record
function deleteMessage(req, res, next) {
  User
    .findById(req.params.id)
    .populate('messages.from')
    .exec()
    .then(user => {
      const message = user.messages.id(req.params.messageId);
      if(!message.to.equals(req.currentUser._id)) {
        throw new Error('Unauthorized');
      }
      message.remove();
      return user.save;
    })
    .then(user => res.json(user))
    .catch(next);
}

function sendMatchRequest(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      user.pendingMatchRequests.push(req.currentUser._id);
      req.currentUser.sentMatchRequests.push(req.params.id);

      return Promise.props({
        sender: req.currentUser.save(),
        receiver: user.save()
      });
    })
    .then(users => res.json(users.sender))
    .catch(next);
}

function acceptMatchRequest(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      user.sentMatchRequests = user.sentMatchRequests.filter(item => !item.equals(req.currentUser._id));
      user.acceptedMatchRequests.push(req.currentUser);

      req.currentUser.pendingMatchRequests = req.currentUser.pendingMatchRequests.filter(item => !item.equals(req.params.id));
      req.currentUser.acceptedMatchRequests.push(req.params.id);

      return Promise.props({
        accepter: req.currentUser.save(),
        acceptee: user.save()
      });
    })
    .then(users => User.populate(users.accepter, { path: 'pendingMatchRequests acceptedMatchRequests sentMatchRequests' }))
    .then(user => res.json(user))
    .catch(next);
}

function rejectMatchRequest(req, res, next) {

  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      user.sentMatchRequests = user.sentMatchRequests.filter(item => !item.equals(req.currentUser._id));

      req.currentUser.pendingMatchRequests = user.pendingMatchRequests.filter(item => !item.equals(req.params.id));

      return Promise.props({
        rejector: req.currentUser.save(),
        rejectee: user.save()
      });
    })
    .then(users => res.json(users.rejector))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  delete: deleteRoute,
  update: updateRoute,
  sendMessage: sendMessage,
  deleteMessage: deleteMessage,
  sendMatchRequest: sendMatchRequest,
  acceptMatchRequest: acceptMatchRequest,
  rejectMatchRequest: rejectMatchRequest
};
