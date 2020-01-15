// import textReminders from './text-reminders.json';
// import configContent from './config.json';

var CronJob = require('cron').CronJob;
var cronJobsArray = [];

const textReminders = require('./text-reminders.json');
const configContent = require('./config.json');
const fetch = require("node-fetch");


module.exports = ( app ) => {

  console.log("In send_sms.js");
  for (var customer in configContent['clients']) 
  {
    // iterates through each customer's data for their phone number and schedules
  
    // const customerPhone = configContent['clients'][customer]['phoneNo'];
    const customerPhone = process.env.TEST_PHONE;
    var seedingJob = new CronJob(configContent['clients'][customer]['schedule_seeding'], messageToCustomer.bind(this, customerPhone, 'seeding'),  null, true);
    var dailyJob =  new CronJob(configContent['clients'][customer]['schedule_daily_checkups'], messageToCustomer.bind(this, customerPhone, 'daily_check'),  null, true);

    //consider timezones
    console.log("Here is seeding Job: "+ seedingJob.cronTime.source,seedingJob.cronTime.minute,seedingJob.cronTime.hour );
    console.log("Here is daily job: " + dailyJob.cronTime.source, dailyJob.cronTime.minute,dailyJob.cronTime.hour );
    
    
    cronJobsArray.push([seedingJob,dailyJob]);
                     
  }
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
  }).catch(err => console.error("Here's an error: " + err));
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

  // sendMessage(customerPhone, message);

    console.log("could be sending message: "+ message);

}


