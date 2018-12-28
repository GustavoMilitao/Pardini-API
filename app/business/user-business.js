'use strict';
var userDataAccess = require('../data-access/user-data-access');

exports.get_users = function(req, res) {
    return userDataAccess.get_users(req, res);
};

exports.create_a_user = function(req, res) {
    return userDataAccess.create_a_user(req, res);
}

exports.update_a_user = function(req, res) {
    return userDataAccess.update_a_user(req, res);
}

exports.delete_a_user = function(req, res) {
    return userDataAccess.delete_a_user(req, res);
}