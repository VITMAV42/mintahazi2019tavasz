/**
 * Using POST params update or save a befott to the database
 * If res.locals.befott is there, it's an update otherwise this middleware creates an entity
 * Redirects to /befott/:nagymamaid after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
