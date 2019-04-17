/**
 * Load all befott from the database
 * The result is saved to res.locals.befottek
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        // TODO: get data from DB
        res.locals.befottek = [
            {
                _id: 'befott1',
                iz: 'Barack',
                ev: '2018',
                rating: 'zseniális'
            },
            {
                _id: 'befott2',
                iz: 'Körte',
                ev: '2017',
                rating: 'inkább lett volna pálinka'
            }
        ];

        return next();
    };
};
