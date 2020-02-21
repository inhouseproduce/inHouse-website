const db = require('../../../models');

module.exports = async (req, res) => {
    try {
        let client = await db.Client.findOne({ _id: req.params.id });
        res.status(200).json({});
    }
    catch (error) {
        res.status(500).end();
    }
};
