const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "practice",
});

module.exports = pool.promise();
