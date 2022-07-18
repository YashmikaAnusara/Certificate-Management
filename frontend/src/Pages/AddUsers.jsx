import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import Port from "../port";

export default function Addusers() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [position] = useState("admin");

  const [wusername, setwusername] = useState(false);
  const [wpassword, setwpassword] = useState(false);
  const [wdata, setwdata] = useState(false);

  const user_name = localStorage.getItem("username");
  const vertical = "top";
  const horizontal = "right";

  const navigate = useNavigate();

  const submithandle = () => {
    const data = { username, password, position };
    if (data.username === "") {
      setwusername(true);
    } else if (data.password === "") {
      setwpassword(true);
    } else {
      axios.post(`http://${Port}:8070/student/adduser`, data).then((res) => {
        // console.log("Data Added");
        setwdata(true);
        setTimeout(() => {
          window.location.reload();
        }, 900);
      });
    }
  };

  const handleClose = (event, reason) => {
    setwdata(false);
    setwusername(false);
    setwpassword(false);
  };
  return user_name ? (
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
                  label="Enter username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Enter password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </Box>
              <div className="sendbtn">
                <Button variant="contained" onClick={submithandle}>
                  Add User
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
          User Added Added Successfully
        </Alert>
      </Snackbar>
      <Snackbar
        open={wusername}
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
          Enter the Username
        </Alert>
      </Snackbar>
      <Snackbar
        open={wpassword}
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
          Enter the Password
        </Alert>
      </Snackbar>
    </div>
  ) : (
    navigate("/")
  );
}
