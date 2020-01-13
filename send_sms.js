


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);
const twilioPhone = process.env.MY_TWILIO_NO;

var CronJob = require('cron').CronJob;
var CronTime = require('cron').CronTime;

var fs = require("fs");
var content = fs.readFileSync("text-reminders.json");
var jsonContent = JSON.parse(content);

var cronJobsArray = [];
// var cronJobIndex = 0;
// cronJobsArray.push(new CronJob("* * * * * ", sendMessage));


function sendMessage(toPhone, outgoingMessage)
{
	client.messages
	  .create({
	     body: outgoingMessage,
	     from: twilioPhone,
	     to: toPhone
	   });
}

function randomIndex(arrayLength)
{
	return Math.floor(Math.random() * arrayLength);
}


function messsageToCustomer(customerPhone, customerIndex)
{
	sendMessage(customerPhone, jsonContent.daily_check[randomIndex(jsonContent.daily_check.length)]);
}

function addCronJob()
{
	cronJobsArray.push(new CronJob("* * * * * ", sendMessage));
	// cronJobIndex++;
}

function changeTime(index, newTime)
{
	if (index < cronJobsArray.length && index >= 0)
	{
			cronJobsArray[index].setTime(new CronTime(newTime));
	}	
}


