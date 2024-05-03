const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123',
  database: 'sys',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;