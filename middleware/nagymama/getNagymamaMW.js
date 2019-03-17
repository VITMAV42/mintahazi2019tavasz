/**
 * Load a nagymama from the database using the :nagymamaid param
 * The result is saved to res.locals.nagymama
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
