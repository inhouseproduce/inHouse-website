module.exports = (app, db) => {
    require('./pi')(app)
    require('./read')(app)
    require('./auth')(app)
    require('./crate')(app)
};