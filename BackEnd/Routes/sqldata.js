const router = require("express").Router();
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "sql6.freesqldatabase.com",
  user: "sql6503083",
  password: "XIGq1irXCi",
  database: "sql6503083",
  port: 3306,
});

router.route("/requset").post((req, res) => {
  const reqdata = req.body
  pool.getConnection((err, connection) => {
    try {
      connection.query("INSERT INTO request SET ?", reqdata, (error) => {
        connection.release();
        if (error) {
          console.log("this is try error");
        } else {
          res.json("Data Added");
        }
      });
    } catch (e) {
      console.log('this is a try catch error');
    }
  });
});

module.exports = router;
