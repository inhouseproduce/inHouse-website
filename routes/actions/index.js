const register = require('./api/register');
const newClient = require('./create/newClient');
const login = require('./auth/login');
const controlPi = require('./control/controlPi');
const clientList = require('./get/clientlist');
const clientProfile = require('./get/clientProfile');
const engineState = require('./control/getEngineState');
const updateImages = require('./update/updateImages');
const updateConfig = require('./update/updateConfig');

module.exports = {
    api: {
        register: (req, res) => register(req, res),
    },

    auth: {
        login: (req, res) => login(req, res),
    },

    control: {
        controlPi: (req, res) => controlPi(req, res),
        engineState: (req, res) => engineState(req, res)
    },

    create: {
        client: (req, res) => newClient(req, res),
    },

    get: {
        clientList: (req, res) => clientList(req, res),
        clientProfile: (req, res) => clientProfile(req, res)
    },

    update: {
        clientImages: (req, res) => { updateImages(req, res) },
        clientConfig: (req, res) => { updateConfig(req, res) }
    }
};