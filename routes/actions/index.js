const register = require('./api/register');
const newClient = require('./create/newClient');
const login = require('./auth/login');
const controlPi = require('./control/controlPi');
const clientList = require('./get/clientlist');
const clientProfile = require('./get/clientProfile');

module.exports = {
    api: {
        register: (req, res) => register(req, res),
    },

    auth: {
        login: (req, res) => login(req, res),
    },

    control: {
        controlPi: (req, res) => controlPi(req, res),
    },

    create: {
        client: (req, res) => newClient(req, res),
    },

    get: {
        clientList: (req, res) => clientList(req, res),
        clientProfile: (req, res) => clientProfile(req, res)
    },
};