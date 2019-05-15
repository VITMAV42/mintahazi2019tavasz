const authMW = require('../middleware/auth/authMW');
const checkPassMW = require('../middleware/auth/checkPassMW');
const logoutMW = require('../middleware/auth/logoutMW');
const renderMW = require('../middleware/renderMW');
const delBefottMW = require('../middleware/befott/delBefottMW');
const getBefottekMW = require('../middleware/befott/getBefottekMW');
const getBefottMW = require('../middleware/befott/getBefottMW');
const saveBefottMW = require('../middleware/befott/saveBefottMW');
const delNagymamaMW = require('../middleware/nagymama/delNagymamaMW');
const getNagymamakMW = require('../middleware/nagymama/getNagymamakMW');
const getNagymamaMW = require('../middleware/nagymama/getNagymamaMW');
const getTopNagymamakMW = require('../middleware/nagymama/getTopNagymamakMW');
const saveNagymamaMW = require('../middleware/nagymama/saveNagymamaMW');

const NagymamaModel = require('../models/nagymama');
const BefottModel = require('../models/befott');

module.exports = function(app) {
    const objRepo = {
        NagymamaModel: NagymamaModel,
        BefottModel: BefottModel
    };

    app.use(
        '/nagymama/new',
        authMW(objRepo),
        saveNagymamaMW(objRepo),
        renderMW(objRepo, 'nagymamaeditnew')
    );
    app.use(
        '/nagymama/edit/:nagymamaid',
        authMW(objRepo),
        getNagymamaMW(objRepo),
        saveNagymamaMW(objRepo),
        renderMW(objRepo, 'nagymamaeditnew')
    );
    app.get(
        '/nagymama/del/:nagymamaid',
        authMW(objRepo),
        getNagymamaMW(objRepo),
        delNagymamaMW(objRepo)
    );
    app.get(
        '/nagymama',
        authMW(objRepo),
        getNagymamakMW(objRepo),
        renderMW(objRepo, 'nagymamalista')
    );

    app.use(
        '/befott/:nagymamaid/new',
        authMW(objRepo),
        getNagymamaMW(objRepo),
        saveBefottMW(objRepo),
        renderMW(objRepo, 'befotteditnew')
    );
    app.use(
        '/befott/:nagymamaid/edit/:befottid',
        authMW(objRepo),
        getNagymamaMW(objRepo),
        getBefottMW(objRepo),
        saveBefottMW(objRepo),
        renderMW(objRepo, 'befotteditnew')
    );
    app.get(
        '/befott/:nagymamaid/del/:befottid',
        authMW(objRepo),
        getNagymamaMW(objRepo),
        getBefottMW(objRepo),
        delBefottMW(objRepo),
        renderMW(objRepo, 'befotteditnew')
    );
    app.get(
        '/befott/:nagymamaid',
        authMW(objRepo),
        getNagymamaMW(objRepo),
        getBefottekMW(objRepo),
        renderMW(objRepo, 'egynagymamabefottjei')
    );

    app.use('/logout', logoutMW(objRepo));

    app.use('/', getTopNagymamakMW(objRepo), checkPassMW(objRepo), renderMW(objRepo, 'index'));
};
