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
                },
                {
                    "action": "dim",
                    "time": "23:00",
                    "level": "50"
                },
                {
                    "action": "dim",
                    "time": "23:30",
                    "level": "50"
                }
            ]
        }
    },
    "modules": {
        "camera": {
            "type": "interval",
            "time_interval": 1,
            "esp": [
                {
                    "position": 1,
                    "mac": "4c:11:ae:75:c2:48"
                },
                {
                    "position": 2,
                    "mac": "23:6f:28:b1:58:23"
                }
            ]
        }
    }
}