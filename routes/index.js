const actions = require('./actions');
const routes = require('./routes.json');

module.exports = app => {
    routes.routes.map(route => {
        let { method, url, action, to } = route;

        let request = app[method];
        let reqAction = actions[to][action];

        request(url, (req, res) => {
            reqAction(req, res);
        });
    });
};