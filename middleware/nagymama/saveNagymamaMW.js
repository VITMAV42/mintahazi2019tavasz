/**
 * Using POST params update or save a nagymama to the database
 * If res.locals.nagymama is there, it's an update otherwise
 * this middleware creates an entity
 * Redirects to /nagymama after success
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const NagymamaModel = requireOption(objectrepository, 'NagymamaModel');

    return function(req, res, next) {
        if (
            typeof req.body.nev === 'undefined' ||
            typeof req.body.cim === 'undefined' ||
            typeof req.body.tel === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.nagymama === 'undefined') {
            res.locals.nagymama = new NagymamaModel();
        }

        res.locals.nagymama.nev = req.body.nev;
        res.locals.nagymama.cim = req.body.cim;
        res.locals.nagymama.tel = req.body.tel;

        res.locals.nagymama.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/nagymama');
        });
    };
};
