module.exports = (app, db) => {
    require('./pi')(app)
    require('./api')(app)
    require('./read')(app)
    require('./auth')(app)
    require('./create')(app)
};