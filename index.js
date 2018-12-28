var express = require('express')();
var pardiniExpress = require('./app/express/express');
var expressConfig = require('./config/express/express-config.json');
pardiniExpress(express);
express.listen(expressConfig.port, function() {
    console.log(`Servidor escutando na porta: ${this.address().port}`);
});