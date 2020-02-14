const actions = require('./actions');

module.exports = app => {
    app.get('/client/identify/', (req, res) => {
        actions.api.register(req, res);
    });

    app.post('/create/client/', async (req, res) => {
        actions.create.client(req, res);
    });

    app.post('/auth/', async (req, res) => {
        actions.auth.signin(req, res);
    });

    app.post('/control/pi/', async (req, res) => {
        actions.control.controlPi(req, res);
    });

    app.get('/get/clientlist/', async (req, res) => {
        actions.get.clientList(req, res);
    });

    app.get('/test/', (req, res) => {
        res.json('successss')
    });
};