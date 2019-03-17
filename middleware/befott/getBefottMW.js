/**
 * Load a befott from the database using the :befottid param
 * The result is saved to res.locals.nagymbefottama
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
