const CronJob = require('cron').CronJob;
const CronTime = require('cron').CronTime;
const Messenger = require('./modules/Messenger.js');
const fetch = require("node-fetch");
const loadTextReminders = require('./getTextReminders.js').getTextReminders;

var cronJobs = {};

module.exports = (  ) => {

  console.log("In send_sms.js ");

  //initial start of jobs 
  main();

  //test
  // messageToCustomer(process.env.TESTPHONE, 'seeding');

  //at midnight, recheck the jobs 
  new CronJob("0 * * * * *", main,  null, true, "America/Los_Angeles");
};


function main()
{
  console.log('start of main');
  // mongoose_connection.once('open', () => 
  // {
    console.log("mongodb connection from send_sms.js");
    Messenger.find({}, function (err, client_list) 
    {
      console.log("found clients");
      const client_data = JSON.parse(JSON.stringify(client_list[0]));

      Object.keys(cronJobs).forEach(client =>
        {
          if (!(client in client_data.clients))
          {
            console.log("client " + client + " no longer in database");
            cronJobs[client]['seeding'].stop();
            cronJobs[client]['daily_check'].stop();

            // delete cronJobs[client]['seeding'];
            // delete cronJobs[client];
          }
        })


      client_data.clients.forEach(client => 
      {
        if (client.name in cronJobs)
        {
          console.log("new schedule for " + client.name + " at " + client.schedule_seeding + " and " + client.schedule_daily_checkups);
          cronJobs[client.name]['seeding'].setTime(new CronTime(client.schedule_seeding, "America/Los_Angeles"));
          cronJobs[client.name]['daily_check'].setTime(new CronTime(client.schedule_daily_checkups, "America/Los_Angeles"));
        
          cronJobs[client.name]['seeding'].start();
          cronJobs[client.name]['daily_check'].start();

        }
        else
        {
        const customerPhone = client.phoneNo;
        console.log("new client named " + client.name + " at " + client.schedule_seeding + " and " + client.schedule_daily_checkups);

        cronJobs[client.name] = {};
        cronJobs[client.name]['seeding'] = new CronJob(client.schedule_seeding, messageToCustomer.bind(this, customerPhone, 'seeding'),  null, true, "America/Los_Angeles");
        cronJobs[client.name]['daily_check'] = new CronJob(client.schedule_daily_checkups, messageToCustomer.bind(this, customerPhone, 'daily_check'),  null, true,"America/Los_Angeles");
      }
      console.log(cronJobs[client.name]['daily_check'].cronTime.zone);

      });
    });
  // });
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
  
  console.log('start of messageToCustomer');

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

      console.log( "here " + message);
      sendMessage(customerPhone, message);
    });
  console.log( 'end of messageToCustomer');

}
