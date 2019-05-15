/**
 * Check the password (from POST), if it's the right one, create a session for the user and redirect to /nagymama
 * if the password is wrong, pass down a 'error' key on res.locals to indicate error
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }

        if (req.body.password === 'takibacsi') {
            req.session.belepve = true;
            return req.session.save((err) => {

                return res.redirect('/nagymama');
            })
        }

        res.locals.error = 'Hibás jelszó!';
        return next();
    };
};
