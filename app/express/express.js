var jsonServer = require('json-server');
var jsonServerConfig = require('../../config/json-server/json-server.json');
var routes = require('../routes');
var bodyParser = require('body-parser');

module.exports = function(app) {
    if(jsonServerConfig.active) {
        app.use(jsonServer.router('./config/json-server/db.json'));
    } else {
        exports.user = require('../entities/user');
        routes(app);
    }
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    module.exports = app;
}