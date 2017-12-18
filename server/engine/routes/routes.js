var machine = require('../models/machine');
var configs = require('../../config/config');

module.exports = {
    configure: function (app) {
        app.get('/machine/', function (req, res) {
            machine.getAllParams(res);
        });
        app.get('/machine/:code', function (req, res) {
            machine.getParam(req.params.code, res);
        })
        app.post('/machine/', function (req, res) {
            machine.setParam(req.body, res);
        });

        app.get('/models/', function (req, res) {
            machine.getAllModels(res);
        });
        app.get('/articles/', function (req, res) {
            machine.getAllArticles(res);
        });
    }
};