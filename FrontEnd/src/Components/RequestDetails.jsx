import React, { useState, useEffect } from "react";
import "../CSS/RequestDetails.css";
import MonNavBar from "./MobNavBar";
import AdminNavBar from "./AdminNavBar";
import AccountMenu from "./Profile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import Loader from "./Loader";
import axios from "axios";
import Port from "../port";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function RequestDetails() {
  const params = useParams();
  const id = params.id;
  const nic = params.nic;

  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [pending, setpending] = useState(true);
  const [status, setStatus] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [ctype, setctype] = useState("");
  const [open, setOpen1] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const [grade, setgrade] = useState("");

  useEffect(() => {
    setOpen(true);
    axios
      .get(`http://${Port}:8070/request/details/${id}/${nic}`)
      .then((res) => {
        if (res.data) {
          setOpen(false);
          setDetails(res.data);
        }
      })
      .catch((err) => {
        if (err) {
          setOpen(false);
          alert(err);
        }
      });
  }, [id, nic]);

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        fetch(`http://${Port}:8070/request/course/content`)
          .then((response) => response.json())
          .then((data) => {
            setOptions(data);
          });
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const checkHandler = () => {
    if (grade === "" ) {
      alert("Grade cannot be empty!");
    }
    else if(ctype === ""){
      alert("Course type cannot be empty!!");
    } else {
      console.log(ctype);
      setOpen(true);
      axios
        .get(`http://${Port}:8070/request/details/check/${ctype}/${nic}`)
        .then((res) => {
          if (res.data !== 0) {
            setTimeout(() => {
              setOpen(false);
              setpending(false);
              setStatus(false);
            }, 2000);
          } else {
            setTimeout(() => {
              setOpen(false);
              setpending(false);
              setStatus(true);
            }, 2000);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const approveHandler = () => {
     
      navigate(`/requests/detail/${id}/${nic}/${ctype}/${grade}/certificate`);
  
  };

  const backBtnHandler = () => {
    navigate(-1);
  };

  const rejectHandler = () => {
    navigate(`/requests/detail/${id}/${nic}/reject`);
  };

  const viewReceiptHandler=()=>{
    setOpen(true)
    axios({
      url: `http://${Port}:8070/request/slip/${id}`,
      method: "GET",
      responseType: "blob",
    })
      .then((res) => {
        if(res.data){
          setOpen(false);
          const file = new Blob([res.data], { type: "image/jpg" });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        }
      })
      .catch((err) => {
        if(err){
          setOpen(false);
          alert(err);
        }
      });
  }

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
          <ReceiptOutlinedIcon onClick={viewReceiptHandler} className="download-btn" titleAccess='Download the Receipt'/>
          <div className="student-request-details-header-wrapper">
            <div className="student-request-id">
              <p>
                Certificate ID: <b>{details.uuid ? details.uuid : "-"}</b>
              </p>
            </div>
            <div className="student-request-timedate">
              <p>
                Request Date: <b>{details.s_date ? details.s_date : "-"}</b>
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
                <p className="student-answer">
                  {details.feedbak ? details.feedbak : "-"}
                </p>
                <br />
              </div>
            </div>
            <div className="course-content-wrapper">
              <TextField
                className="course-content-drop-down"
                id="outlined-basic"
                label="Enter the Grade"
                variant="outlined"
                value={grade}
                onChange={(e) => {
                  setgrade(e.target.value);
                }}
              />
              <Autocomplete
                id="c_type"
                name="c_type"
                className="course-content-drop-down"
                open={open}
                onOpen={() => {
                  setOpen1(true);
                }}
                onClose={() => {
                  setOpen1(false);
                }}
                getOptionLabel={(option) => option.c_name}
                onChange={(e, value) => {
                  setctype(value.c_name);
                }}
                options={options}
                loading={loading}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select the Course Type"
                    value={ctype}
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
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
                  One of the certificates is alredy issued!{" "}
                  <b>NIC:{details.nic}</b>
                </p>
              </div>
            )}
          </div>
          <div className="request-action-btn-wrapper">
            {pending ? (
              <button className="check-btn" onClick={checkHandler}>
                Check
              </button>
            ) : status ? (
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
