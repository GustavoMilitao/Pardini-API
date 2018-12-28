'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var user = new Schema({
  name: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  birthdate: {
    type: String,
    default: ""
  },
});

module.exports = mongoose.model('user', user);