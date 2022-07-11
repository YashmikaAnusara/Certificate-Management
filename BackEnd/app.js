const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const upload = require("./middleware/upload");
const path = require("path");
const nodemailer = require("nodemailer");

const fs = require("fs");
const { text } = require("body-parser");
const app = express();
const port = process.env.PORT || 8070;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//outlook mail sending code`
const mailservice = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "noreplycert@caddcentre.lk",
    pass: "1212@Knuwara",
  },
});

const sender = {
  from: "noreplycert@caddcentre.lk",
  to: "noreplycert@caddcentre.lk",
  subject: "this is the sample message in outlook",
  text: "Test Done in is mail",
  attachments: [{ filename: `22.pdf`, path: "./Certificate/22.pdf" }],
};

mailservice.sendMail(sender, function (error, info) {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log("Email has been send.." + info.response);
  }
});

app.use("/request", require("./Routes/request_route"));
app.use("/student", require("./Routes/sqldata"));

//saveing templates...
app.use("/template/save", upload.single("template"), function (req, res) {
  res.json("Done");
});

//get templates

app.listen(port, () => {
  console.log(`Servert start on port ${port}`);
});
