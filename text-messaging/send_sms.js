const CronJob = require('cron').CronJob;
const CronTime = require('cron').CronTime;
const Messenger = require('../modules/Messenger.js');
const fetch = require("node-fetch");
const loadTextReminders = require('./getTextReminders.js').getTextReminders;

var cronJobs = {};

module.exports = (  ) => {

  console.log("In send_sms.js ");

  //initial start of jobs 
  main();

  //let's see if running this every 30 minutes will stop it from idling
  new CronJob("0 */20 * * * *", function() {
    console.log("It's been 30 minutes now!");
  },  null, true, "America/Los_Angeles");

  //at midnight, recheck the jobs 
  new CronJob("0 0 0 * * *", main,  null, true, "America/Los_Angeles");
};

function main()
{

    Messenger.find({}, function (err, client_list) 
    {
      const client_data = JSON.parse(JSON.stringify(client_list[0]));

      //create newClientList from mongodb database in case of 
      //    newly added or deleted client
      var newClientList = [];
      client_data.clients.forEach(client =>
        {
          newClientList.push(client.name);
        }
      );

      //compare the previous users stored already to the current mongodb
      //database and remove users that are no longer in the mongodb database
      Object.keys(cronJobs).forEach(client =>
        { 
          if (!(newClientList).includes(client))
         {    

          //for debugging
          // console.log("client " + client + " no longer in mongodb database so they're cronjobs are getting stopped");
          
          cronJobs[client]['seeding'].stop();
          cronJobs[client]['daily_check'].stop();         
        }
       });
       

      //add new clients or create new schedule for an existing client
      client_data.clients.forEach(client => 
      {
        if (Object.keys(cronJobs).includes(client.name))
        {
          //for debugging
          // console.log("new schedule for " + client.name + " at " + client.schedule_seeding + " and " + client.schedule_daily_checkups);
          
          cronJobs[client.name]['seeding'].setTime(new CronTime(client.schedule_seeding, "America/Los_Angeles"));
          cronJobs[client.name]['daily_check'].setTime(new CronTime(client.schedule_daily_checkups, "America/Los_Angeles"));
        
          cronJobs[client.name]['seeding'].start();
          cronJobs[client.name]['daily_check'].start();

        }
        else
        {
          //for debugging
          // console.log("new client named " + client.name + " at " + client.schedule_seeding + " and " + client.schedule_daily_checkups);
          
          const customerPhone = client.phoneNo;
          cronJobs[client.name] = {};
          cronJobs[client.name]['seeding'] = new CronJob(client.schedule_seeding, messageToCustomer.bind(this, customerPhone, 'seeding'),  null, true, "America/Los_Angeles");
          cronJobs[client.name]['daily_check'] = new CronJob(client.schedule_daily_checkups, messageToCustomer.bind(this, customerPhone, 'daily_check'),  null, true,"America/Los_Angeles");
      }

      });
    });

}

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
