const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const upload = require("./middleware/upload");
const uploadv1 = require("./middleware/slip");
const path = require("path");
const nodemailer = require("nodemailer");

const fs = require("fs");
const { text } = require("body-parser");
const app = express();
const port = process.env.PORT || 8070;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/request", require("./Routes/request_route"));
app.use("/student", require("./Routes/sqldata"));

//saveing templates...
app.use("/template/save", upload.single("template"), function (req, res) {
  res.json("Done");
});


// save the slip
app.use("/upload/slip/:name", uploadv1.single("slip"), function (req, res) {
  res.json("Done");
});

//get templates

app.listen(port, () => {
  console.log(`Servert start on port ${port}`);
});
