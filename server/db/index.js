const mysql = require("mysql");
//198250
const pool = mysql.createPool({
  connectionLimit: 10,
  password: "indiana",
  user: "root",
  database: "employees",
  host: "localhost",
  port: "3306",
});

let db = {};

db.employeebyId = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM employees where emp_no = ?",
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(results);
        }
      }
    );
  });
};

db.allEmployees = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM employees limit 10",
      [],
      (err, results) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(results);
        }
      }
    );
  });
};

module.exports = db;
