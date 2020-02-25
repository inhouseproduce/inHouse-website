const db = require('../../../models');

module.exports = async (req, res) => {
    try {
        // Find client by _id
        let client = await db.Client.findOne({ _id: req.params.id });
        let record = await db.Record.findOne({ id: req.params.id });

        // Send back client profile data
        res.status(200).json({
            success: {
                client: {
                    client: client.name,
                    phone: client.phone,
                    location: client.location,
                    images: client.images
                },
                record: {
                    images: record.images,
                    logs: record.record
                }
            }
        });
    } catch (error) {
        res.status(204).end();
    };
};