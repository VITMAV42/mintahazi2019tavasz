/**
 * Load a befott from the database using the :befottid param
 * The result is saved to res.locals.nagymbefottama
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        // TODO: get data from DB
        res.locals.befott = {
            _id: 'befott1',
            iz: 'Barack',
            ev: '2018',
            rating: 'zseniális'
        };
        return next();
    };
};
