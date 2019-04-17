/**
 * Using POST params update or save a nagymama to the database
 * If res.locals.nagymama is there, it's an update otherwise this middleware creates an entity
 * Redirects to /nagymama after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if ((typeof req.body.nev === 'undefined') ||
            (typeof req.body.cim === 'undefined') ||
            (typeof req.body.tel === 'undefined')) {
            return next();
        }

        // TODO: update item, save to db, or create new item
        return res.redirect('/nagymama');
    };
};
