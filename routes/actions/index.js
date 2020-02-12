const register = require('./api/register');
const newClient = require('./create/newClient');
const signin = require('./auth/signin');
const controlPi = require('./control/controlPi');
const clientList = require('./get/clientlist');

module.exports = {
    api: {
        register: (req, res) => register(req, res),
    },

    auth: {
        signin: (req, res) => signin(req, res),
    },

    control: {
        controlPi: (req, res) => controlPi(req, res),
    },
    
    create: {
        client: (req, res) => newClient(req, res),
    },
    
    get: {
        clientList: (req, res) => clientList(req, res)
    },
};