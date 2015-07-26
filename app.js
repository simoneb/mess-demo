var mongoose = require('mongoose');
var messa = require('messa');

require('./models');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/messa-demo');

messa(mongoose, {
  title: 'demo app for messa ' +
  '<a target="_blank" href="https://github.com/simoneb/messa">' +
  '(https://github.com/simoneb/messa)' +
  '</a>',
}).listen(process.env.PORT || 3000);