'use strict';
module.exports = function(app) {
  var controller = require('../../controllers/user-controller');

app.route('/users')
  .get(controller.get_users)
  .post(controller.create_a_user);

app.route('/users/:userId')
  .get(controller.get_users)
  .put(controller.update_a_user)
  .patch(controller.update_a_user)
  .delete(controller.delete_a_user);
};