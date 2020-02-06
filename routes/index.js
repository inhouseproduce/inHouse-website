module.exports = (app, db) => {
    require('./pi')(app, db)
    require('./api')(app, db)
    require('./read')(app, db)
    require('./auth')(app, db)
    require('./create')(app, db)
};