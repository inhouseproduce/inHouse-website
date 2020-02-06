module.exports = (app, db) => {
    require('./images')(app, db)
    require('./clientlist')(app, db)
    require('./clientprofile')(app, db)
}