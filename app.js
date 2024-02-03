
const http = require('http');
const fs = require('fs');
const path = require('path');
const db = require('./service/database.js');

const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');

  // Read the dashboard.html file
  fs.readFile(path.join(__dirname, 'website/dashboard.html'), (err, data) => {
    if (err) {
      // Handle error if the file cannot be read
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      // Send the contents of the dashboard.html file as the response
      res.statusCode = 200;
      res.end(data);
    }
  });
});

// Startup logging
console.log('Starting server...');

// Start up the database connection
getConnection().then((connection) => {
  console.log('Database connection established');
}).catch((err) => {
  console.error('Error connecting to database:', err);
});

// Provision tables in the database if they do not exist using the startupCheck.sql file
const startupCheckQuery = fs.readFileSync(path.join(__dirname, 'datamodel/startupCheck.sql'), 'utf8');

getConnection().query(startupCheckQuery, (err, result) => {
  if (err) {
    console.error('Error executing startup check query:', err);
  } else {
    console.log('Startup check query executed successfully');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
