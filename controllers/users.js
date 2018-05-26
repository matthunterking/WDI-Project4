const User = require('../models/user');

function indexRoute(req, res, next){
  User
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

function showRoute(req, res, next){
  User
    .findById(req.params.id)
    .populate('messages.from')
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
  req.body.from = req.currentUser;
  User
    .findById(req.body.to)
    .exec()
    .then(user => {
      user.messages.push(req.body);
      return user.save();
    })
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
    .findById(req.currentUser._id)
    .exec()
    .then(user => {
      user.sentMatchRequests.push(req.params.id);
      user.save();
    })
    .catch(next);
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      user.pendingMatchRequests.push(req.currentUser._id);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

function acceptMatchRequest(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      user.pendingMatchRequests.splice(user.pendingMatchRequests.indexOf(req.currentUser._id), 1 );
      user.sentMatchRequests.splice(user.sentMatchRequests.indexOf(req.currentUser._id), 1 );
      user.acceptedMatchRequests.push(req.currentUser._id);
      user.save();
    });
  User
    .findById(req.currentUser._id)
    .exec()
    .then(user => {
      user.pendingMatchRequests.splice(user.pendingMatchRequests.indexOf(req.params.id), 1 );
      user.acceptedMatchRequests.push(req.params.id);
      user.save();
    })
    .then(user => res.json(user))
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
  acceptMatchRequest: acceptMatchRequest
};
