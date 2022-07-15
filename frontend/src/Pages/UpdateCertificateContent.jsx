import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../CSS/AddCertificateContent.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import Port from "../port";

export default function UpdateCertificateContent() {
  const [c_name, setc_name] = useState("");
  const [c_duration, setc_duration] = useState("");
  const [c_content, setc_content] = useState("");

  let { id } = useParams();

  const vertical = "top";
  const horizontal = "right";

  const [wc_name, setwc_name] = useState(false);
  const [wc_duration, setwc_duration] = useState(false);
  const [wc_content, setwc_content] = useState(false);
  const [wdata, setwdata] = useState(false);

  useEffect(() => {
    axios
      .get(`http://${Port}:8070/student/coursecontent/${id}`)
      .then((res) => {
        setc_name(res.data.c_name);
        setc_duration(res.data.c_duration);
        setc_content(res.data.c_content);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
        .put(`http://${Port}:8070/student/coursecontent/${id}`, data)
        .then((res) => {
          console.log("Data Added");
          setwdata(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleClose = (event, reason) => {
    setwdata(false);
    setwc_name(false);
    setwc_duration(false);
    setwc_content(false);
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
            <h2 className="text">Update the Certificate Content</h2>
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
                  rows={6}
                  variant="outlined"
                  value={c_content}
                  onChange={(e) => {
                    setc_content(e.target.value);
                  }}
                  helperText="Test Note"
                />
              </Box>
              <div className="sendbtn">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={submithandle}
                >
                  Update
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
          Data Updated Successfully
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
  );
}
