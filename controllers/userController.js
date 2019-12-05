const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function(req, res) {
    console.log(req.body)
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
  loginUser: function(req, res) {
    console.log("Hello " + req.params.pass);
    db.User.find({username: req.params.user})
    .then(results => {
      console.log(results)
      if(results.length === 0){
        res.send("failure")
      }else{
      // console.log(results[0].password)
      // console.log(db.User.checkPassword(req.params.pass, results[0].password))
      if(db.User.checkPassword(req.params.pass, results[0].password)){
        res.send("success")
      }else{
        res.send("failure")
      }
    }
    }).catch(err => res.status(422).json(err));
  }
};
