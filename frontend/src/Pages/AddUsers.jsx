import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Adduser.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import Port from "../port";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../Components/Loader";

export default function Addusers() {
  const [active, setActive] = useState(false);
  const user_name = localStorage.getItem("username");
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const userAddhandler = () => {
    setActive(!active);
  };

  useEffect(() => {
    axios
      .get(`http://${Port}:8070/request/user/details`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  },[]);

  return user_name ? (
    <div>
      <div className="container">
        <Loader open={isOpen} />
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
            <div className="certificate-temp-add-btn-wrapper clearfix">
              <p className="certificate-temp-add-dis">Add a User</p>
               
              {!active ? (
                <AddCircleOutlineOutlinedIcon
                  className="certificate-temp-add-btn"
                  fontSize="medium"
                  onClick={userAddhandler}
                  titleAccess="Add Users"
                />
              ) : (
                <DoDisturbIcon
                  className="certificate-temp-add-btn"
                  fontSize="medium"
                  onClick={userAddhandler}
                  style={{ color: "red" }}
                />
              )}
              {active ? <AddUser /> : null}
            </div>
            <hr />
            <div className="certificate-temp-body-wrapper clearfix">
              <p className="certificate-temp-dis2">Users</p>
              <br/>
              <div>
                {details.map((detail, index) => (
                  <UserDetails
                    uName={detail.username}
                    password={detail.password}
                    key={index}
                    setIsOpen={setIsOpen}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    navigate("/")
  );
}

function AddUser() {
  const vertical = "top";
  const horizontal = "right";

  const handleClose = (event, reason) => {
    setwdata(false);
    setwusername(false);
    setwpassword(false);
  };

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [position] = useState("admin");
  const [wusername, setwusername] = useState(false);
  const [wpassword, setwpassword] = useState(false);
  const [wdata, setwdata] = useState(false);

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
  return (
    <div className="user-adding-form-wrapper">
      <div className="input-feilds-wrapper">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            className="input-feilds"
            label="Enter username"
            variant="outlined"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            className="input-feilds"
            label="Enter password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </Box>
      </div>

      <div className="user-adding-btn-wrapper">
        <Button variant="contained" onClick={submithandle}>
          Add User
        </Button>
      </div>
      <div>
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
    </div>
  );
}

function UserDetails(props) {
  const removerUser = () => {
    props.setIsOpen(true);
    const confirmBox = window.confirm("Are you sure want to remove this user?");
    if (confirmBox === true) {
      axios
        .delete(
          `http://${Port}:8070/request/delete/user/${props.uName}/${props.password}`
        )
        .then((res) => {
          if (res.data) {
            props.setIsOpen(false);
            alert("Done");
            window.location.reload(false);
          }
        })
        .catch((err) => {
          if (err) {
            props.setIsOpen(false);
            alert(err);
          }
        });
    }
  };

  return (
    <div className="user-details-wrapper">
      <PermIdentityOutlinedIcon
        fontSize="small"
        style={{ marginTop: "2px", marginRight: "15px" }}
      />
      <p className="user-detail"> {props.uName}</p>
      <PasswordOutlinedIcon
        fontSize="small"
        style={{ marginTop: "2px", marginRight: "15px" }}
      />
      <p className="user-detail">{props.password}</p>
      <DeleteIcon
        fontSize="small"
        style={{ marginRight: "15px", color: "red" }}
        titleAccess="Remove Users"
        onClick={removerUser}
      />
    </div>
  );
}
