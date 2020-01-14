// import textReminders from './text-reminders.json';
// import configContent from './config.json';

var CronJob = require('cron').CronJob;
var cronJobsArray = [];

const textReminders = require('./text-reminders.json');
const configContent = require('./config.json');
const fetch = require("node-fetch");

module.exports = ( app ) => {

  console.log("In send_sms.js");
  for (var customer in configContent) 
  {
    // iterates through each customer's data for their phone number and schedules
  
    // const customerPhone = configContent[customer]['phoneNo'];
    const customerPhone = process.env.TEST_PHONE;
    cronJobsArray.push([new CronJob(configContent[customer]['schedule_seeding'], 
                        messageToCustomer.bind(this, customerPhone, 'seeding'),  null, true),
                      new CronJob(configContent[customer]['schedule_daily_checkups'], 
                      messageToCustomer.bind(this, customerPhone, 'daily_check'),  null, true)]);
  }

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

  fetch('/api/messages', {
    method: 'POST',
    headers: 
    {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"to":phoneNo,"body": message})
  })
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


