'use strict';
module.exports = function() {
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://eckounltd:cefet123@custerpokemon-zznsg.mongodb.net/test?retryWrites=true";
  return new MongoClient(uri, { useNewUrlParser: true });
}