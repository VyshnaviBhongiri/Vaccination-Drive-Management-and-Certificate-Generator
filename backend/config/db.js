const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "klh@1234",
  database: "vaccination_db"
});

module.exports = db.promise();