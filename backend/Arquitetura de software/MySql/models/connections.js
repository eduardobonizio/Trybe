const mysql = require('mysql2/promisse');

const connection = mysql.createPool({
  user: 'root',
  password: '232352',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
