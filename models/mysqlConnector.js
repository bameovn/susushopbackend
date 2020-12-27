// Load module
var mysql = require('mysql');

var pool      =    mysql.createPool({ 
  host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'susu'
});
module.exports = pool;

