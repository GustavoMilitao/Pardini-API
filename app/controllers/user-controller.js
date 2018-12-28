'use strict';


var userBusiness = require('../business/user-business');


exports.get_users = function(req, res) {
  return userBusiness.get_users(req, res);
};

exports.create_a_user = function(req, res) {
  return userBusiness.create_a_user(req, res);
}

exports.update_a_user = function(req, res) {
  return userBusiness.update_a_user(req, res);
}

exports.delete_a_user = function(req, res) {
  return userBusiness.delete_a_user(req, res);
}