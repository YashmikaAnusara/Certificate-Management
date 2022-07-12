import React, { useState, useEffect } from "react";
import "../CSS/CertificateContent.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Port from "../port";

export default function CertificateContent() {
  const [c_content, setc_content] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${Port}:8070/student/coursecontent`)
      .then((res) => {
        setc_content(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
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
          <NavLink to="/addcertificatecontent" className="navbar-link">
            <div className="button">
              <Button variant="contained">Add the Certificate Content</Button>
            </div>
          </NavLink>
          {c_content.map((data, index) => (
            <div className="course" key={index}>
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
                <button className="btn">Update</button>
                <button className="btn2">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
