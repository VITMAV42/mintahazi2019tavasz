/**
 * Removes a befott from the database, the entity used here is: res.locals.befott
 * Redirects to /befott/:nagymamaid after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.befott === 'undefined') {
            return next();
        }
        // TODO: do the delete from DB
        return res.redirect('/befott/' + res.locals.nagymama._id);
    };
};
