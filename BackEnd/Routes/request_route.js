const router = require("express").Router();
const mysql = require("mysql");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const { PDFNet } = require("@pdftron/pdfnet-node");
const { WordsApi, ConvertDocumentRequest } = require("asposewordscloud");

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   user: "root",
//   password: "1212@Knuwara",
//   database: "c_m_system",
// });

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "c_m_system",
});

const CLIENT_ID =
  "27515838946-9m4bur80vck08emcdbqucn1b3m4d6c8f.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//0494pCEWaYD0vCgYIARAAGAQSNwF-L9IrRe9Vwe1uOdQG0Gl2LOgzRRjNgWwlX-2NHPqClFgIk53agDDj7X_9kfnuj1JUt7pflH8";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

//get all student's recent requests
router.route("/recent/details").get((req, res) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }
  const yesterdayDate = formatDate(yesterday);

  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `SELECT * from request WHERE s_date>=?`,
        yesterdayDate,
        (error, rows) => {
          connection.release();
          if (error) {
            res.send(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
      res.send(e);
    }
  });
});

//get course contents
router.route("/course/content").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query("SELECT * from c_content", (error, rows) => {
        connection.release();
        if (error) {
          res.send(err);
        } else {
          res.json(rows);
        }
      });
    } catch (e) {
      res.send(e);
    }
  });
});

//get a specific course content
router.route("/course/content/:name").get((req, res) => {
  const name = req.params.name;
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `SELECT * from c_content WHERE c_name="${name}"`,
        (error, rows) => {
          let value = rows[0];
          connection.release();
          if (error) {
            res.send(err);
          } else {
            res.json(value);
          }
        }
      );
    } catch (e) {
      res.send(e);
    }
  });
});

//get all student requests
router.route("/details").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query("SELECT * from request", (error, rows) => {
        connection.release();
        if (error) {
          res.send(err);
        } else {
          res.json(rows);
        }
      });
    } catch (e) {
      res.send(e);
    }
  });
});

//get specific request detail
router.route("/details/:id/:nic").get((req, res) => {
  const id = req.params.id;
  const nic = req.params.nic;

  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `SELECT * from request WHERE uuid="${id}" AND nic="${nic}"`,
        (error, rows) => {
          let value = rows[0];
          connection.release();
          if (error) {
            res.send(err);
          } else {
            res.json(value);
          }
        }
      );
    } catch (e) {
      res.send(e);
    }
  });
});

//check the request in issued table, is it issued or not
router.route("/details/check/:course/:nic").get((req, res) => {
  const nic = req.params.nic;
  const course = req.params.course;

  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `SELECT * from issued WHERE nic="${nic}" AND name_cerificate="${course}"`,
        (error, rows) => {
          connection.release();
          if (error) {
            res.send(err);
          } else {
            res.json(rows.length);
          }
        }
      );
    } catch (e) {
      res.send(e);
    }
  });
});

//save issued certificate details
router.route("/save/issued/details").post((req, res) => {
  const data = req.body;
  pool.getConnection((err, connection) => {
    try {
      connection.query("INSERT INTO issued SET ?", data, (error, rows) => {
        connection.release();
        if (error) {
          res.send(err);
        } else {
          res.send(rows);
        }
      });
    } catch (e) {
      res.send(e);
    }
  });
});

//get specific issued certificate detail
router.route("/issued/details/:id/:nic").get((req, res) => {
  const id = req.params.id;
  const nic = req.params.nic;

  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `SELECT * from issued WHERE uuid="${id}" AND nic="${nic}"`,
        (error, rows) => {
          let value = rows[0];
          connection.release();
          if (error) {
            res.send(err);
          } else {
            res.json(value);
          }
        }
      );
    } catch (e) {
      res.send(e);
    }
  });
});

//save rejected certificate requests
router.route("/reject/:id/:nic").post((req, res) => {
  const data = req.body;
  pool.getConnection((err, connection) => {
    try {
      connection.query("INSERT INTO rejected SET ?", data, (error, rows) => {
        connection.release();
        if (error) {
          res.send(err);
        } else {
          res.send(rows);
        }
      });
    } catch (e) {
      res.send(e);
    }
  });
});

