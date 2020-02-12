const actions = require('./actions');

module.exports = app => {
    app.get('/client/identify/', (req, res) => {
        actions.register(req, res);
    });
};