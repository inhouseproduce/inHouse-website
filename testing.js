const configContent = require('./config.json');

for (var customer in configContent['clients']) 
{
  // iterates through each customer's data for their phone number and schedules

  console.log(configContent['clients'][customer]['site']);
}