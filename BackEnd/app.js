const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const upload = require("./middleware/upload");
const path = require("path");

const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const fs = require("fs");
const app = express();
const port = process.env.PORT || 8070;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//testing maill sending system
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

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "autocarepvt1@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: "Testing Email <autocarepvt1@gmail.com>",
      to: "autocarepvt1@gmail.com",
      subject: "This mail sending using google API",
      text: "This API is working",
      html: "<h1>This mail</h1>",
      attachments: [
        { filename: "AUTOCAD.pdf", path: "./Templates/AUTOCAD.pdf" },
      ],
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (err) {
    console.log(err);
  }
}

sendMail()
  .then((result) => console.log("Email Send Done..", result))
  .catch((error) => console.log(error.message));

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
