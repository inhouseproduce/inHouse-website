module.exports = async ( app, db ) => {
    app.get('/get/json/', (req, res) => {
        let test = await db.Client.create({});
        res.status(200).json({
            "system": "1",
            "schedule": {
                "mainPump": {
                    "type": "interval",
                    "time_interval": 10,
                    "run_period": 0.8,
                    "pin": 11,
                    "direction": "OUTPUT",
                    "errorCheck": true
                },
            
                "secondPump": {
                    "type": "interval",
                    "time_interval": 240,
                    "run_period": 5,
                    "pin": 13,
                    "direction": "OUTPUT"
                },
            
                "lighting": {
                    "actions": [
                        {
                            "action": "on",
                            "time": "21:00"  
                        },
                        {
                            "action": "dim",
                            "time": "24:00",
                            "level": "50"  
                        },
                        {
                            "action": "dim",
                            "time": "25:00",
                            "level": "100"  
                        }
                    ],
                    "type": "clock",
                    "pin": 7,
                    "pwm": 12,
                    "direction": "OUTPUT"
                }
            }
        })
    })
};