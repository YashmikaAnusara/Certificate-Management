const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const upload = require("./middleware/upload");
const path = require("path");
 

const fs = require("fs");
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

//get templates

app.listen(port, () => {
  console.log(`Servert start on port ${port}`);
});
