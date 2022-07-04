import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../CSS/RequestDetails.css";

function CertificateRejectMessage() {
  const navigate = useNavigate();
  const backBtnHandler = () => {
    navigate(-1);
  };
  const submitHandler = () => {};
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
          {/* ------------------------------------------------------ */}
          <ArrowBackIcon onClick={backBtnHandler} className="back-btn" />
          <div className="student-request-details-header-wrapper">
            <div className="student-request-id">
              <p>102065042364BB</p>
            </div>
            <div className="student-request-timedate">
              <p>
                Request Date: <b>2022.06.21</b>
              </p>
            </div>
          </div>
          <div className="student-request-details-body-wrapper">
            <div className="student-details-body-wrapper">
              <div className="student-questions-wrapper">
                <p className="student-question">Registration No</p>
                <p className="student-question">Student Name</p>
                <p className="student-question">NIC</p>
                <p className="student-question">Email Address</p>
                <p className="student-question">Contact No</p>
                <p className="student-question">Occupation</p>
                <p className="student-question">Assignment Submission Date</p>
              </div>
              <div className="student-answer-wrapper">
                <p className="student-answer">Registration No</p>
                <p className="student-answer">Student Name</p>
                <p className="student-answer">NIC</p>
                <p className="student-answer">Email Address</p>
                <p className="student-answer">Contact No</p>
                <p className="student-answer">Occupation</p>
                <p className="student-answer">Assignment Submission Date</p>
              </div>
            </div>
            <hr />
            <div className="student-request-details-body-wrapper">
              <center>
                <textarea
                  rows="5"
                  className="message-area"
                  placeholder="Enter your reason..."
                />
              </center>
              <center>
                <button className="approve-btn" onClick={submitHandler}>
                  Submit
                </button>
              </center>
            </div>
          </div>
          {/* ------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default CertificateRejectMessage;
