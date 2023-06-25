const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "practice",
});

module.exports = pool.promise();
