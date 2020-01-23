const express = require('express');
const path = require('path');
const app = express();
const db = require('./modules');
const sendText = require('./send_sms.js');
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const twilioNo = process.env.TWILIO_PHONE;
const PORT = process.env.PORT || 3001;

const mongoConnection = require('./server-config/mongodb');
const setHeader = require('./server-config/header');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// SMS messages sender
sendText(mongoConnection);

// Mongo connection
const mongoConnect = mongoConnection;
mongoConnect.on('error', console.error.bind(console, 'connection error:'));

// Use header
setHeader(app);

//Routes
require('./routes')(app, db);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: twilioNo,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(PORT, () => {
    // console.log(`🌎 ==> Server now on port ${PORT}!`);
});



