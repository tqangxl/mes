var request = require('request');

var connection = require('../db/connection');
var configs = require('../../config/config');

function Machine() {
    this.payloadHeader = [
        '<?xml version="1.0" encoding="utf-8"?>',
        '<soap:Envelope targetNamespace="http://tempuri.org/wsdl/" xmlns:wsdlns="http://tempuri.org/wsdl/" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://schemas.xmlsoap.org/wsdl/">',
        '<soap:Body>'
    ].join('');
    this.payloadFooter = [
        '</soap:Body>',
        '</soap:Envelope>'
    ].join();

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

    this.getAllArticles = function (res) {
        connection.acquire(function (err, con) {
            con.query('SELECT * FROM articles', function (err, result) {
                con.release();
                if (err) {
                    res.status(500).json({
                        message: 'Get all articles failed: ' + err
                    });
                } else {
                    res.status(200).json(result);
                }
            });
        });
    };

    this.getAllParams = function (res) {
        connection.acquire(function (err, con) {
            con.query('SELECT * FROM params', function (err, result) {
                con.release();
                if (err) {
                    res.status(500).json({
                        message: 'Get all params failed: ' + err
                    });
                } else {
                    res.status(200).json(result);
                }
            });
        });
    };

    this.getParam = function (code, res) {
        this.payloadContent = [
            '<GetValue xmlns="http://tempuri.org/wsdl/">',
            '<A type="xsd:string">"' + code + '"</A>',
            '</GetValue>'
        ].join('');
        request.get({
            url: configs.SOAP_URL,
            body: this.payloadHeader + this.payloadContent + this.payloadFooter,
            headers: {
                'Content-Type': 'text/xml;charset=UTF-8',
                'Host': 'HMI_Panel',
                'SoapAction': configs.SOAP_ACTION,
            }
        }, function (err, response, body) {
            if (err) {
                res.status(500).json({
                    message: 'Get param ' + code + ' failed: ' + err
                });
            } else {
                res.status(200).json(body);
            }
        });
    };

    this.setParam = function (param, res) {
        this.payloadContent = [
            '<SetValue xmlns="http://tempuri.org/wsdl/">',
            '<A type="xsd:string">"' + param.code + '"</A>',
            '<B type="xsd:string">"' + param.value + '"</B>',
            '</SetValue>'
        ].join('');
        request.get({
            url: configs.SOAP_URL,
            body: this.payloadHeader + this.payloadContent + this.payloadFooter,
            headers: {
                'Content-Type': 'text/xml;charset=UTF-8',
                'Host': 'HMI_Panel',
                'SoapAction': configs.SOAP_ACTION,
            }
        }, function (err, response, body) {
            if (err) {
                res.status(500).json({
                    message: 'Get param ' + code + ' failed: ' + err
                });
            } else {
                res.status(200).json(body);
            }
        });
    };
}

module.exports = new Machine();