//delete data from the request table
router.route("/remove/details/:id").delete((req, res) => {
  const id = req.params.id;
  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `DELETE FROM request WHERE uuid="${id}" `,
        (error, rows) => {
          connection.release();
          if (error) {
            res.send(err);
          } else {
            res.send(rows);
          }
        }
      );
    } catch (e) {
      res.send(e);
    }
  });
});

//get student certificates
router.route("/delete/user/:username/:password").delete((req, res) => {
  const username = req.params.username;
  const password = req.params.password;

  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `DELETE FROM admin WHERE username="${username}" AND password="${password}" `,
        (error, rows) => {
          connection.release();
          if (error) {
            res.send(err);
          } else {
            res.send(rows);
          }
        }
      );
    } catch (e) {
      res.send(e);
    }
  });
});

//get rejected certificate
router.route("/reject/certificates/details").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query("SELECT * from rejected", (error, rows) => {
        connection.release();
        if (error) {
          res.send(err);
        } else {
          res.json(rows);
        }
      });
    } catch (e) {
      res.send(e);
    }
  });
});

//get specific rejected certificate detail
router.route("/reject/details/:id/:nic").get((req, res) => {
  const id = req.params.id;
  const nic = req.params.nic;

  pool.getConnection((err, connection) => {
    try {
      connection.query(
        `SELECT * from rejected WHERE uuid="${id}" AND nic="${nic}"`,
        (error, rows) => {
          let value = rows[0];
          connection.release();
          if (error) {
            res.send(err);
          } else {
            res.json(value);
          }
        }
      );
    } catch (e) {
      res.send(e);
    }
  });
});

//get issued certificate
router.route("/issued/certificates/details").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query("SELECT * from issued", (error, rows) => {
        connection.release();
        if (error) {
          res.send(err);
        } else {
          res.json(rows);
        }
      });
    } catch (e) {
      res.send(e);
    }
  });
});

//get user details
router.route("/user/details").get((req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query("SELECT * from admin", (error, rows) => {
        connection.release();
        if (error) {
          res.send(err);
        } else {
          res.json(rows);
        }
      });
    } catch (e) {
      res.send(e);
    }
  });
});

//get student certificates
router.route("/certificate/:id").get((req, res) => {
  const id = req.params.id;

  const Path = path.resolve(__dirname, `../Certificate/${id}.pdf`);
  fs.readFile(Path, function (err, data) {
    if (err) {
      res.json("Not Found");
    } else {
      res.writeHead(200, { ContentType: "application/pdf" });
      res.end(data);
    }
  });
});

//genarate a certificates
router.route("/genarate/certificate/:id/:tmpid").post(async (req, res) => {
  const id = req.params.id;
  const tmp = req.params.tmpid;
  const data = req.body;

  //genarate certificate as a docx file
  const DOCXpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Load the docx file as binary content
      const content = fs.readFileSync(
        path.resolve(__dirname, `../Templates/${tmp}`),
        "binary"
      );
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });
      // Render the document (Replace)
      doc.render({
        certificatetitle: data.cName,
        name: data.name,
        in: "CAAD CENTER",
        at: data.branch,
        during: "From: " + data.sDate + " " + "To: " + data.eDate,
        id: data.msID,
        c_content: data.courses,
        duration: data.cDuration,
        grade: data.grade,
        verified: id,
      });

      const buf = doc.getZip().generate({
        type: "nodebuffer",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
      });
      fs.writeFileSync(
        path.resolve(__dirname, `../Certificate/${id}.docx`),
        buf,
        function (err, bytes) {
          if (err) {
            reject(err);
          } else {
            resolve(bytes);
          }
        }
      );
      resolve();
    }, 3000);
  });

  //convert docx file into pdf
  DOCXpromise.then((data) => {
    const PDFpromise = new Promise((resolve, reject) => {
      const inputPath = path.resolve(__dirname, `../Certificate/${id}.docx`);
      const outputPath = path.resolve(__dirname, `../Certificate/${id}.pdf`);

      var appSid = "d0838cc4-e283-4e67-8200-7cf070ff8cac";
      var appKey = "31b8b4c42d4d4967211e1e95255bf794";

      var wordsApi = new WordsApi(appSid, appKey);

      var fileName = inputPath;
      var request = new ConvertDocumentRequest({
        format: "pdf",
        document: fs.readFileSync(fileName),
      });

      wordsApi
        .convertDocument(request)
        .then((result) => {
          fs.writeFile(outputPath, result.body, (err) => {
            if (err) throw err;
            // console.log('Successfully converted');
            resolve("Done");
          });
        })
        .catch(function (err) {
          // console.log('Error:', err);
          reject(err);
        });
    });

    //delete created docx files
    PDFpromise.then((detail) => {
      fs.unlink(
        path.resolve(__dirname, `../Certificate/${id}.docx`),
        function (err) {
          if (err) {
            res.send(err);
          } else {
            res.send(true);
          }
        }
      );
    }).catch((err) => {
      res.send(err);
    });
  }).catch((err) => {
    res.send(err);
    res.send("faild");
  });
});

