/**
 * Using the template engine render the values into the template
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        //res.render(viewName, res.tpl);
        console.log('render: ' + viewName);
        res.end('Template: ' + viewName);
    };

};
