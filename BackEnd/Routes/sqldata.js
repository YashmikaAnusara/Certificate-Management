const router = require("express").Router();
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "sql6.freesqldatabase.com",
  user: "sql6503083",
  password: "XIGq1irXCi",
  database: "sql6503083",
  port: 3306,
});

// requset the form api
router.route("/requset").post((req, res) => {
  const reqdata = req.body;
  pool.getConnection((err,connection) => {
    try {
      connection.query("INSERT INTO request SET ?", reqdata, (error) => {
        connection.release();
        if (error) {
          console.log("this is an error");
        } else {
          res.json("Data Added");
        }
      });
    } catch (e) {
      console.log("this is a try catch error");
    }
  });
});

//get the all request
router.route("/test").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query("SELECT * from test", (error, rows) => {
        connection.release();
        if (error) {
          console.log(err);
        } else {
          res.json(rows);
        }
      });
    } catch (e) {
      console.log(e);
    }
  });
});
module.exports = router;
