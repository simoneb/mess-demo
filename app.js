var mongoose = require('mongoose');
var messa = require('messa');

require('./models');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/messa-demo');

messa(mongoose, {
  title: 'demo app for messa (github.com/simoneb/messa)'
}).listen(process.env.PORT || 3000);