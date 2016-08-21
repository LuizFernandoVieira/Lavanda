var mysql = require('mysql');

function connectMYSQL() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lavanda'
  });
}

module.exports = function() {
  return connectMYSQL;
}
