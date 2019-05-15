/**
 * Load a nagymama list and befott count from database
 * The result is saved to res.locals.topnagymamak
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const BefottModel = requireOption(objectrepository, 'BefottModel');
    return function(req, res, next) {
        // maaaagic....
        BefottModel.aggregate(
            [
                {
                    $group: {
                        _id: '$_befozo',
                        count: {
                            $sum: 1
                        }
                    }
                },
                {
                    $lookup: {
                        from: 'nagymamas',
                        localField: '_id',
                        foreignField: '_id',
                        as: 'befozo'
                    }
                },
                {
                    $sort: {
                        count: -1
                    }
                },
                {
                    $limit: 10
                },
                { $unwind: { path: '$befozo' } }
            ],
            function(err, result) {
                if (err) {
                    return next(err);
                }
                res.locals.toplista = result.map(e => {
                    return { nev: e.befozo.nev, befottszam: e.count };
                });
                return next();
            }
        );
    };
};
