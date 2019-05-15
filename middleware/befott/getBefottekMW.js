/**
 * Load all befott from the database
 * The result is saved to res.locals.befottek
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const BefottModel = requireOption(objectrepository, 'BefottModel');

    return function (req, res, next) {
        if (typeof res.locals.nagymama === 'undefined') {
            return next();
        }

        BefottModel.find({_befozo: res.locals.nagymama._id}, (err, befottek) => {
            if (err) {
                return next(err);
            }

            res.locals.befottek = befottek;
            return next();
        });
    };
};
