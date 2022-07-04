import React, { useState } from "react";
import "../CSS/RequestDetails.css";
import MonNavBar from "./MobNavBar";
import AdminNavBar from "./AdminNavBar";
import AccountMenu from "./Profile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import Loader from "./Loader";

function RequestDetails() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [pending, setpending] = useState(true);
  const [status, setStatus] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const checkHandler = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setpending(false);
      setStatus(false);
      setIsChecked(true);
    }, 2000);
  };

  const approveHandler = () => {
    setOpen(true);
    setTimeout(() => {
      navigate("/select/certificate");
    }, 2000);
  };

  const backBtnHandler = () => {
    navigate(-1);
  };

  const rejectHandler = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      navigate("/request/certificate/reject");
    }, 2000);
  };

  return (
    <div className="container">
      <Loader open={isOpen} />
      <div className="mob-navbar-wrapper">
        <MonNavBar />
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
            <div className="course-details-body-wrapper">
              <div className="student-questions-wrapper">
                <p className="student-question">Class ID</p>
                <p className="student-question">
                  Name of Certificate applying for{" "}
                </p>
                <p className="student-question">Name of the Course Attended</p>
                <p className="student-question">Lecturer Name</p>
                <p className="student-question">Start date of the course</p>
                <p className="student-question">End date of the course</p>
              </div>
              <div className="student-answer-wrapper">
                <p className="student-answer">Class ID</p>
                <p className="student-answer">
                  Name of Certificate applying for{" "}
                </p>
                <p className="student-answer">Name of the Course Attended</p>
                <p className="student-answer">Lecturer Name</p>
                <p className="student-answer">Start date of the course</p>
                <p className="student-answer">End date of the course</p>
              </div>
            </div>
            <hr />
            <div className="feedback-details-body-wrapper">
              <div className="student-questions-wrapper">
                <p className="student-question">
                  Have you completed the online assignment submission?
                </p>
                <p className="student-question">
                  Do you require a TVEC Certificate?{" "}
                </p>
                <p className="student-question">
                  How do you know about CAAD Center?
                </p>
                <p className="student-question">
                  Do you recommended CADD center courses for others?
                </p>
                <p className="student-question">
                  Learning experience at CADD Center Lanka
                </p>
                <p className="student-question">
                  Lecturer's training proficiency
                </p>
                <p className="student-question">Student coordination</p>
                <p className="student-question">
                  Have you completed the course fee payment?
                </p>
                <p className="student-question">
                  Name of the branch inquired at?
                </p>
                <p className="student-question">Name of the contact person</p>
              </div>
              <div className="student-answer-wrapper">
                <p className="student-answer">Yes</p>
                <p className="student-answer">Yes</p>
                <p className="student-answer">Yes</p>
                <p className="student-answer">Yes</p>
                <p className="student-answer">Yes</p>
                <p className="student-answer">Yes</p>
                <p className="student-answer">Yes</p>
                <p className="student-answer">Yes</p>
                <p className="student-answer">Yes</p>
                <p className="student-answer">Yes</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="request-status-wrapper">
            {pending ? (
              <div className="status-wrapper">
                <HelpOutlineIcon style={{ color: "blue" }} />{" "}
                <p className="status-dis" style={{ color: "blue" }}>
                  Click the check button to see the status!
                </p>
              </div>
            ) : status ? (
              <div className="status-wrapper">
                <CheckCircleOutlineIcon style={{ color: "green" }} />{" "}
                <p className="status-dis" style={{ color: "green" }}>
                  OK! Press "Approve" button to continue...
                </p>
              </div>
            ) : (
              <div className="status-wrapper">
                <DoNotDisturbAltIcon style={{ color: "red" }} />{" "}
                <p className="status-dis" style={{ color: "red" }}>
                  This certificate is alredy issued! <b>Req ID: 09980987</b>
                </p>
              </div>
            )}
          </div>
          <div className="request-action-btn-wrapper">
            {isChecked ? (
              <button className="approve-btn" onClick={approveHandler}>
                Continue
              </button>
            ) : (
              <button className="check-btn" onClick={checkHandler}>
                Check
              </button>
            )}
            <button className="reject-btn" onClick={rejectHandler}>
              Reject
            </button>
          </div>

          {/* ------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default RequestDetails;
