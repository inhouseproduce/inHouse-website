const actions = require('./actions');
const headerAuth = require('../utility/auth');

module.exports.initializeRoutes = app => {
    // Open routes
    app.get('/client/identify/', (req, res) => {
        actions.api.register(req, res);
    });

    app.get('/login/', async (req, res) => {
        actions.auth.login(req, res);
    });

    // Protected
    app.post('/create/client/', headerAuth, (req, res) => {
        actions.create.client(req, res);
    });

    app.post('/control/pi/', headerAuth, (req, res) => {
        actions.control.controlPi(req, res);
    });

    app.get('/engine/state/:id', headerAuth, (req, res) => {
        actions.control.engineState(req, res);
    });

    app.get('/get/clientlist/', headerAuth, (req, res) => {
        actions.get.clientList(req, res);
    });

    app.get('/client/profile/:id/', headerAuth, (req, res) => {
        actions.get.clientProfile(req, res);
    });

    app.get('/update/images/:id/', headerAuth, (req, res) => {
        actions.update.clientImages(req, res);
    });

    app.post('/update/config/:id/', headerAuth, (req, res) => {
        actions.update.clientConfig(req, res);
    });
};