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
      .find({$or:[{ username: req.body.username}, {email: req.body.email}]})
      .then(results => res.send("user exist"))
      .catch(err => res.status(422).json(err));
  }
};
