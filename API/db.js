const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'UPANGbulletin',
  password: '',
  database: 'bulletin',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;