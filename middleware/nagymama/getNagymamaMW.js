/**
 * Load a nagymama from the database using the :nagymamaid param
 * The result is saved to res.locals.nagymama
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const NagymamaModel = requireOption(objectrepository, 'NagymamaModel');

    return function (req, res, next) {
        NagymamaModel.findOne({_id: req.params.nagymamaid},
            (err, nagymama) => {
                if (err || !nagymama) {
                    return next(err);
                }

                res.locals.nagymama = nagymama;
                return next();
            });
    };
};
