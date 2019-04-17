/**
 * Load all nagymama from the database
 * The result is saved to res.locals.nagymamak
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        // TODO: get data from DB
        res.locals.nagymamak = [
            {
                _id: 'id1',
                nev: 'Terike',
                cim: 'Utca 12.',
                tel: '111-222'
            },
            {
                _id: 'id2',
                nev: 'Marika',
                cim: 'Utca 13.',
                tel: '222-333'
            }
        ];

        return next();
    };
};
