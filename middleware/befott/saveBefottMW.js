/**
 * Using POST params update or save a befott to the database
 * If res.locals.befott is there, it's an update otherwise this middleware creates an entity
 * Redirects to /befott/:nagymamaid after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const BefottModel = requireOption(objectrepository, 'BefottModel');

    return function (req, res, next) {
        if ((typeof req.body.iz === 'undefined') ||
            (typeof req.body.ev === 'undefined') ||
            (typeof req.body.rating === 'undefined') ||
            (typeof res.locals.nagymama === 'undefined')) {
            return next();
        }

        if (typeof res.locals.befott === 'undefined') {
            res.locals.befott = new BefottModel();
        }

        if (Number.isNaN(parseInt(req.body.ev, 10))) {
            return next(new Error('Év számmal kell hogy megadva legyen!'));
        }

        res.locals.befott.iz = req.body.iz;
        res.locals.befott.ev = parseInt(req.body.ev, 10);
        res.locals.befott.rating = req.body.rating;
        res.locals.befott._befozo = res.locals.nagymama._id;

        res.locals.befott.save((err) => {
            if (err) {
                return next(err);
            }

            return res.redirect('/befott/' + res.locals.nagymama._id);
        });
    };
};
