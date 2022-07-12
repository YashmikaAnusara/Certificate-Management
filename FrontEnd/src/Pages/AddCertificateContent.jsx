import React from "react";
import "../CSS/AddCertificateContent.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function AddCertificateContent() {
  const [c_name, setc_name] = useState("");
  const [c_duration, setc_duration] = useState("");
  const [c_content, setc_content] = useState("");

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
                />
                <TextField
                  id="outlined-basic"
                  label="Course Duration"
                  variant="outlined"
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
                />
              </Box>
              <div className="sendbtn">
                <Button variant="contained" endIcon={<SendIcon />}>
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
