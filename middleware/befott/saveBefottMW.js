/**
 * Using POST params update or save a befott to the database
 * If res.locals.befott is there, it's an update otherwise this middleware creates an entity
 * Redirects to /befott/:nagymamaid after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if ((typeof req.body.iz === 'undefined') ||
            (typeof req.body.ev === 'undefined') ||
            (typeof req.body.rating === 'undefined') ||
            (typeof res.locals.nagymama === 'undefined')) {
            return next();
        }

        // TODO: update item, save to db, or create new item
        return res.redirect('/befott/' + res.locals.nagymama._id);
    };
};
