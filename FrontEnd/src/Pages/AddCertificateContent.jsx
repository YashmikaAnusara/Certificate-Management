import React, { useState } from "react";
import "../CSS/AddCertificateContent.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Port from "../port";

export default function AddCertificateContent() {
  const [c_name, setc_name] = useState("");
  const [c_duration, setc_duration] = useState("");
  const [c_content, setc_content] = useState("");

  const submithandle = () => {
    const data = { c_name, c_duration, c_content };
    axios.post(`http://${Port}:8070/student/coursecontent`,data).then((res) => {
      console.log("Data Added");
    });
  };
  return (
    <div>
      <div className="container">
        <div className="mob-navbar-wrapper">
          <MobNavBar />
        </div>
        <div className="navbar-wrapper">
          <AdminNavBar />
        </div>
        <div className="body-wrapper">
          <div className="body-header">
            <AccountMenu />
          </div>
          <div className="body-container">
            <div className="form">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "45ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Course Name"
                  variant="outlined"
                  value={c_name}
                  onChange={(e) => {
                    setc_name(e.target.value);
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Course Duration"
                  variant="outlined"
                  value={c_duration}
                  onChange={(e) => {
                    setc_duration(e.target.value);
                  }}
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    maxWidth: "80%",
                    minWidth: "45ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Course Content"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={c_content}
                  onChange={(e) => {
                    setc_content(e.target.value);
                  }}
                />
              </Box>
              <div className="sendbtn">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={submithandle}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
