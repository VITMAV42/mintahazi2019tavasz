const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nagymamak', { useNewUrlParser: true });

module.exports = mongoose;
