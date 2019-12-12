module.exports = (app, db) => {
    app.post('/create/new/fleet/', (req,res) => {
        let form = req.body.form;
        console.log('form', form )
    });
};