/**
 * Removes a befott from the database, the entity used here is: res.locals.befott
 * Redirects to /befott/:nagymamaid after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
