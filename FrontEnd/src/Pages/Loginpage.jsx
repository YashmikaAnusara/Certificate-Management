import React, { useState } from "react";
import "../CSS/LoginPage.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Port from "../port";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [logerror, setlogerror] = useState(false);
  const nav = useNavigate();

  const handleClick = () => {
    setLoading(true);
    axios
      .get(`http://${Port}:8070/student/login/${username}/${password}`)
      .then((res) => {
          if (res.data.position === "admin") {
          localStorage.setItem("admin_username", res.data.username);
          localStorage.setItem("admin_password", res.data.password);
          setTimeout(() => {
            nav("/dashboard");
          }, 3000);
        } else {
          setTimeout(() => {
            setLoading(false);
            setlogerror(true);
            console.log(res.data);
          }, 3000);
        }
      })
      .catch((err) => {
        seterror(true);
        setLoading(false);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    seterror(false);
    setlogerror(false);
  };

  return (
    <div className="LoginBody">
      <div className="LoginCon">
        <div className="LoginText">
          <h1>
            Hi, Wellcome<br/><div className="typing anim-typewriter">CADD Cente</div>
          </h1>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              // m: 1,
              width: "38ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="LoginFrom">
            <h3 className="LoginSubText">Sign in with Email Address</h3>
            <TextField
              type="email"
              value={username}
              label="Username"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              variant="outlined"
            />
            <TextField
              type="password"
              value={password}
              label="Password"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              variant="outlined"
            />
            <div className="LoginButton">
              <LoadingButton
                size="small"
                onClick={handleClick}
                loading={loading}
                color="secondary"
                variant="contained"
              >
                Sign in
              </LoadingButton>
            </div>
          </div>
        </Box>
      </div>

      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Enter your credentials to continue
        </Alert>
      </Snackbar>
      <Snackbar open={logerror} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Your username or password is incorrect
        </Alert>
      </Snackbar>
    </div>
  );
}
