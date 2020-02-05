module.exports = (app) => {
    app.post('/create/client/', (req, res) => {
        let body = req.body;
        console.log('body', body)
    });
};