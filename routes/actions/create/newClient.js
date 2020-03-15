const db = require('../../../models');

module.exports = async (req, res) => {
    let { form } = req.body;

    try {
        // Create client doc
        let client = await db.Client.create({
            name: form.name,
            phone: form.phone,
            location: form.location,
            image: form.image,
            uuid: form.uuid,
        });

        // Create Config doc
        await db.Config.create({
            id: client._id,
            config: initConfig
        });

        // Create record doc
        await db.Record.create({
            id: client._id
        });

        res.json({ success: client });
    }
    catch (error) {
        res.json({ error: error });
    };
};

const initConfig = {
    "engine": {
        "pump": {
            "type": "interval",
            "time_interval": 15,
            "run_period": 0.1,
            "pin": 11,
            "direction": "OUTPUT"
        },
        "irrigation": {
            "type": "interval",
            "time_interval": 1,
            "run_period": 3,
            "pin": 13,
            "direction": "OUTPUT"
        },
        "lights": {
            "type": "clock",
            "pin": 7,
            "pwm": 12,
            "direction": "OUTPUT",
            "actions": [
                {
                    "action": "on",
                    "time": "21:00"
                }
            ]
        }
    },
    "modules": {
        "camera": {
            "type": "interval",
            "time_interval": 1,
            "pin": 33,
            "esp": [
            ]
        }
    }
}