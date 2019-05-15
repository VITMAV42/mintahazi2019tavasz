/**
 * If the user is authenticated, call next, otherwise redirect to /
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof req.session.belepve === 'undefined' || req.session.belepve !== true) {
            return res.redirect('/');
        }

        next();
    };
};
