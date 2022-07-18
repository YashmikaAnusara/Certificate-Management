import React, { useState, useEffect } from "react";
import "../CSS/CertificateContent.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Port from "../port";

export default function CertificateContent() {
  const [c_content, setc_content] = useState([]);
  const [found, setFound] = useState("");
  const [c_delete, setc_delete] = useState(false);
  const nav = useNavigate();

  const username=localStorage.getItem('username')

  const vertical = "top";
  const horizontal = "right";

  useEffect(() => {
    axios
      .get(`http://${Port}:8070/student/coursecontent`)
      .then((res) => {
        setc_content(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updatehandler = (id) => {
    nav(`/updatecertificatecontent/${id}`);
  };

  const deletehandler = (id) => {
    if (
      window.confirm("Do You Want Delete This Certificate Content?") === true
    ) {
      axios
        .delete(`http://${Port}:8070/student/coursecontent/${id}`)
        .then((res) => {
          // console.log("Data Delete");
          setc_delete(true);
          setTimeout(() => {
            window.location.reload();
          }, 700);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Not Delete this content");
    }
  };

  const handleClose = (event, reason) => {
    setc_delete(false);
  };

  const requset = c_content.filter((data) => {
    return (
      data.c_name.toLowerCase().includes(found.toLowerCase()) ||
      data.c_duration.toLowerCase().includes(found.toLowerCase())
    );
  });

  return username?(
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
          <div className="button">
            <input
              type="search"
              placeholder="Course Name or Course Duration Search..."
              className="certificate-content-search"
              onChange={(event) => {
                setFound(event.target.value);
              }}
            />
            <NavLink to="/addcertificatecontent" className="navbar-link">
              <Button variant="contained">Add the Certificate Content</Button>
            </NavLink>
          </div>

          {requset.map((data, index) => (
            <div key={index}>
              <div className="course">
                <div className="preview">
                  <h6 className="contend">Course Name</h6>
                  <h2 className="toipc">{data.c_name}</h2>
                  <div className="subtopic">
                    <h6 className="contend">Course Duration</h6>
                    <h2 className="toipc">{data.c_duration}</h2>
                  </div>
                </div>
                <div className="info">
                  <h6 className="contend">Course content</h6>
                  <p className="p-trunc">{data.c_content}</p>
                  <div className="btnpos">
                    <button
                      className="btn"
                      onClick={() => updatehandler(data.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn2"
                      onClick={() => deletehandler(data.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Snackbar
        open={c_delete}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Course Content Deleted
        </Alert>
      </Snackbar>
    </div>
  ):nav("/");
}
