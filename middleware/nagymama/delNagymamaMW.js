/**
 * Removes a nagymama from the database, the entity used here is: res.locals.nagymama
 * Redirects to /nagymama after delete
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.nagymama === 'undefined') {
            return next();
        }

        res.locals.nagymama.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/nagymama');
        });
    };
};
