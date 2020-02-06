module.exports = (app, db) => {
    app.post('/create/client/', async (req, res) => {
        let { form } = req.body;

        // Extract data from form
        let clientForm = {
            name: form.name,
            location: form.location,
            image: form.image
        };

        // Save client in db
        try {
            await db.Client.create(clientForm);
            res.json({ success: 'Client Form was saved' });
        }
        catch (error) {
            res.json({ error: 'Error Occured. Client form was not saved' });
        };
    });
};