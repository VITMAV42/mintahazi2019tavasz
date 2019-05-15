/**
 * Load a befott from the database using the :befottid param
 * The result is saved to res.locals.nagymbefottama
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const BefottModel = requireOption(objectrepository, 'BefottModel');

    return function(req, res, next) {
        BefottModel.findOne(
            {
                _id: req.params.befottid
            },
            (err, befott) => {
                if (err || !befott) {
                    return next(err);
                }

                res.locals.befott = befott;
                return next();
            }
        );
    };
};
