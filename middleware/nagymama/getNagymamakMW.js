/**
 * Load all nagymama from the database
 * The result is saved to res.locals.nagymamak
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const NagymamaModel = requireOption(objectrepository, 'NagymamaModel');

    return function (req, res, next) {
        NagymamaModel.find({}, (err, nagymamak) => {
            if (err) {
                return next(err);
            }

            res.locals.nagymamak = nagymamak;
            return next();
        });
    };
};
