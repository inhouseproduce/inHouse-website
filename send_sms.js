const CronJob = require('cron').CronJob;
const textReminders = require('./text-reminders.json');
const Messenger = require('./modules/Messenger.js');
const fetch = require("node-fetch");

module.exports = ( mongoose_connection ) => {

  console.log("In send_sms.js ");

  mongoose_connection.once('open', () => 
  {
    console.log("mongodb connection from send_sms.js");
    Messenger.find({}, function (err, client_list) 
    {
      console.log("found clients");
      const client_data = JSON.parse(JSON.stringify(client_list[0]));
      client_data.clients.forEach(client => 
      {
        const customerPhone = client.phoneNo;
        new CronJob(client.schedule_seeding, messageToCustomer.bind(this, customerPhone, 'seeding'),  null, true, "America/Los_Angeles");
        new CronJob(client.schedule_daily_checkups, messageToCustomer.bind(this, customerPhone, 'daily_check'),  null, true,"America/Los_Angeles");
      });
    });
  });
  console.log("Finished cron job setup");
};

function randomIndex(arrayLength)
{
  // returns a random number

  return Math.floor(Math.random() * arrayLength);
}

function sendMessage(phoneNo, message)
{
  // send a SMS message, message, to phoneNo from the Twilio Number
  
  console.log("Sending SMS Message!");

  fetch('https://webapp-inhouse.herokuapp.com/api/messages', {
    method: 'POST',
    headers: 
    {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"to":phoneNo,"body": message})
  }).catch(err => console.error("Here's an error from sendMessage(): " + err));

}


function messageToCustomer(customerPhone, typeOfMessage)
{
  // checks which type of message to send (seeding or daily check) and calls sendMessage to send the message
  
  var message = "";
  if (typeOfMessage === "seeding")
  {
    message = textReminders.seeding[randomIndex(textReminders.seeding.length)]
  }
  else
  {
    message = textReminders.daily_check[randomIndex(textReminders.daily_check.length)]
  }

  sendMessage(customerPhone, message);
}


