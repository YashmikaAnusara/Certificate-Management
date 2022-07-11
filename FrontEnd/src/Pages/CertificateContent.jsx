import React, { useState, useEffect } from "react";
import "../CSS/AdminHome.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import axios from "axios";
import Port from "../port";

export default function CertificateContent() {
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
          <p>hi this is a test page</p>
        </div>
      </div>
    </div>
  );
}