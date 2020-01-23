const CronJob = require('cron').CronJob;
const CronTime = require('cron').CronTime
const Messenger = require('./modules/Messenger.js');
const fetch = require("node-fetch");
const loadTextReminders = require('./getTextReminders.js');

var cronJobs = {};

module.exports = ( mongoose_connection ) => {

  console.log("In send_sms.js ");

  //initial 
  main(mongoose_connection);

  //at midnight, recheck the jobs 
  new CronJob("0 /3 * * * *", main.bind(this, mongoose_connection),  null, true, "America/Los_Angeles");
};


function main(mongoose_connection)
{
  mongoose_connection.once('open', () => 
  {
    console.log("mongodb connection from send_sms.js");
    Messenger.find({}, function (err, client_list) 
    {
      console.log("found clients");
      const client_data = JSON.parse(JSON.stringify(client_list[0]));
      client_data.clients.forEach(client => 
      {
        if (client.name in crobJobs)
        {

          crobJobs[client.name]['seeding'].setTime(new CronTime(client.schedule_seeding));
          crobJobs[client.name]['daily_check'].setTime(new CronTime(client.schedule_daily_checkups));
          crobJobs[client.name]['seeding'].start();
          crobJobs[client.name]['daily_check'].start();
        }
        else
        {
        const customerPhone = client.phoneNo;

        // scheduleCronJob(client.schedule_seeding, messageToCustomer, customerPhone, 'seeding');
        // scheduleCronJob(client.schedule_daily_checkups, messageToCustomer, customerPhone, 'daily_check');
       
        crobJobs[client.name] = {};
        crobJobs[client.name]['seeding'] = new CronJob(client.schedule_seeding, messageToCustomer.bind(this, customerPhone, 'seeding'),  null, true, "America/Los_Angeles");
        crobJobs[client.name]['daily_check'] = new CronJob(client.schedule_daily_checkups, messageToCustomer.bind(this, customerPhone, 'daily_check'),  null, true,"America/Los_Angeles");

      
      }
      });
    });
  });
  console.log("Finished cron job setup");

}

function randomIndex(arrayLength)
{
  // returns a random number

  return Math.floor(Math.random() * arrayLength);
  // return Math.floor(Math.random() * (arrayLength - 1)) + 1;

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
  
  loadTextReminders.then(message_array => {
      var message = "";
      if (typeOfMessage === "seeding")
      {
        message = message_array[1][randomIndex(message_array[1].length)];
      }
      else
      {
        message =  message_array[0][randomIndex(message_array[0].length)];
      }

      sendMessage(customerPhone, message);

  });
}
