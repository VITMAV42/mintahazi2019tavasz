const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Nagymama = db.model('Nagymama', {
    nev: String,
    cim: String,
    tel: String
});

module.exports = Nagymama;
