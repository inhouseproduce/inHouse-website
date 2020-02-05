module.exports = app => {
    require('./identify')(app)
    require('./config')(app)
};