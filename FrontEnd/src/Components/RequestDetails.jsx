import React, { useState, useEffect } from "react";
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
import axios from "axios";
import Port from "../port";
import { useParams } from "react-router-dom";

function RequestDetails() {
  const params = useParams();
  const id = parseInt(params.id);
  const nic = params.nic;

  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [pending, setpending] = useState(true);
  const [status, setStatus] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
    axios
      .get(`http://${Port}:8070/request/details/${id}/${nic}`)
      .then((res) => {
        if(res.data){
          setOpen(false);
          setDetails(res.data);
        }
      })
      .catch((err) => {
        if(err){
          setOpen(false);
          alert(err);
        }
      });
  }, [id, nic]);

  const checkHandler = () => {
    setOpen(true);
    axios
      .get(`http://${Port}:8070/request/details/check/${id}/${nic}`)
      .then((res) => {
        if (res.data !== 0) {
          setTimeout(() => {
            setOpen(false);
            setpending(false);
            setStatus(false);
            setIsChecked(true);
          }, 2000);
        } else {
          setTimeout(() => {
            setOpen(false);
            setpending(false);
            setStatus(true);
            setIsChecked(true);
          }, 2000);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const approveHandler = () => {
      navigate(`/requests/detail/${id}/${nic}/certificate`);
  };

  const backBtnHandler = () => {
    navigate(-1);
  };

  const rejectHandler = () => {
    
    navigate(`/requests/detail/${id}/${nic}/reject`);

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
                Request Date: <b>{details.s_date ? details.s_date: "-"}</b>
              </p>
            </div>
          </div>
          <div className="student-request-details-body-wrapper">
            <div className="student-details-body-wrapper">
              <div className="student-questions-wrapper">
                <p className="student-question">Student Name</p>
                <p className="student-question">NIC</p>
                <p className="student-question">Email Address</p>
                <p className="student-question">Contact No</p>
                <p className="student-question">Occupation</p>
                <p className="student-question">Assignment Submission Date</p>
              </div>
              <div className="student-answer-wrapper">
                <p className="student-answer">
                  {details.name ? details.name : "-"}
                </p>
                <p className="student-answer">
                  {details.nic ? details.nic : "-"}
                </p>
                <p className="student-answer">
                  {details.email ? details.email : "-"}
                </p>
                <p className="student-answer">
                  {details.p_number ? details.p_number : "-"}
                </p>
                <p className="student-answer">
                  {details.occupation ? details.occupation : "-"}
                </p>
                <p className="student-answer">
                  {details.a_submission_d ? details.a_submission_d : "-"}
                </p>
              </div>
            </div>
            <hr />
            <div className="course-details-body-wrapper">
              <div className="student-questions-wrapper">
                <p className="student-question">Class ID</p>
                <p className="student-question">
                  Name of Certificate applying for
                </p>
                <p className="student-question">Name of the Course Attended</p>
                <p className="student-question">Lecturer Name</p>
                <p className="student-question">Start date of the course</p>
                <p className="student-question">End date of the course</p>
              </div>
              <div className="student-answer-wrapper">
                <p className="student-answer">
                  {details.class_id ? details.class_id : "-"}
                </p>
                <p className="student-answer">
                  {details.name_cerificate ? details.name_cerificate : "-"}{" "}
                </p>
                <p className="student-answer">
                  {details.name_c_attended ? details.name_c_attended : "-"}
                </p>
                <p className="student-answer">
                  {details.name_lecturer ? details.name_lecturer : "-"}
                </p>
                <p className="student-answer">
                  {details.s_date_course ? details.s_date_course : "-"}
                </p>
                <p className="student-answer">
                  {details.e_date_course ? details.e_date_course : "-"}
                </p>
              </div>
            </div>
            <hr />
            <div className="feedback-details-body-wrapper">
              <div className="student-questions-wrapper">
                <p className="student-question">
                  Have you completed the online assignment submission?
                </p>
                <p className="student-question">
                  Do you require a TVEC Certificate?
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
                <br/>
                <p className="student-question">FeedBack</p>
              </div>
              <div className="student-answer-wrapper">
                <p className="student-answer">
                  {details.c_o_a_submission ? details.c_o_a_submission : "-"}
                </p>
                <p className="student-answer">
                  {details.tvec_certificate ? details.tvec_certificate : "-"}
                </p>
                <p className="student-answer">
                  {details.k_a_cadd_center ? details.k_a_cadd_center : "-"}
                </p>
                <p className="student-answer">
                  {details.r_cadd_center ? details.r_cadd_center : "-"}
                </p>
                <p className="student-answer">
                  {details.r_l_experience ? details.r_l_experience : "-"}
                </p>
                <p className="student-answer">
                  {details.l_t_proficiency ? details.l_t_proficiency : "-"}
                </p>
                <p className="student-answer">
                  {details.s_coordination ? details.s_coordination : "-"}
                </p>
                <p className="student-answer">
                  {details.c_fee_payment ? details.c_fee_payment : "-"}
                </p>
                <p className="student-answer">
                  {details.b_inquired ? details.b_inquired : "-"}
                </p>
                <p className="student-answer">
                  {details.c_person ? details.c_person : "-"}
                </p>
                <br/>
                <p className="student-answer">
                  {details.feedbak ? details.feedbak : "-"}
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="request-status-wrapper">
            {pending ? (
              <div className="status-wrapper">
                <HelpOutlineIcon style={{ color: "blue" }} />{" "}
                <p className="status-dis" style={{ color: "blue" }}>
                  Click the "Check" button to see the status!
                </p>
              </div>
            ) : status ? (
              <div className="status-wrapper">
                <CheckCircleOutlineIcon style={{ color: "green" }} />{" "}
                <p className="status-dis" style={{ color: "green" }}>
                  OK!
                </p>
              </div>
            ) : (
              <div className="status-wrapper">
                <DoNotDisturbAltIcon style={{ color: "red" }} />{" "}
                <p className="status-dis" style={{ color: "red" }}>
                  One of the certificates is alredy issued! <b>NIC:{details.nic}</b>
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
