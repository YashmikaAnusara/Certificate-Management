const router = require("express").Router();
const { json } = require("body-parser");
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "sql6.freesqldatabase.com",
  user: "sql6503083",
  password: "XIGq1irXCi",
  database: "sql6503083",
  port: 3306,
});

//student requset the form api
router.route("/requset").post((req, res) => {
  const reqdata = req.body;
  pool.getConnection((err, connection) => {
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

//get the all pending request for chart
router.route("/pending").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        "SELECT s_month, COUNT(s_month) as request from request GROUP BY s_month;",
        (error, rows) => {
          let c = 0;
          var Jan = 0;
          var Feb = 0;
          var March = 0;
          var April = 0;
          var May = 0;
          var June = 0;
          var July = 0;
          var Aug = 0;
          var Sep = 0;
          var Oct = 0;
          var Nov = 0;
          var Dec = 0;
          connection.release();
          if (error) {
            console.log(err);
          } else {
            while (c < rows.length) {
              if (rows[c].s_month == "Jan") {
                Jan = rows[c].request;
              } else if (rows[c].s_month == "Feb") {
                Feb = rows[c].request;
              } else if (rows[c].s_month == "March") {
                March = rows[c].request;
              } else if (rows[c].s_month == "April") {
                April = rows[c].request;
              } else if (rows[c].s_month == "May") {
                May = rows[c].request;
              } else if (rows[c].s_month == "June") {
                June = rows[c].request;
              } else if (rows[c].s_month == "July") {
                July = rows[c].request;
              } else if (rows[c].s_month == "Aug") {
                Aug = rows[c].request;
              } else if (rows[c].s_month == "Sep") {
                Sep = rows[c].request;
              } else if (rows[c].s_month == "Oct") {
                Oct = rows[c].request;
              } else if (rows[c].s_month == "Nov") {
                Nov = rows[c].request;
              } else if (rows[c].s_month == "Dec") {
                Dec = rows[c].request;
              }
              c++;
            }
            const data = [
              { name: "Jan", "Pending Requset": Jan },
              { name: "Feb", "Pending Requset": Feb },
              { name: "Mar", "Pending Requset": March },
              { name: "Apr", "Pending Requset": April },
              { name: "June", "Pending Requset": June },
              { name: "July", "Pending Requset": July },
              { name: "Aug", "Pending Requset": Aug },
              { name: "Sep", "Pending Requset": Sep },
              { name: "Oct", "Pending Requset": Oct },
              { name: "Sep", "Pending Requset": Sep },
              { name: "Nov", "Pending Requset": Nov },
              { name: "Dec", "Pending Requset": Dec },
            ];
            res.json(data);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
});

//get the all rejected  request for chart
router.route("/rejected").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        "SELECT s_month, COUNT(s_month) as rejected from request GROUP BY s_month;",
        (error, rows) => {
          let c = 0;
          var Jan = 0;
          var Feb = 0;
          var March = 0;
          var April = 0;
          var May = 0;
          var June = 0;
          var July = 0;
          var Aug = 0;
          var Sep = 0;
          var Oct = 0;
          var Nov = 0;
          var Dec = 0;
          connection.release();
          if (error) {
            console.log(err);
          } else {
            while (c < rows.length) {
              if (rows[c].s_month == "Jan") {
                Jan = rows[c].request;
              } else if (rows[c].s_month == "Feb") {
                Feb = rows[c].request;
              } else if (rows[c].s_month == "March") {
                March = rows[c].request;
              } else if (rows[c].s_month == "April") {
                April = rows[c].request;
              } else if (rows[c].s_month == "May") {
                May = rows[c].request;
              } else if (rows[c].s_month == "June") {
                June = rows[c].request;
              } else if (rows[c].s_month == "July") {
                July = rows[c].request;
              } else if (rows[c].s_month == "Aug") {
                Aug = rows[c].request;
              } else if (rows[c].s_month == "Sep") {
                Sep = rows[c].request;
              } else if (rows[c].s_month == "Oct") {
                Oct = rows[c].request;
              } else if (rows[c].s_month == "Nov") {
                Nov = rows[c].request;
              } else if (rows[c].s_month == "Dec") {
                Dec = rows[c].request;
              }
              c++;
            }
            const data = [
              { name: "Jan", "Pending Requset": Jan },
              { name: "Feb", "Pending Requset": Feb },
              { name: "Mar", "Pending Requset": March },
              { name: "Apr", "Pending Requset": April },
              { name: "June", "Pending Requset": June },
              { name: "July", "Pending Requset": July },
              { name: "Aug", "Pending Requset": Aug },
              { name: "Sep", "Pending Requset": Sep },
              { name: "Oct", "Pending Requset": Oct },
              { name: "Sep", "Pending Requset": Sep },
              { name: "Nov", "Pending Requset": Nov },
              { name: "Dec", "Pending Requset": Dec },
            ];
            res.json(data);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
});

//get the all pending request for chart
router.route("/pending/count").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        "SELECT COUNT(s_month) as pendingcount from request;",
        (error, rows) => {
          let data=rows[0]
          connection.release();
          if (error) {
            console.log(err);
          } else {
            res.json(data);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
});

//get the all Issued request for chart
router.route("/issued/count").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        "SELECT COUNT(s_month) as issuedcount from issued;",
        (error, rows) => {
          let data = rows[0];
          connection.release();
          if (error) {
            console.log(err);
          } else {
            res.json(data);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
});

//get the all rejected request for chart
router.route("/rejected/count").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        "SELECT COUNT(s_month) as rejectedcount from rejected;",
        (error, rows) => {
          let data = rows[0];
          connection.release();
          if (error) {
            console.log(err);
          } else {
            res.json(data);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
});

//Admin Login API
router.route("/login/:user/:pass").get((req, res) => {
  let user = req.params.user;
  let pass = req.params.pass;

  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `SELECT * from admin a WHERE password = "${pass}" AND username = "${user}";`,
        (error, rows) => {
          let data = rows[0];
          connection.release();
          if (error) {
            console.log(error);
          } else {
            res.json(data);
          }
        }
      );
    } catch (e) {
      console.log("this is a try catch error");
    }
  });
});

module.exports = router;
