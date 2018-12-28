var userRoutes = require('./user/user-routes')

module.exports  = function(app) {
    userRoutes(app);
};