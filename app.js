// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

//requirs https module
const https = require('https')


//Function to print message to the console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badges and ${points} points in JavaScript`;
  console.log(message);
}

// printMessage("ondine", 100, 200000);


//Connect to the api url  https://teamtreehouse.com/ondinemagalirangel.json
function getProfile(username) {
  const request = https.get(`https://teamtreehousecom/${username}.json`, response => {
                            let body = "";
                            // Read data in (string)
                            // Parse the data
                            // Print out the data we got from the api
                            // console.dir(response);
                            // console.log(response.statusCod);
                            response.on('data', data => {
                              body += data.toString();
                            });
                            response.on('end', () => {
                              const profile = JSON.parse(body)
                              printMessage(username, profile.badges.length, profile.points.JavaScript);
                            });

                          });
  request.on('error', error => console.error(`Problem with the request: ${error.message}`));
}
// const users = ['ondinemagalirangel', 'chalkers'];
const users = process.argv.slice(2);

users.forEach(getProfile);
