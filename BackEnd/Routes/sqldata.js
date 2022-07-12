const router = require("express").Router();
const { json } = require("body-parser");
const mysql = require("mysql");

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   user: "root",
//   password: "1212@Knuwara",
//   database: "c_m_system",
// });

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "c_m_system",
  // port: 8082,
});

pool.getConnection(function (err) {
  if (err) throw err;
  console.log("Connected!");
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

//get the all issued  request for chart
router.route("/issued").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        "SELECT s_month, COUNT(s_month) as issued from issued GROUP BY s_month;",
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
                Jan = rows[c].issued;
              } else if (rows[c].s_month == "Feb") {
                Feb = rows[c].issued;
              } else if (rows[c].s_month == "March") {
                March = rows[c].issued;
              } else if (rows[c].s_month == "April") {
                April = rows[c].issued;
              } else if (rows[c].s_month == "May") {
                May = rows[c].issued;
              } else if (rows[c].s_month == "June") {
                June = rows[c].issued;
              } else if (rows[c].s_month == "July") {
                July = rows[c].issued;
              } else if (rows[c].s_month == "Aug") {
                Aug = rows[c].issued;
              } else if (rows[c].s_month == "Sep") {
                Sep = rows[c].issued;
              } else if (rows[c].s_month == "Oct") {
                Oct = rows[c].issued;
              } else if (rows[c].s_month == "Nov") {
                Nov = rows[c].issued;
              } else if (rows[c].s_month == "Dec") {
                Dec = rows[c].issued;
              }
              c++;
            }
            const data = [
              { name: "Jan", "Issued Requset": Jan },
              { name: "Feb", "Issued Requset": Feb },
              { name: "Mar", "Issued Requset": March },
              { name: "Apr", "Issued Requset": April },
              { name: "June", "Issued Requset": June },
              { name: "July", "Issued Requset": July },
              { name: "Aug", "Issued Requset": Aug },
              { name: "Sep", "Issued Requset": Sep },
              { name: "Oct", "Issued Requset": Oct },
              { name: "Sep", "Issued Requset": Sep },
              { name: "Nov", "Issued Requset": Nov },
              { name: "Dec", "Issued Requset": Dec },
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
        "SELECT s_month, COUNT(s_month) as rejected from rejected GROUP BY s_month;",
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
                Jan = rows[c].rejected;
              } else if (rows[c].s_month == "Feb") {
                Feb = rows[c].rejected;
              } else if (rows[c].s_month == "March") {
                March = rows[c].rejected;
              } else if (rows[c].s_month == "April") {
                April = rows[c].rejected;
              } else if (rows[c].s_month == "May") {
                May = rows[c].rejected;
              } else if (rows[c].s_month == "June") {
                June = rows[c].rejected;
              } else if (rows[c].s_month == "July") {
                July = rows[c].rejected;
              } else if (rows[c].s_month == "Aug") {
                Aug = rows[c].rejected;
              } else if (rows[c].s_month == "Sep") {
                Sep = rows[c].rejected;
              } else if (rows[c].s_month == "Oct") {
                Oct = rows[c].rejected;
              } else if (rows[c].s_month == "Nov") {
                Nov = rows[c].rejected;
              } else if (rows[c].s_month == "Dec") {
                Dec = rows[c].rejected;
              }
              c++;
            }
            const data = [
              { name: "Jan", "Rejected Requset": Jan },
              { name: "Feb", "Rejected Requset": Feb },
              { name: "Mar", "Rejected Requset": March },
              { name: "Apr", "Rejected Requset": April },
              { name: "June", "Rejected Requset": June },
              { name: "July", "Rejected Requset": July },
              { name: "Aug", "Rejected Requset": Aug },
              { name: "Sep", "Rejected Requset": Sep },
              { name: "Oct", "Rejected Requset": Oct },
              { name: "Sep", "Rejected Requset": Sep },
              { name: "Nov", "Rejected Requset": Nov },
              { name: "Dec", "Rejected Requset": Dec },
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

//get the all pending request count
router.route("/pending/count").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        "SELECT COUNT(name) as pendingcount from request;",
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

//get the all Issued request count
router.route("/issued/count").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        "SELECT COUNT(name) as issuedcount from issued;",
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

//get the all rejected request count
router.route("/rejected/count").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        "SELECT COUNT(name) as rejectedcount from rejected;",
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

//post course content the form api
router.route("/coursecontent").post((req, res) => {
  const reqdata = req.body;
  pool.getConnection((err, connection) => {
    try {
      connection.query("INSERT INTO c_content SET ?", reqdata, (error) => {
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

//get course content the form api
router.route("/coursecontent").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query("SELECT * from c_content", (error,rows) => {
        connection.release();
        if (error) {
          console.log("this is an error");
        } else {
          res.json(rows);
        }
      });
    } catch (e) {
      console.log("this is a try catch error");
    }
  });
});
module.exports = router;
