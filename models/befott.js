const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Befott = db.model('Befott', {
    iz: String,
    ev: Number,
    rating: String,
    _befozo: {
        type: Schema.Types.ObjectId,
        ref: 'Nagymama'
    }
});

module.exports = Befott;
