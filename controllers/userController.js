const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUser: function(req, res) {
    db.User
      .find({ username: req.params.id})
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findEmail: function(req, res) {
    db.User
      .find({ email: req.params.id})
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findPassword: function(req, res) {
    db.User
      .find({ password: req.params.id})
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  }
};
