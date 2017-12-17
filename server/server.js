var express = require('express');
var bodyparser = require('body-parser');

var configs = require('./config/config');
var connection = require('./engine/db/connection');
var routes = require('./engine/routes/routes');

var machine = require('./engine/models/machine');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());


var server = app.listen(configs.NODEJS_PORT, configs.NODEJS_IP, function () {
    console.log('%s: Engine started on %s:%d ...', Date(Date.now()), configs.NODEJS_IP, configs.NODEJS_PORT);

    connection.init();
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", configs.ALLOWED_ORIGIN);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', configs.ALLOWED_VERBS.join(','))
        next();
    });
    routes.configure(app);

    // set default route
    app.get('/', function (req, res) {
        res.status(200).json({
            message: 'Engine started on: ' + Date(Date.now())
        });
    });

});