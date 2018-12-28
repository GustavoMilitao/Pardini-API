'use strict';

var connection = require('./connection/connection');

exports.get_users = function (req, res) {
  connection.connect(err => {
    const collection = client.db("pardini").collection("users");
    var query = req.params.userId ? { _id: req.params.userId } : {};
    collection.find(query, function (err, response) {
      if (err)
        res.send(err);
      res.status(200).send(response);
    });
    client.close();
  });
};

exports.create_a_user = function (req, res) {
  connection.connect(err => {
    const collection = client.db("pardini").collection("users");
    collection.create(req.body, function (err, response) {
      if (err)
        res.send(err);
      res.status(200).send(response);
    });
  });
}

exports.update_a_user = function (req, res) {
  connection.connect(err => {
    const collection = connection.db("pardini").collection("users");
    collection.findByIdAndUpdate(req.params.userId, req.body, function (err, response) {
      if (err)
        res.send(err);
      res.status(200).send(response);
    });
  });
}

exports.delete_a_user = function (req, res) {
  User.deleteOne({ _id: req.params.userId }, function (err) {
    if (err)
      res.send(err);
    res.status(200).send();
  })
}