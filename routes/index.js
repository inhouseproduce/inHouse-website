const actions = require('./actions');
const headerAuth = require('../utility/auth');

module.exports.initializeRoutes = app => {
    // Open routes
    app.get('/client/identify/', (req, res) => {
        actions.api.register(req, res);
    });

    app.post('/auth/', async (req, res) => {
        actions.auth.signin(req, res);
    });

    // Protected
    app.post('/create/client/', headerAuth, (req, res) => {
        actions.create.client(req, res);
    });

    app.post('/control/pi/', headerAuth, (req, res) => {
        actions.control.controlPi(req, res);
    });

    app.get('/get/clientlist/', headerAuth, (req, res) => {
        actions.get.clientList(req, res);
    });

    app.get('/client/profile/:id/', headerAuth, (req, res) => {
        actions.get.clientProfile(req, res);
    });
};