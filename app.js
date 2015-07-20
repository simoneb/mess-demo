var express = require('express');
var mongoose = require('mongoose');
var mess = require('mess');

require('./models');

var app = express();
app.use('/', mess(mongoose));

module.exports = app;