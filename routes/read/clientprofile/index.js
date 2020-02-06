module.exports = (app, db) => {
    app.get('/client/profile/:client/', async (req, res) => {
        let clientId = req.params.client;
        try {
            let client = await db.Client.findOne({ _id: clientId });
            res.status(200).json({ success: { client } });
        }
        catch (error) {
            res.status(500).json({ error: 'Error occured' });
        };
    });
};