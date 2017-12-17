var soap = require('soap');

var connection = require('../db/connection');
var configs = require('../../config/config');

function Machine() {
    this.getAllModels = function (res) {
        connection.acquire(function (err, con) {
            con.query('SELECT * FROM models', function (err, result) {
                con.release();
                if (err) {
                    res.status(500).json({
                        message: 'Get all models failed: ' + err
                    });
                } else {
                    res.status(200).json(result);
                }
            });
        });
    };

    this.getModel = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('SELECT * FROM models where id = ?', [id], function (err, result) {
                con.release();
                if (err) {
                    res.status(500).json({
                        message: 'Get model ' + id + ' failed: ' + err
                    });
                } else {
                    res.status(200).json(result);
                }
            });
        });
    };

    this.getAllParams = function (res) {
        // soap req
    };

    this.getParam = function (code, res) {
        var args = {
            name: 'value'
        };
        var args = {
            _xml: '<ns1:MyRootElement xmlns:ns1="http://www.example.com/v1/ns1"><ChildElement>elementvalue</ChildElement></ns1:MyRootElement>'
        };
        soap.createClient(configs.SOAP_URL, function (err, client) {
            client.MyFunction(args, function (err, result) {
                console.log(result);
            });
        });

    };

    this.setParam = function (param, res) {
        // soap req
    };
}

module.exports = new Machine();