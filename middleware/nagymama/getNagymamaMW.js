/**
 * Load a nagymama from the database using the :nagymamaid param
 * The result is saved to res.locals.nagymama
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        // TODO: get data from DB
        res.locals.nagymama = {
            _id: 'id1',
            nev: 'Terike',
            cim: 'Utca 12.',
            tel: '111-222'
        };
        return next();
    };
};
