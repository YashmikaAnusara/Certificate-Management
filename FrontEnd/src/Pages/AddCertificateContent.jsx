import React, { useState } from "react";
import "../CSS/AddCertificateContent.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import Port from "../port";

export default function AddCertificateContent() {
  const [c_name, setc_name] = useState("");
  const [c_duration, setc_duration] = useState("");
  const [c_content, setc_content] = useState("");
  const navigate = useNavigate();

  const username=localStorage.getItem("username")



  const vertical = "top";
  const horizontal = "right";

  const [wc_name, setwc_name] = useState(false);
  const [wc_duration, setwc_duration] = useState(false);
  const [wc_content, setwc_content] = useState(false);
  const [wdata, setwdata] = useState(false);

  const submithandle = () => {
    const data = { c_name, c_duration, c_content };
    if (data.c_name === "") {
      setwc_name(true);
    } else if (data.c_duration === "") {
      setwc_duration(true);
    } else if (data.c_content === "") {
      setwc_content(true);
    } else {
      axios
        .post(`http://${Port}:8070/student/coursecontent`, data)
        .then((res) => {
          // console.log("Data Added");
          setwdata(true);
          setTimeout(() => {
            navigate(-1);
          }, 900);
        });
    }
  };

  const backBtnHandler = () => {
    navigate(-1);
  };

  const handleClose = (event, reason) => {
    setwdata(false);
    setwc_name(false);
    setwc_duration(false);
    setwc_content(false);
  };
  return username ? (
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
            <ArrowBackIcon onClick={backBtnHandler} className="back-btn" />
            <h2 className="text">Add the Certificate Content</h2>
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
                  "& p": {
                    color:"red"
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
                  rows={6}
                  variant="outlined"
                  className="field"
                  value={c_content}
                  onChange={(e) => {
                    setc_content(e.target.value);
                  }}
                  helperText="If adding a new coruse content please make sure to start with a new line"
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
      <Snackbar
        open={wdata}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Course Content Added Successfully
        </Alert>
      </Snackbar>
      <Snackbar
        open={wc_name}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Enter the Course Name
        </Alert>
      </Snackbar>
      <Snackbar
        open={wc_duration}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Enter the Course Duration
        </Alert>
      </Snackbar>
      <Snackbar
        open={wc_content}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Enter the Course Content
        </Alert>
      </Snackbar>
    </div>
  ) : (
    navigate("/")
  );
}
