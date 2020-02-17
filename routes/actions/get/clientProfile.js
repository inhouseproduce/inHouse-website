const db = require('../../../models');

module.exports = async (req, res) => {
    try {
        // Find client by _id
        let client = await db.Client.findOne({ _id: req.params.id });

        // Send back client profile data
        res.status(200).json({
            success: {
                client: client.name,
                phone: client.phone,
                location: client.location,
                config: client.config,
                images: client.images
            }
        });
    } catch (error) {
        res.status(204).end();
    };
};