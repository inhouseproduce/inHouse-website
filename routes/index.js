
module.exports = (app, db) => {
    require('./restful')(app, db),
    require('./auth')(app, db),
    require('./crud')(app, db)
}