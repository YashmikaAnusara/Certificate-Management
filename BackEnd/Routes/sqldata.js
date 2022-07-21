const router = require("express").Router();
const { json } = require("body-parser"); 
const mysql = require("mysql");
const ShortUniqueId = require("short-unique-id");

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

  const ms_email_id = req.body.ms_email_id;
  const uuidv1 = new ShortUniqueId({ length: 7 });
  const uuid = uuidv1();
  const a_submission_d = req.body.a_submission_d;
  const name = req.body.name;
  const email = req.body.email;
  const p_number = req.body.p_number;
  const nic = req.body.nic;
  const organization = req.body.organization;
  const occupation = req.body.occupation;
  const class_id = req.body.class_id;
  const name_cerificate = req.body.name_cerificate;
  const name_c_attended = req.body.name_c_attended;
  const name_lecturer = req.body.name_lecturer;
  const s_date_course = req.body.s_date_course;
  const e_date_course = req.body.e_date_course;
  const c_o_a_submission = req.body.c_o_a_submission;
  const tvec_certificate = req.body.tvec_certificate;
  const k_a_cadd_center = req.body.k_a_cadd_center;
  const r_cadd_center = req.body.r_cadd_center;
  const r_l_experience = req.body.r_l_experience;
  const l_t_proficiency = req.body.l_t_proficiency;
  const s_coordination = req.body.s_coordination;
  const c_fee_payment = req.body.c_fee_payment;
  const b_inquired = req.body.b_inquired;
  const c_person = req.body.c_person;
  const feedbak = req.body.feedbak;
  const bank_slip = req.body.bank_slip;
  const s_date = req.body.s_date;
  const s_month = req.body.s_month;

  const addinquiry = {
    ms_email_id,
    uuid,
    a_submission_d,
    name,
    email,
    p_number,
    nic,
    organization,
    occupation,
    class_id,
    name_cerificate,
    name_c_attended,
    name_lecturer,
    s_date_course,
    e_date_course,
    c_o_a_submission,
    tvec_certificate,
    k_a_cadd_center,
    r_cadd_center,
    r_l_experience,
    l_t_proficiency,
    s_coordination,
    c_fee_payment,
    b_inquired,
    c_person,
    feedbak,
    bank_slip,
    s_date,
    s_month,
  };

  pool.getConnection((err, connection) => {
    try {
      connection.query("INSERT INTO request SET ?", addinquiry, (error) => {
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
      connection.query("SELECT * from c_content", (error, rows) => {
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

//delete course content the form api
router.route("/coursecontent/:id").delete((req, res) => {
  const id = req.params.id;
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `DELETE FROM c_content WHERE id=${id}`,
        (error, rows) => {
          connection.release();
          if (error) {
            console.log("this is an error");
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
      console.log("this is a try catch error");
    }
  });
});

//get one course content the form api
router.route("/coursecontent/:id").get((req, res) => {
  const id = req.params.id;
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `SELECT * from c_content WHERE id=${id}`,
        (error, rows) => {
          let data = rows[0];
          connection.release();
          if (error) {
            console.log("this is an error");
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

//update course content the form api
router.route("/coursecontent/:id").put((req, res) => {
  const id = req.params.id;

  const c_name = req.body.c_name;
  const c_duration = req.body.c_duration;
  const c_content = req.body.c_content;

  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `UPDATE c_content SET c_name="${c_name}",c_duration="${c_duration}",c_content="${c_content}" WHERE id=${id}`,
        (error, rows) => {
          connection.release();
          if (error) {
            console.log("this is an error");
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
      console.log("this is a try catch error");
    }
  });
});

//add user api
router.route("/adduser").post((req, res) => {
  const data = req.body;
  pool.getConnection((err, connection) => {
    try {
      connection.query("INSERT INTO admin SET ?", data, (error, rows) => {
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

router.route("/verification").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query("SELECT * from issued", (error, rows) => {
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

router.route("/verification/name").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query("SELECT * from issued", (error, rows) => {
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

router
  .route("/certificateverification/:certificate_v/:certificate_n")
  .get((req, res) => {
    const uuid = req.params.certificate_v;
    const nic = req.params.certificate_n;

    pool.getConnection((err, connection) => {
      try {
        connection.query(
          `SELECT * from issued WHERE uuid="${uuid}" AND nic="${nic}"`,
          (error, rows) => {
            connection.release();
            let data = rows.length;
            if (error) {
              console.log("this is an error");
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