//send email through the email
router.route("/send/:id/:email").get((req, res) => {
  let email = req.params.email;
  let id = req.params.id;

  const certificate = path.resolve(__dirname, `../Certificate/${id}.pdf`);
  const mailservice = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "noreplycert@caddcentre.lk",
      pass: "1212@Knuwara",
    },
  });
  const sender = {
    from: "CADD CENTER Management <noreplycert@caddcentre.lk>",
    to: email,
    subject: "CADD CERTIFICATE!",
    // text: "This is a testing certificate!",
    attachments: [{ filename: `${id}.pdf`, path: certificate }],
  };

  mailservice.sendMail(sender, function (error, info) {
    if (error) {
      res.send(error);
    } else {
      console.log("Email has been send.." + info.response);
      res.send(info.response);
    }
  });
});

//send reject certificates through the email
router.route("/send/reject/certificate/:email/:message").get((req, res) => {
  let email = req.params.email;
  let message = req.params.message;

  const mailservice = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "noreplycert@caddcentre.lk",
      pass: "1212@Knuwara",
    },
  });
  const sender = {
    from: "CADD CENTER Management <noreplycert@caddcentre.lk>",
    to: email,
    subject: "CADD CERTIFICATE!",
    text: message,
  };

  mailservice.sendMail(sender, function (error, info) {
    if (error) {
      res.send(error);
    } else {
      // console.log("Email has been send.." + info.response);
      res.send(info.response);
    }
  });
});

//get all templates
router.route("/templates").get((req, res) => {
  const Path = path.resolve(__dirname, `../Templates`);
  fs.readdir(Path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

//delete the templates
router.route("/delete/template/:name").delete((req, res) => {
  let name = req.params.name;
  fs.unlink(path.resolve(__dirname, `../Templates/${name}`), function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send("Done");
    }
  });
});

//cancel the certificate
router.route("/delete/certificate/:id").delete((req, res) => {
  let id = req.params.id;
  fs.unlink(
    path.resolve(__dirname, `../Certificate/${id}.pdf`),
    function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send(true);
      }
    }
  );
});

// get relevent certificate template
router.route("/template/:id").get((req, res) => {
  const id = req.params.id;

  const Path = path.resolve(__dirname, `../Templates/${id}`);
  fs.readFile(Path, function (err, data) {
    if (err) {
      res.json("Not Found");
    } else {
      res.writeHead(200, { ContentType: "application/pdf" });
      res.end(data);
    }
  });
});

// get relevent student slip

router.route("/slip/:id").get((req, res) => {
  const id = req.params.id;

  const Path = path.resolve(__dirname, `../Payment_Slip/${id}.jpg`);
  const Path2 = path.resolve(__dirname, `../Payment_Slip/${id}.jpeg`);
  const Path3 = path.resolve(__dirname, `../Payment_Slip/${id}.png`);

  fs.readFile(Path, function (err, data) {
    if (err) {
      fs.readFile(Path2, function (err, data) {
        if (err) {
          fs.readFile(Path3, function (err, data) {
            if (err) {
              console.log(err);
            } else {
              res.writeHead(200, { ContentType: "image/jpg" });
              res.end(data);
            }
          });
        } else {
          res.writeHead(200, { ContentType: "image/jpg" });
          res.end(data);
        }
      });
    } else {
      res.writeHead(200, { ContentType: "image/jpg" });
      res.end(data);
    }
  });
});

module.exports = router;
