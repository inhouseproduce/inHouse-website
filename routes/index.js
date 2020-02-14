const actions = require('./actions');
const routes = require('./routes.json');

module.exports = app => {
    routes.routes.map(route => {
        let { method, url, action, to } = route;
        app[method](url, (req, res) => {
            actions[to][action](req, res);
        });
    });
};