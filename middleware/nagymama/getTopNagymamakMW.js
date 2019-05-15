/**
 * Load a nagymama list and befott count from database
 * The result is saved to res.locals.topnagymamak
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: get data from DB
        res.locals.toplista = [
            {
                nev: 'Marika',
                befottszam: 15
            },
            {
                nev: 'Terike',
                befottszam: 11
            }
        ];
        return next();
    };
};
