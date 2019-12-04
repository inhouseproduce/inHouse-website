module.exports = (app, db) => {
    app.get('/get/json/', (req, res) => {
        res.status(200).json();
    });
};