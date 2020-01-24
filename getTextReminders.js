const fs = require('fs');
const {google} = require('googleapis');


const CREDENTIALS = process.env.GOOGLE_CRED;
const TOKEN = process.env.GOOGLE_TOKEN;

function loadTextReminders(){

  try
  {
    // Load client secrets from a local file.
    var content = fs.readFileSync(CREDENTIALS, 'utf8')
    return authorize(JSON.parse(content), main);
  }
  catch(err)
  {
    console.log("Here's an error in with credentials: " + err);
  }

}
function authorize(credentials, callback) {

  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  try{
    var token = fs.readFileSync(TOKEN, 'utf8');
    // console.log(typeof token);
    oAuth2Client.setCredentials(JSON.parse(token));
    return callback(oAuth2Client);
}
  catch(err)
  {
    console.log("Here's an error: "+err);
      // return getNewToken(oAuth2Client, callback);
  }
}


// function getNewToken(oAuth2Client, callback) {
//   const authUrl = oAuth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: SCOPES,
//   });
//   console.log('Authorize this app by visiting this url:', authUrl);
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   rl.question('Enter the code from that page here: ', (code) => {
//     rl.close();
//     oAuth2Client.getToken(code, (err, token) => {
//       if (err) return console.error('Error while trying to retrieve access token', err);
//       oAuth2Client.setCredentials(token);
//       // Store the token to disk for later program executions
//       fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
//         if (err) return console.error(err);
//         console.log('Token stored to', TOKEN_PATH);
//       });
//       callback(oAuth2Client);
//     });
//   });
// }


async function getMessages(auth) {

  const sheets = google.sheets({ version: "v4", auth });
  const daily_check = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'System!A:A',
  });
  const seeding = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'Seeding!A:A',
  });

  return [daily_check.data.values.flat(), seeding.data.values.flat()];
}

async function main(auth) {
  const data = await getMessages(auth);
  return data;
}

var textMessages = loadTextReminders().then(value => {
  return value;
});

module.exports = {
  getTextReminders: textMessages
};
