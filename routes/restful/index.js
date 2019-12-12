module.exports = (app, db) => {
    app.get('/get/json/', (req, res) => {
        console.log('runing resule ')
        res.status(200).json('test');
    });
};