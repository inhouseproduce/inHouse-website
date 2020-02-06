module.exports = (app, db) => {
    app.get('/get/clientlist/', async (req, res) => {
        try {
            let clients = await db.Client.find({});
            res.status(200).json({ success: clients });
        }
        catch (error) {
            res.json({ error: 'Error getting clients list' });
        };
    });
};