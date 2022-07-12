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
          <div className="course">
            <div className="preview">
              <h6 className="contend">Course Name</h6>
              <h2 className="toipc">3DS Max</h2>
              <div className="subtopic">
                <h6 className="contend">Course Duration</h6>
                <h2 className="toipc">48 Hrs.</h2>
              </div>
            </div>
            <div className="info">
              <h6 className="contend">Course content</h6>
              <p className="p-trunc">
                3ds max for Engineers & Architects. Introduction to 3ds
                max–Interface. Primitives-Keyboard Creation. Selection Methods.
                Coordinate Systems. Parametric & Free Form Deformers, Poly
                Editing Tools, Poly Modelling, Patch Modelling. Importing DWG
                File. 2D shapes-Spline Editing. AEC objects, Compound Objects.
                2D Modifiers. Loft, Shape Merge. X-ref, Merging Max Files.
                Walkthrough. Utility Tools. Materials Editor & Tools,
                Architectural Materials, Application of Maps, Compound
                Materials. Standard Lights, Photometric Lights. Particle
                Systems. Environment Effects. Reactors. Advanced Rendering.
                Video Post. Composite Video–Export File Formats.
              </p>
              <button className="btn">Update</button>
              <button className="btn2">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
